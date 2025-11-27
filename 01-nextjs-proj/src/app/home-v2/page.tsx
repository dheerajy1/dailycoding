// src\app\home-v2\page.tsx

import React, { FC, Suspense } from "react";
import { ClientInput } from "@/components/home-v2/client-input ";
import { DataRenderer } from "@/components/home-v2/dynamic-rendering";
import Link from "next/link";

interface PageProp extends React.HTMLAttributes<HTMLDivElement> {
  searchParams: Promise<{ url?: string }>;
}

const Page: FC<PageProp> = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const url = decodeURIComponent(resolvedParams.url || "");

  //test
  // console.log(`Page home - server`);

  return (
    <div className="flex flex-row gap-4">
      <Link href="/home/state">
        <p className="border border-black p-2">state</p>
      </Link>

      <ClientInput />

      {/* Parallel rendering zone */}
      <Suspense fallback={<div>Loading...</div>}>
        {url && <DataRenderer url={url} />}
      </Suspense>
    </div>
  );
};

export default Page;
