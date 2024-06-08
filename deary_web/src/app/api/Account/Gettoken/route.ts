import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get("token");
    console.log("Cookie:", cookie);

    if (!cookie) {
      return NextResponse.json({ message: "No token found" });
    }
    const token = cookie.value;
    const decodedToken = jwt.decode(token) as JwtPayload;
    const id = decodedToken!.id;
    const username = decodedToken!.username;

    const response = NextResponse.json({
      message: "Success",
      id: id,
      username: username,
    });
    return response;
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Error handling GET request" },
      { status: 500 }
    );
  }
}
