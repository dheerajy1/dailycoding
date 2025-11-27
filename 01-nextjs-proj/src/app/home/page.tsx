// src\app\home\page.tsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProp {}

const Page: React.FC<PageProp> = async ({}) => {
  //test
  // console.log(`Page home - server`);

  return (
    <div className="flex flex-row gap-4">
      <Button variant={"link"}>
        <Link href="/home-v2">
          <p className="border border-black p-2">home-v2</p>
        </Link>
      </Button>
      <Button variant={"link"}>
        <Link href="/home-v3">
          <p className="border border-black p-2">home-v3</p>
        </Link>
      </Button>
      <Button variant={"link"}>
        <Link href="/home-v4">
          <p className="border border-black p-2">home-v4</p>
        </Link>
      </Button>
    </div>
  );
};

export default Page;
