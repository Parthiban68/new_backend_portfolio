import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CFO360.ai",
    category: "Professional",
    role: "Full-Stack Engineer",
    description:
      "A multi-tenant accounting and finance platform built for scalable business operations.",
    tech: ["NestJS", "PostgreSQL", "Sequelize", "React"],
    link: "#cfo360",
    image: "/src/assets/cfo.png",
  },
  {
    number: "02",
    title: "TreadTrends",
    category: "Professional",
    role: "Full-Stack Engineer",
    description:
      "A real-time product tracking and trend analysis platform for smarter decisions.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#treadtrends",
    image: "/src/assets/treadtrends.png",
  },
  {
    number: "03",
    title: "TaskFlow",
    category: "Personal",
    role: "Full-Stack Engineer",
    description:
      "A personal productivity app designed to help teams plan, track, and ship work with clarity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#taskflow",
    image: "/src/assets/new_5.png",
  },
];

export default function SelectedWork() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="relative bg-white dark:bg-[#050505] text-[#0a0a0a] dark:text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
            Selected Works
          </p>
          <h2 className="mt-4 font-['Barlow_Condensed'] text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
            Things I've Built.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[#0a0a0a]/70 sm:text-xl dark:text-white/60">
            From production systems to independent experiments — a selection of
            work shaped by product thinking, engineering, and attention to
            detail.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          >
            <div className="relative overflow-hidden border border-[#0a0a0a]/10 dark:border-white/10">
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[#08C9E8]" />
              <div className="aspect-[16/10] w-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-['Barlow_Condensed'] text-2xl text-[#0a0a0a] dark:text-white">
                  {featured.number}
                </span>
                <div className="h-px w-8 bg-[#0a0a0a]/20 dark:bg-white/20" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                  {featured.category}
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed'] text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-lg text-[#0a0a0a]/80 dark:text-white/70">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/60 dark:text-white/50">
                <span>{featured.role}</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#0a0a0a]/40 dark:text-white/40">
                {featured.tech.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {idx < featured.tech.length - 1 && (
                      <span className="text-[#08C9E8]">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href={featured.link}
                  className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0a0a0a] transition-colors hover:text-[#08C9E8] dark:text-white dark:hover:text-[#08C9E8]"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-12 lg:grid-cols-2">
            {rest.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col gap-8 border-t border-[#0a0a0a]/10 pt-10 dark:border-white/10"
              >
                <div className="relative overflow-hidden border border-[#0a0a0a]/10 dark:border-white/10">
                  <div className="aspect-[16/9] w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-['Barlow_Condensed'] text-xl text-[#0a0a0a] dark:text-white">
                      {project.number}
                    </span>
                    <div className="h-px w-6 bg-[#0a0a0a]/20 dark:bg-white/20" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base text-[#0a0a0a]/80 dark:text-white/70">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/60 dark:text-white/50">
                    <span>{project.role}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#0a0a0a]/40 dark:text-white/40">
                    {project.tech.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < project.tech.length - 1 && (
                          <span className="text-[#08C9E8]">•</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href={project.link}
                      className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0a0a0a] transition-colors hover:text-[#08C9E8] dark:text-white dark:hover:text-[#08C9E8]"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="mb-4 h-1 w-12 bg-[#08C9E8]" />
            <h3 className="font-['Barlow_Condensed'] text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[-0.02em]">
              See everything I've built.
            </h3>
            <NavLink
              to={"/projects"}
              className="group mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[#0a0a0a] transition-colors hover:text-[#08C9E8] dark:text-white dark:hover:text-[#08C9E8]"
            >
              <span>View All Work</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
