import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

// delete page
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string; date: string; pageKey: string } }
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
    const userId = params.id;

    if (userId !== decodedToken!.id) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { date, pageKey } = params;
    console.log(date, pageKey);

    const client = await clientPromise;
    const db = client.db("Deary");
    const diariesCollection = db.collection("Diary");

    const diary = await diariesCollection.findOne({ user_id: userId });
    if (!diary) {
      return NextResponse.json({
        success: false,
        message: "You have no diary",
      });
    }

    const diaryEntry = diary.diary[date];
    if (!diaryEntry) {
      return NextResponse.json({
        success: false,
        message: "Diary not found",
      });
    }

    const pages = diaryEntry.page;
    if (!pages || !pages[pageKey]) {
      return NextResponse.json({
        success: false,
        message: "Page not found",
      });
    }

    // Remove the specific page
    await diariesCollection.updateOne(
      { user_id: userId },
      { $unset: { [`diary.${date}.page.${pageKey}`]: "" } }
    );

    return NextResponse.json({
      success: true,
      message: "Page deleted",
    });
  } catch (error: any) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json({ error: error.message });
  }
}
