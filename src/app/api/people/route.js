import { NextRequest, NextResponse } from "next/server";
import people from "@/app/lib/people";

export async function GET() {
  return NextResponse.json({ success: true, data: people }, { status: 200 });
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { success: false, msg: "Please provide a name" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, person: body.name },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, msg: "Invalid request" },
      { status: 400 }
    );
  }
}
