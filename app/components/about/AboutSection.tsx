import React from "react";
import { AboutContent } from "./AboutContent";

export const AboutSection = () => {
  return (
    /** About Section */
    <section id="about" className="w-full xl:px-20">
      {/* Header */}
      <div className="flex flex-row gap-5 md:gap-10 items-center justify-start">
        <h1 className="text-3xl xl:text-4xl font-bold text-slate-lightest">
          My Story
        </h1>
        <div className="h-[1px] bg-slate max-w-[20%] flex-grow"></div>
      </div>
      {/* Main Content */}
      <AboutContent />
    </section>
  );
};
