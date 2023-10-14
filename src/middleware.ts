import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export default async function (request: NextRequest) {
    const sessionId = request.cookies.get("mb_session")?.value;

    // If there is no session cookie, redirect to login
    if (!sessionId) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const currentSession = await prisma.session.findUnique({
        where: {
            id: Number(sessionId),
        },
    });

    console.log(currentSession);

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!_next/static|_next/image|favicon.ico|about|login|api/login).*)",
    ],
};
