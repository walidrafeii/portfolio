import React from "react";

interface ExperienceEntryProps {
  date: String;
  title: string;
  description: string;
}

export const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  title,
  description,
  date,
}) => {
  return (
    <div className="h-40 w-80 bg-amber-500">
      <p>{date}</p>
    </div>
  );
};
