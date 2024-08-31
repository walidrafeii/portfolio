"use client";
import React, { useState, useRef, useEffect } from "react";

export interface ExperienceEntry {
  id: number;
  position: string;
  title: string;
  startDate: string;
  endDate: string;
  companyLink: string;
  points: string[];
}

export const ExperienceTable: React.FC<{ experiences: ExperienceEntry[] }> = ({
  experiences,
}) => {
  // State Management
  const [isDetailsFadingOut, setIsDetailsFadingOut] = useState(false);
  const scrollBarHeight = useRef<HTMLDivElement>(null); // reference to scroll bar height
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
    number | null
  >(0);

  const handleExperienceClick = (index: number) => {
    setIsDetailsFadingOut(true); // Initiate fade-out before changing index
    setTimeout(() => {
      setSelectedExperienceIndex(index);
      setIsDetailsFadingOut(false); // Reset fade-out state after transition
    }, 200);
  };

  // Handle fade-in/out animation on state change
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDetailsFadingOut(false), 200);

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [selectedExperienceIndex, isDetailsFadingOut]);

  /**
   * Calculates the current top position of the scroll bar based on selected experience index.
   * @returns a tailwind class that will adjust the position of the scroll bar
   */
  const calculateScrollTopPosition = () => {
    if (selectedExperienceIndex === null || selectedExperienceIndex === 0) {
      return "top-0";
    }
    const fullHeight = scrollBarHeight.current?.clientHeight || 0;
    const scrollHeight = fullHeight / experiences.length;
    const topPosition = scrollHeight * selectedExperienceIndex;
    return `top-[${topPosition}px]`;
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center md:w-[80%] mx-auto w-full mt-10 gap-12">
      <div className="flex flex-row gap-2 w-fit h-fit">
        {/* Scroll Bar */}
        <div
          className="relative w-[2px] bg-navy-lightest rounded-full"
          ref={scrollBarHeight}
        >
          <div
            style={{ height: `calc(100% / ${experiences.length})` }}
            className={`absolute h-full w-[2px] bg-turquoise rounded-full transition-top duration-500 ease-in-out ${calculateScrollTopPosition()}`}
          ></div>
        </div>
        {/* Experiences Title / List */}
        <div>
          {experiences.map((experience, index) => (
            <ul
              key={index}
              className={`min-w-[180px] text-sm text-slate-light mt-1 py-2 px-4 
                hover:bg-navy-lightest hover:cursor-pointer rounded-md transition duration-300 ease-in-out ${
                  index === selectedExperienceIndex ? "bg-navy-lightest" : ""
                }`}
              onClick={() => handleExperienceClick(index)}
            >
              {experience.title}
            </ul>
          ))}
        </div>
      </div>
      {/* Selected experience details (conditional rendering) */}
      {selectedExperienceIndex !== null && (
        <div
          className={`flex flex-col text-slate flex-grow transition-opacity duration-500 ease-in-out ${
            isDetailsFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="font-semibold mb-2 text-slate-lightest text-lg">
            {experiences[selectedExperienceIndex].title} -{" "}
            {experiences[selectedExperienceIndex].position}
          </h3>
          <p className="text-sm text-slate-light">
            {" "}
            {experiences[selectedExperienceIndex].startDate} -{" "}
            {experiences[selectedExperienceIndex].endDate}
          </p>
          <ul className="list-disc space-y-3 mt-6 text-sm text-slate-light">
            {experiences[selectedExperienceIndex].points.map(
              (point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
