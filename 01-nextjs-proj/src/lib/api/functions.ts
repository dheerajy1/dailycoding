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

    const contentType = res.headers["content-type"] || "";
    const status = res.status;

    const statusErrorCodes = [404, 503];

    // Handle specific status errors
    if (statusErrorCodes.includes(status)) {
      throw new Error(`${res.statusText} (${status}).`);
    }

    // Handle HTML responses
    if (contentType.includes("text/html")) {
      return res.data;
    }

    // Handle JSON responses
    if (
      contentType.includes("application/json") ||
      contentType.includes("application/vnd.api+json")
    ) {
      return res.data;
    }

    // Unknown / unsupported content type
    throw new Error(`Unsupported content type: ${contentType}`);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown server error";
    return message;
  }
};

export { ApiData };
