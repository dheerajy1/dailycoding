// src\app\actions\auth.ts

"use server";

import axios from "axios";
import { cookies as _cookies } from "next/headers";
import { redirect } from "next/navigation";

interface AuthLoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

type PostSigninProps = (prevState: { success: boolean; error: string | null }, formData: FormData) => Promise<{ success: boolean; error: null | string }>

const postSignin: PostSigninProps = async (prevState, formData) => {

  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const SERVER_URL = process.env.SERVER_URL;
    if (!SERVER_URL) throw new Error("Server URL missing");

    const endPoint = `/auth/login`
    const url = `${SERVER_URL}${endPoint}`.trim();

    const payload = JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // Optional: but server-side does NOT need cookies
      withCredentials: true,
    }

    // Axios syntax:
    const res = await axios.post<AuthLoginResponse>(
      url,
      payload,
      config
    );

    // test
    // console.log(`server actions postSignin`, JSON.stringify(res, null, 2))

    // Check for your special status error codes
    if ([404, 503].includes(res.status)) {
      throw new Error(`${res.statusText} (${res.status}).`);
    }

    const accessTokenCookieKey = process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY || "access_token_users_auth_v1";
    const refreshTokenCookieKey = process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY || "refresh_token_users_auth_v1";

    if (!accessTokenCookieKey || !refreshTokenCookieKey) throw new Error("Missing cookie key");

    const { accessToken, refreshToken } = res.data;

    const cookies = await _cookies();

    // Access token cookie (HttpOnly recommended)
    cookies.set(accessTokenCookieKey, accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 30, // 30 minutes
    });

    // Optional: refresh token cookie
    cookies.set(refreshTokenCookieKey, refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return { success: true, error: null }; // success

  } catch (err: unknown) {
    // test
    // console.log(`server actions postSignin`, JSON.stringify(err, null, 2))

    if (axios.isAxiosError(err)) {
      // AxiosError
      const message =
        `${err.code},  ${err.message}, ${err.response?.data?.message}` || // If your API sends a message
        err.response?.data?.error ||   // Another common field
        `${err.code}, ${err.message}`; // fallback to Axios error message

      return { success: false, error: message };
    } else if (err instanceof Error) {
      // native JS error
      return { success: false, error: err.message };
    } else {
      return { success: false, error: "Unknown server error" };
    }
  }
};

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

const postRefreshAccessToken = async (): Promise<RefreshResponse | null> => {

  const accessTokenCookieKey = process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY || "access_token_users_auth_v1";
  const refreshTokenCookieKey = process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY || "refresh_token_users_auth_v1";

  const cookies = await _cookies();

  const accessToken = cookies.get(accessTokenCookieKey)?.value;
  const refreshToken = cookies.get(refreshTokenCookieKey)?.value;

  // Already logged in → redirect
  if (accessToken && refreshToken) redirect("/home");

  // No refresh token → cannot refresh → stay on login page
  if (!refreshToken) return null;

  // Attempt refresh

  try {
    const SERVER_URL = process.env.SERVER_URL;
    if (!SERVER_URL) throw new Error("Server URL missing");

    const endPoint = `/auth/refresh`
    const url = `${SERVER_URL}${endPoint}`.trim();

    const payload = {
      refreshToken,
      expiresInMins: 30
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // Optional: but server-side does NOT need cookies
      withCredentials: true,
    }

    const res = await axios.post<RefreshResponse>(
      url,
      payload,
      config
    );

    const { accessToken, refreshToken: newRefreshToken } = res.data;

    // Set updated cookies
    cookies.set(accessTokenCookieKey, accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 30, // 30 minutes
    });

    cookies.set(refreshTokenCookieKey, newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    
    // Successful refresh → redirect
    redirect("/home");

    // return res.data;
  } catch (err: unknown) {
    // console.log("Refresh token failed:", err);
    return null;
  }
}

export { postSignin, postRefreshAccessToken };
