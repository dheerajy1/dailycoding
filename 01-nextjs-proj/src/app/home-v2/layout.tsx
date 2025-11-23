// src\app\home\layout.tsx

import { HomePageHeader } from "@/components/home/home-page-header";
import React, { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="h-fit min-h-screen w-full bg-amber-50 p-5">
      <HomePageHeader />
      {children}
    </div>
  );
};

export default Layout;
