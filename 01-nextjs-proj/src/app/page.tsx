// src\app\page.tsx

import { FC } from "react";
import { SigninForm } from "@/components/auth/signin-form";
import { cookies as _cookies } from "next/headers";

const Home: FC = async () => {
  const redirectTo = "/home";

  //test
  // console.log(`Page root - server`);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-zinc-50 p-2 font-sans dark:bg-black">
      <SigninForm redirect={redirectTo} />
    </div>
  );
};
export default Home;
