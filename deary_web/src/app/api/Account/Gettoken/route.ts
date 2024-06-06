import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("token");
    console.log("Cookie:", cookie);

    if (!cookie) {
      return NextResponse.json({ error: "No token found" }, { status: 401 });
    }
    const response = NextResponse.json({ message: "Success", cookie: cookie });
    return response;
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Error handling GET request" },
      { status: 500 }
    );
  }
}
