import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "RPA Development",
    icons: [
      "/skills/python.svg",
      "/skills/selenium.svg",
      "/skills/playwright.svg",
      "/skills/automation.svg",
    ],
    shortDescription:
      "I create intelligent robotic process automation solutions to streamline your business operations.",
    description:
      "I develop comprehensive RPA solutions using Python, Selenium, and Playwright to automate repetitive tasks, data entry, form filling, and complex workflows. My automation solutions reduce manual errors, increase efficiency, and free up valuable human resources for more strategic tasks.",
  },
  {
    id: 2,
    title: "Web Automation & Scraping",
    icons: [
      "/skills/python.svg",
      "/skills/bs4.png",
      "/skills/lxml.png",
      "/skills/selenium.svg",
    ],
    shortDescription: "I build powerful web scraping and automation tools for data extraction.",
    description:
      "I create sophisticated web scraping solutions using BeautifulSoup, lxml, and Selenium to extract, process, and analyze data from websites. From e-commerce price monitoring to lead generation, my automation tools provide accurate, reliable data collection with anti-detection mechanisms.",
  },
  {
    id: 3,
    title: "API Development & Integration",
    icons: [
      "/skills/python.svg",
      "/skills/fastapi.svg",
      "/skills/django.svg",
      "/skills/flask.svg",
    ],
    shortDescription: "I build robust APIs and integrate automation workflows seamlessly.",
    description:
      "I develop high-performance REST APIs using FastAPI, Django, and Flask to power automation workflows and data processing pipelines. My APIs handle authentication, rate limiting, and provide comprehensive documentation for seamless integration with existing systems.",
  },
  {
    id: 4,
    title: "Test Automation",
    icons: [
      "/skills/python.svg",
      "/skills/pytest.svg",
      "/skills/selenium.svg",
      "/skills/appium.png",
    ],
    shortDescription: "I create comprehensive test automation frameworks for quality assurance.",
    description:
      "I build end-to-end test automation frameworks using PyTest, Selenium, and Appium for web and mobile applications. My testing solutions include CI/CD integration, parallel execution, detailed reporting, and maintainable test suites that ensure software quality and reliability.",
  },
];

export default services;
