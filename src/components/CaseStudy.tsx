import React from "react";
import { Globe, FlaskConical, Server, ExternalLink } from "lucide-react";
import tbs from "../assets/tbs.png";
import crm from "../assets/crm.png";
import cinestream from "../assets/cinestream.png";
import tread from "../assets/treadtrends.png";
import salary from "../assets/salary.png"

const CaseStudy: React.FC = () => {
  const professionalProjects = [
    {
      id: "PRO_01",
      title: "THE_BUSSTAND",
      type: "Ticketing Engine",
      tech: "Node.js / React / PostgreSQL",
      desc: "High-concurrency platform. Implemented real-time seat availability and automated notification engine.",
      img: tbs,
      stats: ["70% Speed", "40% Boost", "RSA Sec"],
      link: "https://thebusstand.com/",
    },
    {
      id: "PRO_02",
      title: "TBS_CRM",
      type: "Operator Hub",
      tech: "Node.js / CRM / Database Opt",
      desc: "Comprehensive management system for bus operators. Features multi-tenant route management and real-time sync.",
      img: crm,
      stats: ["Multi-Tenant", "25% Latency", "Auto-Sync"],
      link: "https://crm.thebusstand.com/",
    },
  ];

  const personalProjects = [
    {
      id: "LAB_01",
      title: "CINE_STREAM",
      tech: "React / Redux",
      desc: "CineStream is an online movie streaming platform built with React.js and Tailwind CSS, integrating the TMDb API for fetching real-time movie data. The application features a clean and responsive UI, allowing users to explore trending, upcoming, and popular movies seamlessly.",
      img: cinestream,
    },
    {
      id: "LAB_02",
      title: "TREAD_TRENDS",
      tech: "MERN Stack",
      desc: "TreadTrends is a footwear e-commerce platform built with the MERN stack, offering users a seamless shopping experience with modern design and functionality.",
      img: tread,
    },
    {
      id: "LAB_03",
      title: "Payroll",
      tech: "MERN Stack",
      desc: "Smart payroll, attendance and HR — built for modern teams.Automate payroll runs, track IN / OUT punches, manage leaves and employee data — all in one beautiful dashboard tuned for teams of any size.",
      img: salary,
    },
  ];

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-40 transition-colors duration-300"
    >
      <div className="mb-16 md:mb-32 space-y-4 md:space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 p-2">
            <Server className="w-5 h-5 text-white" />
          </div>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-blue-600 mono">
            01 // INFRASTRUCTURE
          </p>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl heavy uppercase tracking-tighter text-black dark:text-white leading-[0.8] transition-colors duration-300">
          PROFESSIONAL <br />{" "}
          <span className="text-black/20 dark:text-gray-600">DEPLOYMENTS.</span>
        </h2>
      </div>

      <div className="space-y-32 md:space-y-64 mb-32 md:mb-64">
        {professionalProjects.map((p, i) => (
          <div
            key={p.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20 items-center group"
          >
            <div
              className={`lg:col-span-7 space-y-8 ${
                i % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden border border-black/10 dark:border-white/10 bg-black aspect-16/10 shadow-2xl">
                <img
                  src={p.img}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  alt={p.title}
                />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                  <a href={p.link}>
                    <div className="bg-white dark:bg-black p-3 md:p-4 text-black dark:text-white border border-black/10 dark:border-white/10 flex items-center space-x-2">
                      <Globe className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                      <span className="text-[8px] md:text-[10px] mono font-bold uppercase tracking-widest">
                        Live_Prod
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-5 space-y-6 md:space-y-10 ${
                i % 2 !== 0 ? "lg:order-1 lg:text-right" : ""
              }`}
            >
              <div
                className={`flex items-center space-x-4 ${
                  i % 2 !== 0 ? "justify-end" : ""
                }`}
              >
                <span className="text-[9px] md:text-[10px] font-black px-3 md:px-4 py-2 bg-black dark:bg-white text-white dark:text-black mono tracking-widest">
                  {p.id}
                </span>
                <div className="h-px w-12 md:w-20 bg-black/10 dark:bg-white/10"></div>
                <span className="text-blue-500 mono text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em]">
                  STABLE
                </span>
              </div>

              <div className="space-y-2 md:space-y-4">
                <h3 className="text-4xl md:text-5xl lg:text-6xl heavy text-black dark:text-white leading-[0.85] uppercase tracking-tighter glitch-text transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-[9px] md:text-xs font-black mono text-black/40 dark:text-white/40 uppercase tracking-[0.2em]">
                  {p.tech}
                </p>
              </div>

              <p
                className={`text-base md:text-xl text-black/50 dark:text-white/50 leading-relaxed font-light ${
                  i % 2 !== 0 ? "lg:ml-auto" : ""
                } max-w-sm transition-colors duration-300`}
              >
                {p.desc}
              </p>

              <div
                className={`flex flex-wrap gap-2 md:gap-3 ${
                  i % 2 !== 0 ? "justify-end" : ""
                }`}
              >
                {p.stats.map((s) => (
                  <div
                    key={s}
                    className="px-3 py-1.5 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-[8px] md:text-[10px] font-black mono text-blue-600 uppercase"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-24 md:pt-40 border-t border-black/5 dark:border-white/5">
        <div className="mb-12 md:mb-24 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-600 p-2">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-orange-600 mono">
              02 // EXPERIMENTAL_LAB
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl heavy uppercase tracking-tighter text-black dark:text-white leading-[0.8] transition-colors duration-300">
            LAB <br />{" "}
            <span className="text-black/20 dark:text-gray-600">PROJECTS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {personalProjects.map((p) => (
            <div
              key={p.id}
              className="group bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/10 p-6 md:p-8 hover:bg-white dark:hover:bg-black transition-all"
            >
              <div className="relative aspect-video overflow-hidden border border-black/5 dark:border-white/5 mb-6 md:mb-8">
                <img
                  src={p.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={p.title}
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] md:text-[9px] mono font-bold text-orange-600 uppercase tracking-widest">
                    {p.id}
                  </span>
                  <ExternalLink className="w-4 h-4 text-black/20 dark:text-white/20 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl heavy uppercase tracking-tighter text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-black/40 dark:text-white/40 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
