// src\app\page.tsx

import { FC } from "react";
import { SigninForm } from "@/components/auth/signin-form";
import Link from "next/link";

const Home: FC = () => {
  const redirect = "/home";
  //test
  // console.log(`Page root - server`);
  return (
    <div className="flex h-screen flex-col gap-2 items-center justify-center bg-zinc-50 p-2 font-sans dark:bg-black">
      <SigninForm redirect={redirect} />
      <Link href="/home/state">
        <p className="border border-black p-2">state</p>
      </Link>
    </div>
  );
};
export default Home;
