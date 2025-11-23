// src\proxy.ts

import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {

    const accessTokenCookieKey = process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY || "access_token_users_auth_v1";
    const refreshTokenCookieKey = process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY || "refresh_token_users_auth_v1";

    // If cookie keys are missing → redirect to an error screen
    if (!refreshTokenCookieKey) {
        const url = new URL("/error/misconfigured-auth", req.url);
        url.searchParams.set("msg", "Missing authentication configuration");
        return NextResponse.redirect(url);
    }

    const refreshToken = req.cookies.get(refreshTokenCookieKey)?.value;
    const accessToken = req.cookies.get(accessTokenCookieKey)?.value;

    const isRootPath = req.nextUrl.pathname === "/";
    const isProtectedPath = req.nextUrl.pathname.startsWith("/home") || req.nextUrl.pathname.startsWith("/home-v2");

    // If user is on root page and has access token → redirect to /home
    if (isRootPath && accessToken) {
        return NextResponse.redirect(new URL("/home", req.url));
    }

    // If trying to access protected routes without refresh token → redirect to "/"
    if (isProtectedPath && !refreshToken) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // Otherwise allow access
    return NextResponse.next();
}

// Protect paths and watch root for redirect
export const config = {
    matcher: ["/", "/home/:path*", "/home-v2/:path*"],
};
