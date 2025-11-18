// src\app\home\layout.tsx

import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="w-full h-screen p-2 bg-amber-200">{children}</div>;
};

export default Layout;
