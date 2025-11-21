// src\app\home\state\page.tsx

import React, { FC } from "react";

import {FirstLevel} from "@/components/state/first-level"

interface PageProp extends React.HTMLAttributes<HTMLDivElement> {}

const Page: FC<PageProp> = async ({}) => {

  //test
  // console.log(`Page home - server`);

  return (
    <div className="flex flex-row gap-4">
      <FirstLevel />
    </div>
  );
};

export default Page;
