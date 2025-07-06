import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "RPA Developer & Automation Engineer",
    company: "Tech Vyassa Pvt Ltd",
    startDate: "SEPT 2024",
    isCurrentJob: true,
    location: "In Office",
    description: [
      "Developed and deployed 10+ RPA solutions using Python, Selenium, and Playwright for business process automation.",
      "Created intelligent web scraping systems with anti-detection mechanisms and proxy rotation capabilities.",
      "Built comprehensive test automation frameworks reducing manual testing time by 80%.",
      "Implemented automated data processing pipelines handling 100K+ records daily with 99.9% accuracy.",
    ],
  },
  {
    designation: "Python Developer & Automation Specialist",
    company: "Technical VPN Pvt Ltd",
    startDate: "June 2024",
    endDate: "OCT 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Developed automated web scraping solutions for data extraction and market research.",
      "Built REST APIs using FastAPI and Django for automation workflow integration.",
      "Created OCR automation systems for document processing and data entry.",
      "Implemented CI/CD pipelines for automated testing and deployment processes.",
    ],
  },
];

export default experiences;
