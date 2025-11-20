// src\app\home\page.tsx

import { FC } from "react";
import { ClientInput } from "@/components/home/client-input ";

interface PageProp {}

const Page: FC<PageProp> = () => {
  //test
  // console.log(`Page home - server`);

  return (
    <>
      <ClientInput />
    </>
  );
};

export default Page;
