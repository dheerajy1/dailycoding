// src\components\home-v2\dynamic-server-products-stats.tsx
import { ProductsResponse } from "@/types/products.types";
import axios from "axios";
import { cookies as _cookies } from "next/headers";

// Server Component — ppr
export default async function DynamicServerProductsStats() {
  const SERVER_URL = process.env.SERVER_URL;
  if (!SERVER_URL) throw new Error("Server URL missing");

  const cookies = await _cookies();

  const accessTokenCookieKey =
    process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY ||
    "access_token_users_auth_v1";
  const refreshTokenCookieKey =
    process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY ||
    "refresh_token_users_auth_v1";

  if (!accessTokenCookieKey || !refreshTokenCookieKey)
    throw new Error("Missing cookie key");

  const accessTokenCookie = cookies.get(accessTokenCookieKey);
  const refreshTokenCookie = cookies.get(refreshTokenCookieKey);

  if (!accessTokenCookie || !refreshTokenCookie) {
    return "Missing or invalid cookies";
  }

  const accessToken = accessTokenCookie.value;

  if (!accessToken) {
    return "Session invalid or expired";
  }

  const authHeader = `Bearer ${accessToken}`;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Fetch some real dynamic data

  const endPoint = `/products`;
  const url = `${SERVER_URL}${endPoint}`.trim();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
  };

  const res = await axios.get<ProductsResponse>(url, config);
  const products = res.data.products;
  return (
    <div className="rounded border bg-blue-50 p-4">
      <h2 className="font-bold">This is a PPR component</h2>
      <p>Total products</p>
      <p>{products.length}</p>
    </div>
  );
}
