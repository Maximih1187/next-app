import { NextResponse } from "next/server";
import { headers } from "./headers";

export async function GET(req: Request) {
  return NextResponse.json(headers);
}
export async function POST(req: Request) {
  const body = headers.push(await req.json());
  return NextResponse.json(body);
}
