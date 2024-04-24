import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Signout successful",
    });
    response.cookies.set("token", "", {
      httpOnly: true,
      maxAge: 0,
    });
    return response;
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message });
  }
}
