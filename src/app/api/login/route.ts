import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/db";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email, password } = body || {};

    if (!email || !password) {
        return NextResponse.json(
            {
                success: false,
                errors: ["Email or password missing."],
            },
            { status: 400 }
        );
    }

    const adminAccount = await prisma.admin.findUnique({ where: { email } });

    if (!adminAccount || password !== adminAccount.password) {
        return NextResponse.json(
            {
                success: false,
                errors: ["Incorrect email or password"],
            },
            { status: 400 }
        );
    }

    // User is successfully authenticated

    // Create a new session for the user
    const newSession = await prisma.session.create({
        data: { admin_id: adminAccount.id },
    });

    const response = NextResponse.json({
        success: true,
        message: "Successfully logged in.",
    });

    // Set cookie on client with the session id
    response.cookies.set("mb_session", newSession.id.toString());

    return response;
}
