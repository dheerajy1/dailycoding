// src\app\actions\products.ts

"use server";

import { ProductsResponse } from "@/types/products";
import axios from "axios";
import { cookies } from "next/headers";

interface Props {
    query: string;
}

type PostProductsProps = ({ query }: Props) => Promise<{ success: boolean; error: null | string }>

const postProducts: PostProductsProps = async ({ query = '' }) => {

    try {

        const SERVER_URL = process.env.SERVER_URL;
        if (!SERVER_URL) throw new Error("Missing Server URL");

        const _query = query && `?${query}`
        const endPoint = `/products${_query}`

        const url = `${SERVER_URL}${endPoint}`;

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
            // Optional: but server-side does NOT need cookies
            withCredentials: true,
        }

        // Axios syntax:
        const res = await axios.post<ProductsResponse>(
            url,
            config
        );

        // test
        // console.log(`server actions postSignin`, JSON.stringify(res, null, 2))

        // Check for your special status error codes
        if ([404, 503].includes(res.status)) {
            throw new Error(`${res.statusText} (${res.status}).`);
        }

        return { success: true, error: null }; // success

    } catch (err: unknown) {
        // test
        // console.log(`server actions postSignin`, JSON.stringify(err, null, 2))

        if (axios.isAxiosError(err)) {
            // AxiosError
            const message =
                `${err.code},  ${err.message}, ${err.response?.data?.message}` || // If your API sends a message
                err.response?.data?.error ||   // Another common field
                `${err.code}, ${err.message}`;                   // fallback to Axios error message

            return { success: false, error: message };
        } else if (err instanceof Error) {
            // native JS error
            return { success: false, error: err.message };
        } else {
            return { success: false, error: "Unknown server error" };
        }
    }
};

export { postProducts };
