// src\components\home\box.tsx

"use client";

import React, { FC, useEffect, useState } from "react";

import { ApiData } from "@/lib/api/functions";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {}

const sampleApiUrl: {
  value: string;
  url: string;
}[] = [
  {
    value: "dog breeds",
    url: "https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=2",
  },
  {
    value: "vercel blog",
    url: "https://api.vercel.app/blog",
  },
];

const ClientInput : FC<Props> = ({}) => {
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

        // immutattion update
        setApiData((prev) => ({ ...data }));
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

  const handleSelectChange = (value: string) => {
    // string is a primitive data type - immutation - safe to directly perform update
    setText(value);
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

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="max-w-[380px]">
          <SelectValue placeholder="Select a sample api url" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Api url</SelectLabel>
            {sampleApiUrl.map((api, idx) => {
              return (
                <SelectItem key={idx} value={api.url}>
                  {api.value}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="w-fit">
        <pre className="w-full rounded-md bg-[#CAE8BD] p-4 text-sm wrap-break-word whitespace-pre-wrap text-black">
          {JSON.stringify(apiData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export { ClientInput  };
