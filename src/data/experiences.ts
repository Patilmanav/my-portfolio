import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Android Developer",
    company: "Tech Vyassa Pvt Ltd",
    startDate: "SEPT 2024",
    isCurrentJob: true,
    location: "In Office",
    description: [
      "Revamped and enhanced 3+ mobile apps using Flutter.",
      "Deployed RESTful APIs for seamless app-server integration.",
      "Integrated Google AdMob to effectively monetize applications.",
      "Contributed to boosting app functionality and revenue generation.",
    ],
  },
  {
    designation: "Python Developer Intern",
    company: "Technical VPN Pvt Ltd",
    startDate: "June 2024",
    endDate: "OCT 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Spearheaded website development and enhancements for company portals.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Efficiently managed multiple tasks with minimal supervision.",
      "Collaborated with senior team members to meet and exceed project goals.",
    ],
  },
];

export default experiences;
