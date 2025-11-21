// src\app\api\home\route.ts

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

/* 
====================================================================
 GET /api/products
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

        const res = await axios.get(url);

        const status = res.status;
        const statusText = res.statusText;

        const statusErrorCodes = [404, 503];

        if (statusErrorCodes.includes(status)) {
            return NextResponse.json(
                { error: `${statusText || "Error"}` },
                { status: status }
            );
        }

        const data = await res.data;

        return NextResponse.json(data, { status: status });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}