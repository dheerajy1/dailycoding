// src\components\home\dynamic-rendering.tsx

import { ApiData } from "@/lib/api/functions";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  url: string;
}

const DataRenderer: FC<Props> = async ({ url, className, ...props }) => {
  if (!url) return <div>No URL yet.</div>;

  const data = await ApiData({ url });

  return (
    <div
      className={cn(`overflow-clip rounded-lg border border-black`, className)}
      {...props}
    >
      <pre className="bg-green-100 p-4">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export { DataRenderer };
