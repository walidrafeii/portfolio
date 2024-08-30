import React from "react";

export const AboutTimeline = () => {
  const timelineData = [
    { date: "Aug 2013", title: "Immigrated to the U.S." },
    { date: "May 2018", title: "Associates Degree C.S." },
    { date: "Jun 2018", title: "Dell EMC Internship" },
    { date: "Dec 2020", title: "Bachelors Degree C.S." },
    { date: "Jun 2021", title: "VMware Full Time" },
  ];

  return (
    <div className="flex justify-center w-full py-10">
      <div className="relative hidden sm:block">
        {/* Timeline Line */}
        <div className="absolute h-[2px] bg-slate w-full top-1/2 rounded-full"></div>
        {/* Timeline Items */}
        <div className="flex justify-between">
          {timelineData.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Circle */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-navy rounded-full mx-auto relative z-10 border-2 border-turquoise"></div>
              {/* Date */}
              <div className="text-sm text-slate whitespace-nowrap mb-10">
                {item.date}
              </div>
              {/* Title */}
              <div className="text-sm font-medium text-slate ml-10">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Vertical TimeLine */}
      <div className="relative w-1/2 sm:w-1/3 block sm:hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate rounded-full"></div>
        <div className="flex flex-col items-center">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 flex items-center w-full"
            >
              <div className="w-1/2 text-right pr-4">
                <div className="text-sm text-slate">{item.date}</div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-navy rounded-full z-10 border-2 border-turquoise"></div>
              </div>
              <div className="w-1/2 text-left pl-4">
                <div className="text-sm font-medium text-slate">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
