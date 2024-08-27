import React from 'react';

import { HeroText } from './HeroText';
import { HeroBlob } from './HeroBlob';

export const HeroSection = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col xl:flex-row gap-10 items-center justify-around mt-36 mb- mx-10 sm:mx-24 lg:mx-32 2xl:mx-64">
        <HeroText />
        <HeroBlob />
      </div>
    </div>
  );
};
