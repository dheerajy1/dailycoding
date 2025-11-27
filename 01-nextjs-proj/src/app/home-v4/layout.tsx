// src/app/home-v4/layout.tsx

"use cache";

import React, { FC } from "react";
import { Navbar } from "@/components/layout";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cart: React.ReactNode;
}

const Layout: FC<Props> = async ({ children, cart }) => {
  // test
  console.log(`home-v4/layout.tsx`);
  return (
    <div className="h-fit min-h-screen w-full bg-amber-50 p-4">
      {/* Header row: Static Navbar + isolated Cart */}
      <div className="mb-2 flex items-center justify-between rounded-md">
        {/* Pure static—no props! */}
        <Navbar cart={cart} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
