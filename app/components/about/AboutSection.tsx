import React from "react";
import { AboutContent } from "./AboutContent";
import AnimatedComponent from "@components/shared/AnimatedComponent";

export const AboutSection = () => {
  return (
    /** About Section */
    <AnimatedComponent>
      <section id="about" className="w-full xl:px-20">
        {/* Header */}
        <div className="flex flex-row gap-5 md:gap-10 items-center justify-center xl:justify-start">
          <div className="h-[1px] bg-slate max-w-[20%] flex-grow xl:hidden"></div>
          <h1 className="text-3xl xl:text-4xl font-bold text-slate-lightest">
            My Story
          </h1>
          <div className="h-[1px] bg-slate max-w-[20%] flex-grow"></div>
        </div>
        {/* Main Content */}
        <AboutContent />
      </section>
    </AnimatedComponent>
  );
};
