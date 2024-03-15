import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import jwt from "jsonwebtoken";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
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
    const client = await clientPromise;
    const db = client.db("Deary");
    const diariesCollection = db.collection("Diary");
    const diary = await diariesCollection.findOne({ user_id: id });
    if (!diary) {
      return NextResponse.json({
        success: false,
        message: "Diary not found",
      });
    }
    return NextResponse.json(diary);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
