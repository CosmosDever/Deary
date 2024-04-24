import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

// Route to get diary from page by id
export async function GET(
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
    const pagen = params.page;

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

    const diaryshow = diary.diary[diaryn];
    if (!diaryshow) {
      return NextResponse.json({
        success: false,
        message: "Diary not found",
      });
    }
    const numberOfpage = Object.keys(diaryshow.page).length;
    const pageSelect = diaryshow.page[pagen];
    if (!pageSelect) {
      return NextResponse.json({
        success: false,
        message: "Page not found",
      });
    }

    return NextResponse.json({
      allpage: numberOfpage,
      selectpage: pagen,
      infoselectpage: pageSelect,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string; diaryn: string; page: string } }
) {
  try {
    const cookie = req.cookies.get("token");
    if (!cookie) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    const id = params.id;
    const diaryn = params.diaryn;
    const pagen = params.page;

    const reqBody = await req.json();
    const { newText, mood } = reqBody;

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

    const diaryshow = diary.diary[diaryn];
    if (!diaryshow) {
      return NextResponse.json({
        success: false,
        message: "Diary not found",
      });
    }

    const pageSelect = diaryshow.page[pagen];
    if (!pageSelect) {
      return NextResponse.json({
        success: false,
        message: "Page not found",
      });
    }

    // Update the text of the page
    diaryshow.page[pagen].text = newText;
    diaryshow.page[pagen].mood = mood;

    // Update the date and time of the page
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
    diaryshow.page[pagen].dateandtime = formattedDate;

    // Update the diary entry in the database
    await diariesCollection.updateOne(
      { user_id: id },
      { $set: { [`diary.${diaryn}`]: diaryshow } }
    );

    return NextResponse.json({
      success: true,
      message: "Page updated",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
