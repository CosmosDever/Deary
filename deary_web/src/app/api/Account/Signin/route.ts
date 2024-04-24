import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, password } = reqBody;
    const client = await clientPromise;
    const db = client.db("Deary");
    const usersCollection = db.collection("Account");

    const user = await usersCollection.findOne({ username });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Invalid username or password",
      });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Invalid username or password",
      });
    }
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "1m",
    });
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    const cookie = response.cookies.get("token");
    console.log("Cookie:", cookie);
    return response;
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message });
  }
}
