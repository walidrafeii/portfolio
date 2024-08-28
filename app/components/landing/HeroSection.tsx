import React from "react";

import { HeroText } from "./HeroText";
import { HeroBlob } from "./HeroBlob";

export const HeroSection = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col xl:flex-row gap-10 items-center justify-around mt-36">
        <HeroText />
        <HeroBlob />
      </div>
    </div>
  );
};
