import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
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
    const reqBody = await req.json();
    const { title } = reqBody;
    if (!title) {
      return NextResponse.json({
        success: false,
        message: "Title is required",
      });
    }
    const client = await clientPromise;
    const db = client.db("Deary");
    const diariesCollection = db.collection("Diary");
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

    const userDiary = await diariesCollection.findOne({ user_id: id });
    if (!userDiary) {
      return NextResponse.json({
        success: false,
        message: "User's diary not found",
      });
    }

    const numberOfDiaries = Object.keys(userDiary.diary).length;

    const newDiaryKey = `diary${numberOfDiaries + 1}`;
    const newDiaryEntry = {
      dateandtime: formattedDate,
      img_link: {},
      page: {
        page1: {
          dateandtime: formattedDate,
          mood: "none",
          img_link: {},
          text: "Start writing here",
        },
      },
      title: title,
    };

    await diariesCollection.updateOne(
      { user_id: id },
      { $set: { [`diary.${newDiaryKey}`]: newDiaryEntry } },
      { upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: "Diary created",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
