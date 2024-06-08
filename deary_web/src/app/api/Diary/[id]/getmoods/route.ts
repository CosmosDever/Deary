import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt, { JwtPayload } from "jsonwebtoken";

// get all moods
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
    const userId = params.id;

    if (userId !== decodedToken!.id) {
      return NextResponse.json({
        success: false,
        message: "Unauthorized",
      });
    }

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

    const moods = [];
    for (const date in diary.diary) {
      const pages = diary.diary[date].page;
      for (const pageKey in pages) {
        moods.push(pages[pageKey].mood);
      }
    }

    return NextResponse.json({
      success: true,
      moods,
    });
  } catch (error: any) {
    console.error("Error handling GET request:", error);
    return NextResponse.json({ error: error.message });
  }
}
