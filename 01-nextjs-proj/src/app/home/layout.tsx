// src\app\home\layout.tsx

import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="w-full min-h-screen h-fit p-2 bg-amber-50">{children}</div>;
};

export default Layout;
