import React from "react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full xl:px-20 xl:mt-44">
      {/* Header */}
      <div className="flex flex-row gap-5 md:gap-10 items-center justify-center xl:justify-end">
        <div className="h-[1px] bg-zinc-700 max-w-[20%] flex-grow"></div>
        <h1 className="text-3xl xl:text-4xl font-bold text-slate-lightest">
          Work History
        </h1>
        <div className="h-[1px] bg-zinc-700 max-w-[20%] flex-grow xl:hidden"></div>
      </div>
      {/* Main Content */}
    </section>
  );
};
