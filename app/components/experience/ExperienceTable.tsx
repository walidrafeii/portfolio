"use client";
import React, { useState, useRef } from "react";

export interface ExperienceEntry {
  id: number;
  position: string;
  title: string;
  points: string[];
}

export const ExperienceTable: React.FC<{ experiences: ExperienceEntry[] }> = ({
  experiences,
}) => {
  // State Management
  const scrollBarHeight = useRef<HTMLDivElement>(null); // reference to scroll bar height
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<
    number | null
  >(0);

  const handleExperienceClick = (index: number) => {
    setSelectedExperienceIndex(index);
  };

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
    console.log(`top-[${topPosition}px]`);
    return `top-[${topPosition}px]`;
  };

  return (
    <div className="relative mx-auto w-fit mt-10">
      <div className="flex flex-row gap-2">
        {/* Scroll Bar */}
        <div
          className="relative flex-grow w-[2px] bg-navy-lightest rounded-full"
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
              className="min-w-[180px] text-md text-slate-light py-2 px-4 hover:bg-navy-lightest hover:cursor-pointer rounded-md transition duration-300 ease-in-out"
              onClick={() => handleExperienceClick(index)}
            >
              {experience.title}
            </ul>
          ))}
        </div>
        {/* Selected experience details (conditional rendering) */}
        {selectedExperienceIndex !== null && (
          <div className="flex flex-col ml-auto bg-gray-100 rounded-md shadow-md px-4 py-2 transition-opacity duration-500 ease-in-out">
            <h3 className="text-lg font-medium mb-2">
              {experiences[selectedExperienceIndex].title}
            </h3>
            <ul className="list-disc space-y-1">
              {experiences[selectedExperienceIndex].points.map(
                (point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
