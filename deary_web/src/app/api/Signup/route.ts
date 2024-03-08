import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, username, password } = reqBody;
    const client = await clientPromise;
    const db = client.db("Deary");
    const usersCollection = db.collection("Account");

    const user = await usersCollection.findOne({ email });

    if (user) {
      return NextResponse.json({
        success: false,
        message: "Email already exists",
      });
    }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = {
      email,
      username,
      password: hashedPassword,
    };

    await usersCollection.insertOne(newUser);

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message });
  }
}
