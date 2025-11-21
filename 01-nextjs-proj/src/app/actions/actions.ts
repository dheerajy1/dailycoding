// src/lib/server/functions.ts
"use server";

import axios from "axios";

interface Props {
  url: string;
}

const ApiData = async ({ url }: Props) => {
  try {
    if (!url) throw new Error("No URL provided.");

    const res = await axios.get(url);

    // test
    // console.log(`ApiData - server`, res)

    const status = res.status;
    const statusText = res.statusText;

    const statusErrorCodes = [404, 503];

    // Handle specific status errors
    if (statusErrorCodes.includes(status)) {
      throw new Error(`${statusText} (${status}).`);
    }

    return res.data;

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown server error";
    return message;
  }
};

export { ApiData };
