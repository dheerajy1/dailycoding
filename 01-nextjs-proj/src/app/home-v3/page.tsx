// src\app\home-v3\page.tsx

import React, { FC, Suspense } from "react";
import { Products } from "@/components/home-v3/products";
import StaticBlock from "@/components/home-v3/static-block";
import DynamicServerProductsStats from "@/components/home-v3/dynamic-server-products-stats";

interface PageProp extends React.HTMLAttributes<HTMLDivElement> {}

const Page: FC<PageProp> = async ({}) => {
  //test
  // console.log(`Page home v2 - server`);

  return (
    <div className="flex flex-col gap-4">
      {/* STATIC */}
      <StaticBlock />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicServerProductsStats />
      </Suspense>
      <Products />
    </div>
  );
};

export default Page;
