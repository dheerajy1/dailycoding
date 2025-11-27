// src\app\home-v4\page.tsx

import { ProductsGrid } from "@/components/home-v4";
import React from "react";

interface PageProp {}

const Page: React.FC<PageProp> = async ({}) => {
  
  //test
  // console.log(`Page home v4 - server`);

  return (
    <div className="flex flex-col gap-4">
      <ProductsGrid />
    </div>
  );
};

export default Page;
