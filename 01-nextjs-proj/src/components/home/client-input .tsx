// src\components\home\box.tsx

"use client";

import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataClientComp } from "@/components/home/data-client-component";

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

const ClientInput: FC<Props> = ({}) => {
  const router = useRouter();

  const [url, setUrl] = useState<string | null>(null);
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(`hsl(${Math.random() * 360},80%,75%)`);
  }, []);

  // test
  // console.log(`ClientInput - client`);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value.trim();
    if (!url.startsWith("https://")) return;
    router.replace(`/home?url=${encodeURIComponent(url)}`);
    setUrl(url);
    return;
  };

  const handleSelectChange = (value: string) => {
    router.replace(`/home?url=${encodeURIComponent(value)}`);
    setUrl(value);
    return;
  };

  return (
    <div className="flex w-full flex-col gap-4 overflow-clip rounded-lg border border-black p-4 shadow-lg">
      <div className="flex min-h-4 w-fit min-w-4 flex-row items-center gap-4">
        <div className="w-fit p-2">
          <p>client component</p>
        </div>
        <div
          className={`h-full w-fit rounded p-2`}
          style={{ background: color }}
        ></div>
      </div>

      <div className="w-fit">
        {" "}
        <input
          // value={text}
          // size={Math.max("Enter api url".length, text.length)}
          type="text"
          onChange={handleInputChange}
          placeholder="Enter api url"
          className="w-fit max-w-[600px] min-w-[180px] rounded border border-black p-1"
        />
      </div>

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="max-w-[380px] min-w-[180px]">
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

      {url && <DataClientComp url={url} />}
    </div>
  );
};

export { ClientInput };
