import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcryptjs from "bcryptjs";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, username, password } = reqBody;
    const client = await clientPromise;
    const db = client.db("Deary");
    const usersCollection = db.collection("Account");
    const diariesCollection = db.collection("Diary");

    const user = await usersCollection.findOne({ email });

    if (user) {
      return NextResponse.json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user object with hashed password
    const newUser = {
      email,
      username,
      password: hashedPassword,
    };

    // Insert new user into usersCollection
    const { insertedId } = await usersCollection.insertOne(newUser);
    const userNumericId = insertedId.toHexString();

    // Insert new diary entry for the user
    await diariesCollection.insertOne({
      user_id: userNumericId,
      diary: {},
    });

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
