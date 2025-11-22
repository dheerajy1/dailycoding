// src\proxy.ts

import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {

    const refreshTokenCookieKey = process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY || "refresh_token_users_auth_v1";

    // If cookie keys are missing → redirect to an error screen
    if (!refreshTokenCookieKey) {
        const url = new URL("/error/misconfigured-auth", req.url);
        url.searchParams.set("msg", "Missing authentication configuration");
        return NextResponse.redirect(url);
    };
    const refreshToken = req.cookies.get(refreshTokenCookieKey)?.value;

    // If only refresh token missing → redirect "/"
    if (!refreshToken) return NextResponse.redirect(new URL("/", req.url));

    // Otherwise allow access to the protected route
    return NextResponse.next();
}

// Protect paths
export const config = {
    matcher: ["/home/:path*", "/home-v2/:path*"],
};
