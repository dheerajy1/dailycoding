// src\app\home\page.tsx

import React, { FC, Suspense } from "react";
import { ClientInput } from "@/components/home/client-input ";
import { DataRenderer } from "@/components/home/dynamic-rendering";
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
      <ClientInput />
      
      {/* Parallel rendering zone */}
      <Suspense fallback={<div>Loading...</div>}>
        {url && <DataRenderer url={url} />}
      </Suspense>
    </div>
  );
};

export default Page;
