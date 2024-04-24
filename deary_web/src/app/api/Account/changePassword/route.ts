import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, newPassword } = reqBody;
    const client = await clientPromise;
    const db = client.db("Deary");
    const usersCollection = db.collection("Account");

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }
    const isPasswordSame = await bcryptjs.compare(newPassword, user.password);
    if (isPasswordSame) {
      return NextResponse.json({
        success: false,
        message: "New password cannot be same as old password",
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(newPassword, salt);
    //ifpasswordsame

    const newUser = {
      email: user.email,
      username: user.username,
      password: hashedPassword,
    };
    await usersCollection.updateOne({ email }, { $set: newUser });
    return NextResponse.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message });
  }
}
