import { NextResponse } from "next/server";
import type { NextRequest, NextMiddleware } from "next/server";

export const tempSessionTokens = ["jamie@jamie.com", "kenny@kenny.com"];

export const middleware: NextMiddleware = (request: NextRequest) => {};

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
