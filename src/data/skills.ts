import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Intermediate,
        icon: "/skills/python.svg",
      },
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "Dart",
        level: SkillLevel.Expert,
        icon: "/skills/dart.svg",
      },
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.svg",
      },
      {
        title: "Kotlin",
        level: SkillLevel.Expert,
        icon: "/skills/kotlin.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      // {
      //   title: "SASS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/sass.svg",
      // },
      // {
      //   title: "Redux Toolkit",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/redux.svg",
      // },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Flask",
        level: SkillLevel.Expert,
        icon: "/skills/flask.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "FastAPI",
        level: SkillLevel.Expert,
        icon: "/skills/fastapi.svg",
      },
  
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "Android Studio",
        level: SkillLevel.Expert,
        icon: "/skills/android_studio.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "SQLite",
        level: SkillLevel.Intermediate,
        icon: "/skills/sqlite.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
      {
        title: "Firebase",
        level: SkillLevel.Beginner,
        icon: "/skills/firebase.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
