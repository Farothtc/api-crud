import { NextRequest, NextResponse } from "next/server";
import people from "@/app/lib/people";

export async function GET() {
  return NextResponse.json({ success: true, data: people }, { status: 200 });
}
