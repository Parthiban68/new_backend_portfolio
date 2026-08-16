// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight } from 'lucide-react';

// export default function ProjectsHeroPage() {
//   return (
//     <div className="min-h-screen bg-white text-[#111111] overflow-hidden mt-20">

//       {/* 2. HERO SECTION */}
//       <main className="max-w-[1440px] mx-auto pt-16 pb-24 flex flex-col items-center text-center relative px-4">

//         {/* Top Pill Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
//           className="bg-[#F8D59F] text-[#111] px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-8"
//         >
//           Works from 2022 – Present
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-6xl md:text-[80px] font-[400] leading-[1.05] tracking-tight max-w-6xl mb-6 relative z-10"
//         >
//           Building digital products
//           <br className="hidden md:block" /> that scale.
//         </motion.h1>

//         {/* Hand-drawn Annotation (Top Right) */}
//         <motion.div
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
//           className="absolute right-[10%] md:right-[15%] top-[50%] hidden lg:flex flex-col items-center transform rotate-6"
//         >
//           <span className="font-['Caveat',_cursive] text-2xl text-[#333] mb-2 transform -rotate-12">
//             Explore the archive
//           </span>
//           <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-80">
//             <path d="M20,20 Q80,20 80,80" fill="none" stroke="#333" strokeWidth="2" />
//             <path d="M70,80 L80,80 L80,70" fill="none" stroke="#333" strokeWidth="2" />
//           </svg>
//         </motion.div>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-[17px] md:text-[19px] text-[#6B6B6B] font-ligth leading-relaxed max-w-2xl mb-16 relative z-10"
//         >
//           An archive of my professional software engineering engagements,
//           open-source contributions, and experimental side projects.
//         </motion.p>
//       </main>

//     </div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Grid,
  List,
  ChevronDown,
  Github,
  ExternalLink,
  Star,
} from "lucide-react";
import tbs from "../assets/tbs-1.png";
import cfo from "../assets/cfo.png";
import crm from "../assets/crm.png";

// --- YOUR ORIGINAL MOCK DATA, FORMATTED FOR THE NEW DESIGN ---
const projectsData = [
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
    demoLink: "#",
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
    demoLink: "#",
    codeLink: "#",
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
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    featured: false,
    year: "2023",
    title: "DevNotes - Developer Markdown Manager",
    category: "Personal",
    description:
      "A minimal, lightning-fast notes app for developers to write, organize, and search markdown notes with ease. Uses local-first architecture with instant full-text search and offline capabilities.",
    stack: ["React", "Vite", "LocalStorage", "Framer Motion"],
    image: "image_a17d71.jpg",
    demoLink: null,
    codeLink: "#",
  },
  {
    id: 5,
    featured: true,
    year: "2022",
    title: "Portfolio v2 - Digital Experience",
    category: "Personal",
    description:
      "My personal portfolio built with modern UI/UX, buttery smooth physics-based animations, and strict performance metrics in mind. Designed to act as a complete archive of my professional and independent engineering work.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    image: "image_a17d71.jpg",
    demoLink: "#",
    codeLink: "#",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState("grid"); // 'grid' | 'list'
  const [sort, setSort] = useState("newest");

  // Filter & Sort Logic
  const filteredProjects = projectsData
    .filter((project) => filter === "All" || project.category === filter)
    .sort((a, b) => {
      if (sort === "newest") return parseInt(b.year) - parseInt(a.year);
      return parseInt(a.year) - parseInt(b.year);
    });

  const counts: any = {
    All: projectsData.length,
    Professional: projectsData.filter((p) => p.category === "Professional")
      .length,
    Personal: projectsData.filter((p) => p.category === "Personal").length,
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] overflow-hidden selection:bg-[#111] selection:text-white mt-20">
      {/* 1. HERO SECTION (Untouched) */}
      <main className="max-w-[1440px] mx-auto pt-16 pb-10 flex flex-col items-center text-center relative px-4">
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8D59F] text-[#111] px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-8"
        >
          {/* Works from 2022 – Present  */}
          A Few Things Brewed & Built ☕
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-[400] leading-[1.05] tracking-tight max-w-6xl mb-6 relative z-10"
        >
          Crafting digital products with 
          <br className="hidden md:block" />coffee & code.
        </motion.h1>

        {/* Hand-drawn Annotation (Top Right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-[10%] md:right-[15%] top-[54%] hidden lg:flex flex-col items-center transform rotate-6"
        >
          <span className="font-['Caveat',_cursive] text-2xl text-[#333] mb-2 transform -rotate-12">
            Explore the Projects
          </span>
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            className="opacity-80"
          >
            <path
              d="M20,20 Q80,20 80,80"
              fill="none"
              stroke="#333"
              strokeWidth="2"
            />
            <path
              d="M70,80 L80,80 L80,70"
              fill="none"
              stroke="#333"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] md:text-[19px] text-[#6B6B6B] font-ligth leading-relaxed max-w-2xl mb-16 relative z-10"
        >
          An archive of my professional software engineering engagements,
          open-source contributions, and experimental side projects.
        </motion.p>
      </main>

      {/* 2. CONTROLS SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center p-1 bg-white border border-[#E5E5E5] rounded-full shadow-sm w-full md:w-max">
            {[
              { label: "All Projects", key: "All", count: counts.All },
              {
                label: "Professional",
                key: "Professional",
                count: counts.Professional,
              },
              { label: "Personal", key: "Personal", count: counts.Personal },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 w-full justify-center md:w-auto ${
                  filter === tab.key
                    ? "bg-[#111] text-white shadow-md"
                    : "text-[#444] hover:bg-gray-50"
                }`}
              >
                {tab.label}{" "}
                <span className="opacity-60 text-[13px]">({tab.count})</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 text-[14px] text-[#555]">
              <span>Sort by:</span>
              <div className="flex items-center gap-1 font-semibold text-[#111] cursor-pointer hover:opacity-70">
                Newest <ChevronDown size={16} strokeWidth={2.5} />
              </div>
            </div>

            <div className="flex items-center p-1 bg-white border border-[#E5E5E5] rounded-lg shadow-sm">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-md transition-all ${view === "grid" ? "bg-[#111] text-white" : "text-[#666] hover:bg-gray-100"}`}
              >
                <Grid size={18} strokeWidth={2} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-md transition-all ${view === "list" ? "bg-[#111] text-white" : "text-[#666] hover:bg-gray-100"}`}
              >
                <List size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO TALL CARD FEED */}
      <section className="max-w-[1440px] mx-auto px-6 min-h-[50vh]">
        <motion.div
          layout
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} view={view} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

// --- PIXEL-PERFECT CARD COMPONENT ---
function ProjectCard({ project, view }: any) {
  const isGrid = view === "grid";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group bg-white rounded-[24px] border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#D0D0D0] flex ${
        isGrid ? "flex-col h-full" : "flex-col md:flex-row"
      }`}
    >
      {/* 1. TOP IMAGE HEADER */}
      <div
        className={`relative bg-[#111] overflow-hidden ${
          isGrid
            ? "h-[240px] w-full shrink-0"
            : "h-[240px] md:h-auto md:w-[35%] shrink-0"
        }`}
      >
        {/* Using Exact Image Provided */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
        />

        {/* Gradients to blend image softly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

        {/* Floating Badges */}
        {project.featured && (
          <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Star size={12} fill="currentColor" /> FEATURED
          </div>
        )}

        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-sm">
          {project.year}
        </div>
      </div>

      {/* 2. BOTTOM CONTENT */}
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <div>
          <h3 className="font-bold text-[#111] text-[19px] lg:text-[21px] leading-snug mb-3 pr-4">
            {project.title}
          </h3>

          <p className="text-[#555] text-[14px] leading-[1.65] mb-6">
            {project.description}
          </p>

          {/* Tag Cloud */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech: any) => (
              <span
                key={tech}
                className="text-[11px] font-medium text-[#444] px-3.5 py-1.5 rounded-full border border-[#E5E5E5] bg-transparent hover:bg-gray-50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-transparent">
          <div className="flex flex-wrap gap-3">
            {project.demoLink && (
              <a
                href={project.demoLink}
                className="bg-[#111] text-white px-4 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Live demo <ExternalLink size={15} />
              </a>
            )}

            {project.codeLink && (
              <a
                href={project.codeLink}
                className="bg-white border border-[#E5E5E5] text-[#111] px-4 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Github size={15} /> Code
              </a>
            )}
          </div>

          <div className="w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-black transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
