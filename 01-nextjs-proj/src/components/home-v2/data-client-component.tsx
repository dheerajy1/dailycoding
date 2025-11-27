// src\components\home\data-client-component.tsx

import useSWR from "swr";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { getRandomApiUrl } from "@/data-access/random-api-url";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
}

const DataClientComp: FC<Props> = ({ url, className, ...props }) => {
  if (!url) return <div>No URL yet.</div>;

  // ---------------------------
  // SWR Data fetch
  // ---------------------------

  // data
  const { data, error, isLoading } = useSWR(["/api/url", url], () =>
    getRandomApiUrl({ query: encodeURIComponent(url) }),
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div
      className={cn(`overflow-clip rounded-lg border border-black`, className)}
      {...props}
    >
      <div className="w-fit p-2">
        <p>data client component using swr inside client boundary</p>
      </div>
      <pre className="bg-green-100 p-4">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export { DataClientComp };
