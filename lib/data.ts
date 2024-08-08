import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
import effortlessApiImg from "@/public/effortlessApi.png";
import teleMeetUpImg from "@/public/teleMeetUp.png";
import newtonNureseriesImg from "@/public/newtonNurseries.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.S. in Computer Science",
    location: "Istanbul Nişantaşı University, Istanbul, TR",
    description:
      "Graduated with a full tuition scholarship. Co-chaired the Software and Electronics Club, promoting collaboration and innovation.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "Software Developer Intern",
    location: "Çekmeköy, Istanbul",
    description:
      "Customized front-end designs for hosting packages, including CMS platforms like WordPress and Joomla. Optimized web hosting infrastructure for Linux and Windows servers.",
    icon: React.createElement(LuBriefcase),
    date: "June 2016 - September 2016",
  },
  {
    title: "Software Developer Intern",
    location: "Esenler, Istanbul",
    description:
      "Developed CevApp for collaborative exam preparation with real-time Q&A. Enhanced an e-learning platform using Python and Django, and configured Linux servers for performance optimization.",
    icon: React.createElement(LuBriefcase),
    date: "February 2017 - June 2017",
  },
  {
    title: "Full Stack Developer",
    location: "Madison, Wisconsin",
    description:
      "Built a low-code interface using Angular with RxJS and NgRx. Integrated RabbitMQ for asynchronous processing and connected Airtable, SQL databases, and spreadsheets. Created TeleMeetUp, a cross-platform teleconferencing app using Angular, Ionic, WebRTC, Go, AWS, and Google Cloud APIs.",
    icon: React.createElement(LuBriefcase),
    date: "February 2019 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "TeleMeetUp",
    description:
      "Developed TeleMeetUp, a versatile teleconferencing solution supporting video calls, screen sharing, messaging, user authentication, dynamic room creation, and cloud integration for scalable deployment and data management.",
    tags: [
      "Angular",
      "Ionic",
      "TypeScript",
      "WebRTC",
      "Go",
      "AWS",
      "GCP",
    ],
    imageUrl: teleMeetUpImg,
  },
  {
    title: "Effortless API",
    description:
      "Built a low-code interface using Angular. Integrated RabbitMQ for asynchronous processing and connected Airtable, SQL databases, and spreadsheets.",
    tags: ["Angular", "RxJs", "Bootstrap", "RabbitMQ"],
    imageUrl: effortlessApiImg,
  },
  {
    title: "Newton Nurseries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: newtonNureseriesImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Python",
  "Django",
  "GoLang",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Express",
  "TailwindCSS",
  "Bootstrap",
  "Angular Material",
  "Framer.js",
  "Figma",
  "Sketch",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Rest APIs",
  "GraphQL",
  "AWS",
  "Google Cloud Platform",
  "Git",
  "GitLab CI/CD",
  "GitHub Actions",
  "Docker",
  "Postman",
  "Jira",
  "VSCode",
  "JWT",
  "OAuth",
  "RabbitMQ"
] as const;
