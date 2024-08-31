import { ExperienceEntry } from "./ExperienceTable";

export const workHistory: ExperienceEntry[] = [
  {
    id: 0,
    title: "VMware by Broadcom",
    position: "Member of Technical Staff",
    points: [
      "Directed scale testing for Aria Automation, significantly boosting product scalability and performance.",
      "Triaged and resolved scale issues for major clients like Comcast, ensuring effective resolution.",
      "Developed a Python wrapper to enhance scalability testing and automation, reducing Jenkins code by 50%.",
      "Built a full-stack web application using Flask, Angular, PostgreSQL, and Docker to centralize test reports.",
    ],
    startDate: "Sept. 2021",
    endDate: "Aug. 2024",
    companyLink: "https://www.vmware.com",
  },
  {
    id: 2,
    title: "Hi Dev Mobile",
    position: "Software Engineer (Mobile)",
    points: [
      "Played a pivotal role in the initial conceptualization and planning of a new UI/UX project.",
      "Actively participated in brainstorming sessions to generate innovative ideas and design concepts.",
      "Developed essential UI components in UIKit (Swift), utilizing best practices for efficient and maintainable code.",
    ],
    startDate: "Jan. 2021",
    endDate: "July 2021",
    companyLink: "https://www.hidevmobile.com",
  },
  {
    id: 1,
    title: "Dell EMC",
    position: "Software Engineer Intern",
    points: [
      "Automated networking switch diagnostic tests using Python, reducing testing time by 40%.",
      "Modified the existing robot framework to cater to specific test conditions dictated by the hardware team.",
      "Worked cross-functionally with the test team to determine the most useful parameters for diagnostics.",
    ],
    startDate: "May 2018",
    endDate: "Sept. 2018",
    companyLink: "https://www.dell.com",
  },
  {
    id: 3,
    title: "Cañada College",
    position: "Computer Science Tutor",
    points: [
      "Guided students in data structures and OOP, significantly improving their understanding and skills.",
      "Assisted students in debugging code by providing targeted hints and guidance on resolving issues.",
    ],
    startDate: "Dec. 2017",
    endDate: "May 2018",
    companyLink: "https://canadacollege.edu",
  },
];
