import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";
interface DiaryEntry {
  dateandtime: string;
  img_link: { [key: string]: string };
  page: {
    [key: string]: {
      dateandtime: string;
      mood: string;
      img_link: { [key: string]: string };
      text: string;
    };
  };
  title: string;
}

interface DiaryDocument {
  _id: { $oid: string };
  user_id: string;
  diary: { [key: string]: DiaryEntry };
}

export async function GET(
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
    const client = await clientPromise;
    const db = client.db("Deary");
    const diariesCollection = db.collection<DiaryDocument>("Diary");
    const diary = await diariesCollection.findOne({ user_id: id });
    if (!diary) {
      return NextResponse.json({
        success: false,
        message: "Diary not found",
      });
    }

    const diaryEntries = Object.values(diary.diary);
    const diaryTitles = diaryEntries.map((entry: DiaryEntry) => entry.title);

    return NextResponse.json({
      success: true,
      diaryTitles: diaryTitles,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
