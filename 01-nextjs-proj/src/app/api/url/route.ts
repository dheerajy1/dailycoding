// src\app\api\url\route.ts

import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

/* 
====================================================================
 GET /api/url
--------------------------------------------------------------------
• Purpose: Fetch all data
• Query Params: None
• Authorization: None
• Body: None
• Forwards → ``
====================================================================
*/

export async function GET(req: NextRequest) {
    try {

        const { searchParams } = new URL(req.url);

        const url = searchParams.get("url");

        if (!url) {
            return NextResponse.json({ error: "Missing url param" }, { status: 400 });
        }

        const res = await axios.get<unknown>(url);

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