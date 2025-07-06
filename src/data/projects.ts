import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "face-vault",
    title: "FaceVault",
    description:
      "A secure web application for managing and searching images using face recognition. Built with Next.js, MongoDB, and Cloudinary for image storage.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/face-vault",
    url: "https://face-vault.onrender.com/dashboard",
    tags: ["Next.js", "React", "MongoDB", "Cloudinary", "Face Recognition"],
  },
  {
    id: "rpa-workflow-automation",
    title: "RPA Workflow Automation Suite",
    description:
      "A comprehensive RPA solution that automates complex business workflows including data entry, form processing, and report generation. Built with Python, Selenium, and custom automation frameworks.",
    icon: "/skills/python.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/rpa-workflow-automation",
    url: "https://rpa-automation-demo.vercel.app",
    tags: ["Python", "Selenium", "RPA", "Automation", "Workflow"],
  },
  {
    id: "web-scraping-platform",
    title: "Intelligent Web Scraping Platform",
    description:
      "A sophisticated web scraping platform with anti-detection mechanisms, proxy rotation, and data processing capabilities. Handles large-scale data extraction from e-commerce sites and news sources.",
    icon: "/skills/bs4.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/web-scraping-platform",
    url: "https://scraping-platform-demo.vercel.app",
    tags: ["Python", "BeautifulSoup", "Selenium", "Data Extraction", "Anti-Detection"],
  },
  {
    id: "test-automation-framework",
    title: "End-to-End Test Automation Framework",
    description:
      "A comprehensive test automation framework supporting web, mobile, and API testing with parallel execution, detailed reporting, and CI/CD integration. Built with PyTest and Selenium.",
    icon: "/skills/pytest.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/test-automation-framework",
    url: "https://test-automation-demo.vercel.app",
    tags: ["Python", "PyTest", "Selenium", "Test Automation", "CI/CD"],
  },
  {
    id: "api-automation-toolkit",
    title: "API Automation & Integration Toolkit",
    description:
      "A toolkit for automating API testing, data processing, and workflow integration. Features rate limiting, authentication handling, and comprehensive error management.",
    icon: "/skills/fastapi.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/api-automation-toolkit",
    url: "https://api-automation-demo.vercel.app",
    tags: ["Python", "FastAPI", "API Testing", "Automation", "Integration"],
  },
  {
    id: "data-processing-pipeline",
    title: "Automated Data Processing Pipeline",
    description:
      "An automated data processing pipeline that handles ETL operations, data validation, and transformation. Integrates with multiple data sources and provides real-time monitoring.",
    icon: "/skills/python.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/data-processing-pipeline",
    url: "https://data-pipeline-demo.vercel.app",
    tags: ["Python", "ETL", "Data Processing", "Automation", "Monitoring"],
  },
  {
    id: "ocr-automation-system",
    title: "OCR Automation System",
    description:
      "An intelligent OCR system that automates document processing, text extraction, and data entry from images and PDFs. Uses Tesseract and custom image preprocessing.",
    icon: "/skills/tesseract.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/your-username/ocr-automation-system",
    url: "https://ocr-automation-demo.vercel.app",
    tags: ["Python", "Tesseract", "OCR", "Document Processing", "Automation"],
  },
];

export default projects;
