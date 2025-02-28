import { NextRequest, NextResponse } from "next/server";
import itemsData from "@/app/lib/items";

export async function GET() {
  return NextResponse.json({ success: true, data: itemsData }, { status: 200 });
}
