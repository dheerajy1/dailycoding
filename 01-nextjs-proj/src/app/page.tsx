"use server";

import { FC } from "react";

import { GoHomeButton } from "@/components/home/go-home-button";

const Home: FC = () => {
  const redirect = "/home";
  //test
  // console.log(`Page root - server`);
  return (
    <div className="flex h-screen bg-zinc-50 p-2 font-sans dark:bg-black">
      <main className="flex h-fit w-full flex-col bg-white p-4 sm:items-start dark:bg-black">
        <GoHomeButton redirect={redirect} />
      </main>
    </div>
  );
};
export default Home;
