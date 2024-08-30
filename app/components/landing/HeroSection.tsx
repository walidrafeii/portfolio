import React from "react";

import { HeroText } from "./HeroText";
import { HeroBlob } from "./HeroBlob";

export const HeroSection = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 items-center justify-center min-h-screen w-full mt-24 xl:mt-0">
      <HeroText />
      <HeroBlob />
    </div>
  );
};
