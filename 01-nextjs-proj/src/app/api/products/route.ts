// src\app\api\products\route.ts

import { NextRequest, NextResponse } from "next/server";

import { cookies as _cookies } from "next/headers";

import axios from "axios";

import { ProductsResponse } from "@/types/products.types";

export async function GET(req: NextRequest) {
  try {
    const SERVER_URL = process.env.SERVER_URL;
    if (!SERVER_URL) throw new Error("Server URL missing");

    const cookies = await _cookies();

    const accessTokenCookieKey = process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY || "access_token_users_auth_v1";
    const refreshTokenCookieKey = process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY || "refresh_token_users_auth_v1";

    if (!accessTokenCookieKey || !refreshTokenCookieKey) throw new Error("Missing cookie key");

    const accessTokenCookie = cookies.get(accessTokenCookieKey);
    const refreshTokenCookie = cookies.get(refreshTokenCookieKey);

    if (!accessTokenCookie || !refreshTokenCookie) {
      return NextResponse.json({ error: "Missing or invalid cookies" }, { status: 401 });
    }

    const accessToken = accessTokenCookie.value;

    if (!accessToken) {
      return NextResponse.json({ error: "Session invalid or expired" }, { status: 401 });
    }

    const authHeader = `Bearer ${accessToken}`;

    const queryString = req.nextUrl.searchParams.toString();
    const query = queryString ? `?${queryString}` : '';
    const endPoint = `/products`
    const url = `${SERVER_URL}${endPoint}${query}`.trim();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader
      }
    }

    const res = await axios.get<ProductsResponse>(url, config);

    // Just return the raw data from the API
    return NextResponse.json(res.data);

  } catch (err: unknown) {
    // Uniform error response
    let status = 500;
    let message = "Unknown error";
    if (axios.isAxiosError(err)) {
      status = err.response?.status || 500;
      message = err.response?.data?.message || err.message;
    } else if (err instanceof Error) {
      message = err.message;
    }

    return NextResponse.json({ error: message }, { status });
  }
}
