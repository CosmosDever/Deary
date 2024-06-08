import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string; date: string } }
) {
  try {
    const reqBody = await req.json();
    const { newText, mood, image } = reqBody;
    const cookie = req.cookies.get("token");

    if (!cookie) {
      return NextResponse.json({
        success: false,
        message: "Token not found in cookies",
      });
    }
    const token = cookie.value;
    const decodedToken = jwt.decode(token) as JwtPayload;
    const id = params.id;
    if (id !== decodedToken!.id) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }
    const diaryndate = params.date;
    console.log(diaryndate);

    const client = await clientPromise;
    const db = client.db("Deary");
    const diariesCollection = db.collection("Diary");

    const diary = await diariesCollection.findOne({ user_id: id });
    if (!diary) {
      return NextResponse.json({
        success: false,
        message: "You have no diary",
      });
    }
    console.log(diary.diary[diaryndate]);
    const diaryEntry = diary.diary[diaryndate];
    if (!diaryEntry) {
      const currentDate = new Date();
      const formattedDate = `${currentDate
        .getFullYear()
        .toString()
        .slice(-2)}/${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${currentDate
        .getDate()
        .toString()
        .padStart(2, "0")}, ${currentDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      let datePart: string = formattedDate.split(",")[0];
      let formattedDateSimple: string = datePart.replace(/\//g, "_");

      const newDiaryKey = `${formattedDateSimple}`;
      const newDiaryEntry = {
        dateandtime: formattedDate,
        img_link: {},
        page: {
          page1: {
            dateandtime: formattedDate,
            mood: mood,
            img_link: image,
            text: newText,
          },
        },
      };

      await diariesCollection.updateOne(
        { user_id: id },
        { $set: { [`diary.${newDiaryKey}`]: newDiaryEntry } },
        { upsert: true }
      );
      return NextResponse.json({
        success: true,
        message: "make new diary entry",
      });
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear().toString().slice(-2)}/${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}, ${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    const Objpage = diaryEntry.page || {};
    const pages = Object.keys(Objpage) || [];
    const numberOfpage = pages.length;
    const newpg = `page${numberOfpage + 1}`;

    diaryEntry.page[newpg] = {
      dateandtime: formattedDate,
      mood: mood,
      img_link: image,
      text: newText,
    };

    await diariesCollection.updateOne(
      { user_id: id },
      { $set: { [`diary.${diaryndate}`]: diaryEntry } },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: `'${newpg}' added successfully to the diary entry '${diaryndate}'`,
    });
  } catch (error) {
    console.error("Error adding diary entry:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
