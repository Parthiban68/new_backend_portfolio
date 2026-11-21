import tbs from "../assets/tbs_1.png";
import cfo from "../assets/cfo.png";
import crm from "../assets/crm-tbs.png";
import aiTextAnalyzer from "../assets/AI.png";
import cineStreams from "../assets/cine.png";
import salaryHive from "../assets/salary_1.png";
import weatherApp from "../assets/weather.png";

export interface ProjectData {
  id: number;
  featured: boolean;
  year: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  demoLink: string | null;
  codeLink: string | null;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    featured: true,
    year: "2026",
    title: "CFO360.ai - Multi-Tenant Finance Platform",
    category: "Professional",
    description:
      "A multi-tenant accounting and finance platform built for scalable business operations and complex accounting workflows. Engineered to handle high-volume financial data with robust reporting and seamless integration capabilities.",
    stack: ["NestJS", "PostgreSQL", "Sequelize", "React", "TypeScript", "AWS"],
    image: cfo,
    demoLink: null,
    codeLink: null,
  },
  {
    id: 2,
    featured: true,
    year: "2025",
    title: "TheBusStand.com - Real-Time Booking System",
    category: "Professional",
    description:
      "A comprehensive bus booking platform connecting users with real-time inventory and seamless booking workflows. Built with a highly concurrent architecture to handle flash traffic during peak holiday seasons with zero double-booking.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "Tailwind CSS",
      "MongoDB",
    ],
    image: tbs,
    demoLink: "https://thebusstand.com/",
    codeLink: null,
  },
  {
    id: 3,
    featured: false,
    year: "2025",
    title: "TheBusStand CRM — Operations Workspace",
    category: "Professional",
    description:
      "An internal CRM and operations platform built to manage customer workflows, operational data, and business processes around a large-scale bus booking ecosystem. Designed with reusable frontend patterns, API-driven workflows, role-based access, and maintainable business modules.",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
    ],
    image: crm,
    demoLink: "https://crm.thebusstand.com/",
    codeLink: null,
  },
  {
    id: 4,
    featured: false,
    year: "2025",
    title: "AI Text Analyzer - AI-Powered Text Intelligence",
    category: "Personal",
    description:
      "A full-stack AI text analysis platform that turns raw text into useful insights through summarization, explanation, analysis, rewriting, extraction, and translation. Built with a React frontend, NestJS API, and OpenRouter-powered Gemma model.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "NestJS",
      "OpenRouter",
      "Gemma 4 32B",
    ],
    image: aiTextAnalyzer,
    demoLink: "https://arivx.vercel.app/",
    codeLink: "https://github.com/Parthiban68/Ai_text_analyzer",
  },
  {
    id: 5,
    featured: false,
    year: "2025",
    title: "CineStreams - Movie Streaming Discovery Platform",
    category: "Personal",
    description:
      "A dark-themed movie streaming discovery platform built around popular and genre-based content, with reusable React components, API-driven movie feeds, and Redux-managed application state.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
    ],
    image: cineStreams,
    demoLink: "https://cinestreamsapp.netlify.app/",
    codeLink: "https://github.com/Parthiban68/CineStreams",
  },
  {
    id: 6,
    featured: false,
    year: "2025",
    title: "SalaryHive - Salary & Payroll Management Platform",
    category: "Personal",
    description:
      "A modern salary and payroll management interface designed to simplify compensation insights, employee operations, attendance, leave, and payslip workflows through a responsive, component-driven experience.",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Recharts",
      "React PDF",
    ],
    image: salaryHive,
    demoLink: "https://salaryhive.netlify.app/",
    codeLink: "https://github.com/Parthiban68/payroll-saas",
  },
  {
    id: 7,
    featured: false,
    year: "2024",
    title: "Weather App - Location-Aware Weather Experience",
    category: "Personal",
    description:
      "A Flutter weather application that combines device location with live weather data to provide a focused, responsive view of current conditions.",
    stack: [
      "Flutter",
      "Dart",
      "BLoC",
      "Geolocator",
      "Weather API",
      "Equatable",
    ],
    image: weatherApp,
    demoLink: null,
    codeLink: "https://github.com/Parthiban68/Weather_App",
  },
];
