// src\features\home\components\header\home-page-header.tsx

"use client";

import React, { FC } from "react";

interface HomePageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePageHeader: FC<HomePageHeaderProps> = ({}) => {
  // test
  // console.log(`HomePageHeader`, categoriesList, productTypesList, productTypes);

  return (
    <header className="sticky top-0 z-10 m-0 h-full w-full flex-col items-center justify-center bg-[#f9f6f3] p-0 font-sans">
      {/* top pink bar  */}
      <div className="w-full bg-pink-600 px-4 py-2 text-center font-sans text-sm text-white">
        <span>shared layout concept</span>
      </div>
    </header>
  );
};

export { HomePageHeader };
