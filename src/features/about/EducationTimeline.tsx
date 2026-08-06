'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Code2, Database, Terminal, Globe, Server, Monitor } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const EDUCATION_DATA = [
  {
    id: '01',
    year: '2018',
    title: 'Higher Secondary Education',
    institution: 'Government Higher Secondary School',
    description: 'Built a strong academic foundation in Mathematics, Physics, and Computer Science while developing analytical thinking and problem-solving skills.',
    skills: [
      { name: 'Math', icon: Terminal },
      { name: 'Physics', icon: Globe },
    ],
    icon: GraduationCap,
  },
  {
    id: '02',
    year: '2020',
    title: 'Bachelor of Engineering',
    institution: 'Computer Science and Engineering',
    description: 'Completed my undergraduate degree with a strong focus on software engineering, data structures, algorithms, database systems, and networking.',
    skills: [
      { name: 'C / Java', icon: Code2 },
      { name: 'SQL', icon: Database },
      { name: 'Systems', icon: Server },
    ],
    icon: Database,
  },
  {
    id: '03',
    year: '2024',
    title: 'MERN Stack Certification',
    institution: 'KGISL Micro College',
    description: 'Completed an intensive full-stack development program covering modern JavaScript development, scalable architectures, and RESTful applications.',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'React', icon: Monitor },
      { name: 'MongoDB', icon: Database },
    ],
    icon: Code2,
  },
];

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  }),
};

export default function EducationTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Page-level Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw the central line on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      );

      // 2. Fade & slide items in based on alternating layout
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        const isEven = index % 2 === 0;
        const xOffset = isEven ? 40 : -40;

        gsap.fromTo(
          item,
          { opacity: 0, x: xOffset },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Global Page Scroll Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gray-900 dark:bg-gray-100"
        style={{ scaleX }}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen w-full overflow-hidden bg-[#fcfcfd] text-gray-900 transition-colors duration-500 dark:bg-neutral-950 dark:text-gray-100 py-32"
      >
      
        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          
          {/* SECTION HEADER */}
          <div className="mb-32 flex flex-col items-center text-center">
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="mb-4 text-3xl font-[400] tracking-tight md:text-5xl"
            >
              Learning Journey
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textRevealVariants}
              className="max-w-xl text-base text-gray-500 dark:text-gray-400"
            >
              The academic and professional milestones that shaped my foundation in computer science and scalable backend engineering.
            </motion.p>
          </div>

          {/* TIMELINE LAYOUT */}
          <div className="relative mx-auto w-full">
            
            {/* Main Central Line */}
            <div className="absolute left-8 top-0 h-full w-[1px] bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-ml-[0.5px]">
              {/* Animated Draw Line (Fixed missing h-full) */}
              <div
                ref={lineRef}
                className="absolute left-0 top-0 h-full w-full origin-top bg-gray-400 dark:bg-gray-500"
              />
            </div>

            {/* Timeline Items */}
            <div className="flex flex-col gap-16 md:gap-32">
              {EDUCATION_DATA.map((item, index) => {
                const isEven = index % 2 === 0;
                const MainIcon = item.icon;

                return (
                  <div
                    key={item.id}
                    ref={(el) => { itemsRef.current[index] = el; }}
                    className="relative flex flex-col md:flex-row items-center w-full"
                  >
                    {/* Central Node Indicator (The tiny circle on the line) */}
                    <div className="absolute left-8 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-[2px] border-gray-300 bg-white dark:border-gray-600 dark:bg-[#09090B] md:left-1/2 z-10" />

                    {/* --- MOBILE VIEW --- */}
                    <div className="md:hidden w-full pl-20 flex flex-col pb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 dark:border-gray-800 dark:bg-[#111]">
                          <MainIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                        </motion.div>
                        <span className="text-xs font-semibold tracking-widest text-gray-400">{item.id}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-400 mb-1">{item.year}</span>
                      <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <h4 className="mb-3 text-sm font-medium text-gray-500">{item.institution}</h4>
                      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {item.skills.map((skill, idx) => {
                          const SkillIcon = skill.icon;
                          return (
                            <div key={idx} className="flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm dark:bg-[#1a1a1a] dark:border-gray-800">
                              <SkillIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* --- DESKTOP VIEW: LEFT COLUMN --- */}
                    <div className="hidden md:flex w-1/2 justify-end pr-12 lg:pr-24">
                      {isEven ? (
                        // Icon Block (Item 1 & 3)
                        <div className="flex flex-col items-center">
                          <motion.div 
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 dark:bg-[#111] dark:shadow-none transition-transform"
                          >
                            <MainIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                          </motion.div>
                          <span className="mt-4 text-xs font-semibold tracking-widest text-gray-400">
                            {item.id}
                          </span>
                        </div>
                      ) : (
                        // Text Content (Item 2) - Aligned Right
                        <div className="flex flex-col text-right items-end w-full max-w-sm">
                          <span className="text-sm font-medium text-gray-400 mb-2">{item.year}</span>
                          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                          <h4 className="mb-4 text-sm font-medium text-gray-500">{item.institution}</h4>
                          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                          
                          <div className="flex items-center gap-2 mt-2 justify-end">
                            {item.skills.map((skill, idx) => {
                              const SkillIcon = skill.icon;
                              return (
                                <div key={idx} className="group relative flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm dark:bg-[#1a1a1a] dark:border-gray-800 transition-colors hover:border-gray-300 dark:hover:border-gray-600">
                                  <SkillIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                  <span className="absolute -bottom-8 scale-0 rounded bg-gray-900 px-2 py-1 text-[10px] text-white transition-all group-hover:scale-100 dark:bg-white dark:text-gray-900 z-20">
                                    {skill.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* --- DESKTOP VIEW: RIGHT COLUMN --- */}
                    <div className="hidden md:flex w-1/2 justify-start pl-12 lg:pl-24">
                      {isEven ? (
                        // Text Content (Item 1 & 3) - Aligned Left
                        <div className="flex flex-col text-left items-start w-full max-w-sm">
                          <span className="text-sm font-medium text-gray-400 mb-2">{item.year}</span>
                          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                          <h4 className="mb-4 text-sm font-medium text-gray-500">{item.institution}</h4>
                          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
                          
                          <div className="flex items-center gap-2 mt-2 justify-start">
                            {item.skills.map((skill, idx) => {
                              const SkillIcon = skill.icon;
                              return (
                                <div key={idx} className="group relative flex h-8 w-8 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm dark:bg-[#1a1a1a] dark:border-gray-800 transition-colors hover:border-gray-300 dark:hover:border-gray-600">
                                  <SkillIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                  <span className="absolute -bottom-8 scale-0 rounded bg-gray-900 px-2 py-1 text-[10px] text-white transition-all group-hover:scale-100 dark:bg-white dark:text-gray-900 z-20">
                                    {skill.name}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        // Icon Block (Item 2)
                        <div className="flex flex-col items-center">
                          <motion.div 
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 dark:bg-[#111] dark:shadow-none transition-transform"
                          >
                            <MainIcon className="h-6 w-6 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                          </motion.div>
                          <span className="mt-4 text-xs font-semibold tracking-widest text-gray-400">
                            {item.id}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}