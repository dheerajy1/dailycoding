// src/app/api/auth/me/route.ts

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

import { cookies as _cookies } from "next/headers";


export async function GET(req: NextRequest) {

    try {
        const SERVER_URL = process.env.SERVER_URL;
        if (!SERVER_URL) throw new Error("Server URL missing");

        const cookies = await _cookies();

        const accessTokenCookieKey = process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY || "access_token_users_auth_v1";

        if (!accessTokenCookieKey) throw new Error("Missing cookie key");

        const accessTokenCookie = cookies.get(accessTokenCookieKey);

        if (!accessTokenCookie) {
            return NextResponse.json({ error: "Missing or invalid cookies" }, { status: 401 });
        }

        const accessToken = accessTokenCookie.value;
        if (!accessToken) {
            return NextResponse.json({ error: "Session invalid or expired" }, { status: 401 });
        }

        const authHeader = `Bearer ${accessToken}`;

        const endPoint = `/auth/me`
        const url = `${SERVER_URL}${endPoint}`.trim();

        const config = {
            headers: {
                Authorization: authHeader
            },
            withCredentials: true,
        }
        
        const res = await axios.get(url, config);

        return NextResponse.json(res.data);
    } catch (err: unknown) {
        let status = 401;
        let message = "Session invalid";

        if (axios.isAxiosError(err)) {
            status = err.response?.status || 401;
            message = err.response?.data?.message || err.message;
        } else if (err instanceof Error) {
            message = err.message;
        }

        return NextResponse.json({ error: message }, { status });
    }
}
