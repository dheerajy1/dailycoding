// src\data-access\random-api-url.ts

import axios from "axios";

interface Props {
  query: string;
}

type GetDataProps = ({ query }: Props) => Promise<{
  success: boolean;
  message: string;
  status: number;
  data: unknown | null;
}>;

const getRandomApiUrl: GetDataProps = async ({ query }) => {
  try {

    const _query = `?url=${query}`;

    const endPoint = `/api/url`; // call your Next.js route
    
    const url = `${endPoint}${_query}`.trim();

    // Call your route which returns raw ProductsResponse
    const res = await axios.get(url);

    return {
      success: true,
      message: "Data received successfully",
      status: 200,
      data: res.data, // raw ProductsResponse from the route
    };

  } catch (err: unknown) {
    let message = "Unknown server error";
    let status = 500;
    let data: unknown | null = null;

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

export { getRandomApiUrl };
