import React from "react";
import AnimatedComponent from "@components/shared/AnimatedComponent";

export const ProjectsSection = () => {
  return (
    /** Projects Section */
    <AnimatedComponent>
      <section id="projects" className="w-full xl:px-20 mt-8 xl:mt-44">
        {/* Header */}
        <div className="flex flex-row gap-5 md:gap-10 items-center justify-center xl:justify-start">
          <div className="h-[1px] bg-slate max-w-[20%] flex-grow xl:hidden"></div>
          <h1 className="text-3xl xl:text-4xl font-bold text-slate-lightest">
            Projects
          </h1>
          <div className="h-[1px] bg-slate max-w-[20%] flex-grow"></div>
        </div>
        {/* Main Content */}
      </section>
    </AnimatedComponent>
  );
};
