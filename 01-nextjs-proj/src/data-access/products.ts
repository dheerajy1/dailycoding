// src\data-access\products.ts

import axios from "axios";
import { ProductsResponse } from "@/types/products";

interface Props {
  query: string;
}

type GetProductsProps = ({ query }: Props) => Promise<{
  success: boolean;
  message: string;
  status: number;
  data: ProductsResponse | null;
}>;

const getProducts: GetProductsProps = async ({ query = "" }) => {
  try {

    const _query = query ? `?${query}` : "";

    const endPoint = `/api/products`; // call your Next.js route

    const url = `${endPoint}${_query}`.trim();

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // Call your route which returns raw ProductsResponse
    const res = await axios.get<ProductsResponse>(url, config);

    return {
      success: true,
      message: "Data received successfully",
      status: 200,
      data: res.data, // raw ProductsResponse from the route
    };

  } catch (err: unknown) {
    let message = "Unknown server error";
    let status = 500;
    let data: ProductsResponse | null = null;

    if (axios.isAxiosError(err)) {
      status = err.response?.status || 500;
      message = err.response?.data?.message || err.message;
      data = err.response?.data || null; // raw data from route if any
    } else if (err instanceof Error) {
      message = err.message;
    }

    return { success: false, message, status, data };
  }
};

export { getProducts };
