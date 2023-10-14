import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: NextRequest) {
    return NextResponse.json({
        success: true,
        message: "Successfully logged out.",
    });
}
