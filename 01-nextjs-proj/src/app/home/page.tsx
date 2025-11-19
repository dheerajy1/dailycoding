// src\app\home\page.tsx

"use server";

import { FC } from "react";
import { Box } from "@/components/home/box";

interface PageProp {}

const Page: FC<PageProp> = () => {
  //test
  // console.log(`Page home - server`);

  return (
    <>
      <Box />
    </>
  );
};

export default Page;
