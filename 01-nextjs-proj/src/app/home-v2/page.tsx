// src\app\home\page.tsx

import React, { FC } from "react";
import { Products } from "@/components/home-v2/products";

interface PageProp extends React.HTMLAttributes<HTMLDivElement> {}

const Page: FC<PageProp> = async ({}) => {
  //test
  // console.log(`Page home v2 - server`);

  return (
    <div className="flex flex-row gap-4">
      <Products />
    </div>
  );
};

export default Page;
