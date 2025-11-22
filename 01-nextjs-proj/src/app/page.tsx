// src\app\page.tsx

import { FC } from "react";
import { SigninForm } from "@/components/auth/signin-form";
import { postRefreshAccessToken } from "@/app/actions/auth";
import { cookies as _cookies } from "next/headers";

import { redirect } from "next/navigation";

const Home: FC = async () => {
  const redirectTo = "/home";

  const accessTokenCookieKey =
    process.env.ACCESS_TOKEN_USERS_AUTH_COOKIE_KEY ||
    "access_token_users_auth_v1";

  const refreshTokenCookieKey =
    process.env.REFRESH_TOKEN_USERS_AUTH_COOKIE_KEY ||
    "refresh_token_users_auth_v1";

  // If cookie keys are missing → redirect to an error screen
  if (!accessTokenCookieKey || !refreshTokenCookieKey) {
    return redirect("/error/misconfigured-auth?msg=missing-keys");
  }

  const cookies = await _cookies();

  const accessToken = cookies.get(accessTokenCookieKey)?.value;
  const refreshToken = cookies.get(refreshTokenCookieKey)?.value;

  // If both tokens exist → already logged in → redirect
  if (refreshToken && accessToken) {
    redirect("/home");
  }

  // Access missing but refresh token exists => try refresh
  if (!accessToken && refreshToken) {
    const refreshed = await postRefreshAccessToken();
    if (refreshed) redirect("/home");
  }

  //test
  // console.log(`Page root - server`);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-zinc-50 p-2 font-sans dark:bg-black">
      <SigninForm redirect={redirectTo} />
    </div>
  );
};
export default Home;
