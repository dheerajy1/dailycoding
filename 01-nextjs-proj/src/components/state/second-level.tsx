"use client";

import React, { FC } from "react";

interface PageProp {
  message: string;
  setMessage: (value: string) => void;
}

const SecondLevel: FC<PageProp> = ({ message, setMessage }) => {
  //test
  // console.log(`SecondLevel - client`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  return (
    <div className="flex flex-row gap-4 border border-black">
      <h3 className="text-center font-semibold text-red-600">Second Level</h3>
      <input
        value={message}
        onChange={handleInputChange}
        placeholder="Update Message"
        className="w-full rounded border px-2 py-1"
      />
    </div>
  );
};

export { SecondLevel };
