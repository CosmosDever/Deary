import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string; diaryn: string; page: string } }
) {
  try {
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
    const diaryn = params.diaryn;
    const page = params.page;

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

    const diaryEntry = diary.diary[diaryn];
    if (!diaryEntry) {
      return NextResponse.json({
        success: false,
        message: "Diary entry not found",
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
    const numberOfpage = Object.keys(diaryEntry.page).length;
    const newpg = `page${numberOfpage + 1}`;

    diaryEntry.page[newpg] = {
      dateandtime: formattedDate,
      mood: "none",
      img_link: {},
      text: "Start writing here",
    };

    await diariesCollection.updateOne(
      { user_id: id },
      { $set: { [`diary.${diaryn}`]: diaryEntry } },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: `'${newpg}' added successfully to the diary entry '${diaryn}'`,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
