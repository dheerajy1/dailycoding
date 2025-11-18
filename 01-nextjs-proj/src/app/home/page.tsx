"use server";

import { FC } from "react";
import { Box } from "@/components/home/box";
import { Facts } from "@/app/home/lib/functions";

interface PageProp {}

const Page: FC<PageProp> = async () => {
  const data = await Facts({
    url: `http://dog-api.kinduff.com/api/facts?number=5`,
  });
  //test
  // console.log(`Page home - server`);
  console.log("home Page:", data);
  return (
    <>
      <Box data={JSON.stringify(data)} />
    </>
  );
};

export default Page;
