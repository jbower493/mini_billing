import { NextResponse } from "next/server";
import type { NextRequest, NextMiddleware } from "next/server";

export default () => {};

// export const middleware: NextMiddleware = (request: NextRequest) => {
//     const searchParams = request.nextUrl.searchParams;

//     const isLoggedIn = searchParams.get("logged-in") === "true";

//     if (!isLoggedIn) {
//         const url = request.nextUrl.clone();
//         url.pathname = "/login";

//         return NextResponse.redirect(url);
//     }
// };

// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - _next/static (static files)
//          * - _next/image (image optimization files)
//          * - favicon.ico (favicon file)
//          * - login
//          */
//         "/((?!_next/static|_next/image|favicon.ico|login).*)",
//     ],
// };
