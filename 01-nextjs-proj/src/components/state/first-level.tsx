"use client";

import React, { FC, useState } from "react";
import { SecondLevel } from "@/components/state/second-level";

interface PageProp extends React.HTMLAttributes<HTMLDivElement> {}

const FirstLevel: FC<PageProp> = ({}) => {
  const [message, setMessage] = useState<string>("initial");

  // test
  // console.log(`FirstLevel - client`);

  return (
    <div className="flex flex-col gap-4 border border-black p-4">
      <h3 className="text-center font-semibold text-red-600">First Level</h3>
      <h3 className="text-center font-semibold text-red-600">{message}</h3>

      <SecondLevel message={message} setMessage={setMessage} />
    </div>
  );
};

export { FirstLevel };
