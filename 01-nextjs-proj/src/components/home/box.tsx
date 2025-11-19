"use client";

import React, { FC, useEffect, useState } from "react";

import { ApiData } from "@/lib/api/functions";

interface Props {}

const Box: FC<Props> = ({}) => {
  const [text, setText] = useState<string>("");
  const [apiData, setApiData] = useState<Object | null>(null);

  useEffect(() => {
    // validation
    if (!text.includes("https://")) return;

    const fetchData = async () => {
      try {
        const data = await ApiData({ url: encodeURI(text) });

        // test
        // console.log("Box", data);

        setApiData((prev) => ({ ...prev, ...data }));
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error";

        // test
        // console.log("API error:", message);
      }
    };

    fetchData();
  }, [text]);

  //test
  //   console.log(`Page - client`);
  //   console.log(`Box`, dataRef.current); ;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataText = e.target.value.trim();

    // string is a primitive data type - immutation - safe to directly perform update
    setText(dataText);
    return;
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-clip p-4">
      <div className="w-fit">level 1 component</div>
      <div className="w-fit">
        {" "}
        <input
          value={text}
          size={Math.max("Enter api url".length, text.length)}
          type="text"
          onChange={handleInputChange}
          placeholder="Enter api url"
          className="w-fit max-w-[600px] rounded border border-black p-1"
        />
      </div>

      <div className="w-fit">
        <pre className="rounded-md bg-[#CAE8BD] p-4 text-sm wrap-break-word whitespace-pre-wrap text-black">
          {JSON.stringify(apiData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export { Box };
