// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Briefcase, MapPin, Calendar, CheckCircle2, Server, Database, Code, Shield } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// // --- Data ---
// const experienceData = [
//   {
//     id: 1,
//     company: 'Nubiznez Private Limited',
//     role: 'Backend Engineer',
//     currentPosition: 'Team Lead (Backend)',
//     employmentType: 'Full Time',
//     location: 'Coimbatore, Tamil Nadu',
//     duration: 'January 2025 – Present',
//     status: 'Currently Working',
//     description:
//       'Leading backend development for an enterprise accounting SaaS platform. Responsible for designing scalable backend architecture, implementing business modules, maintaining secure APIs, and guiding backend development across the accounting system.',
//     responsibilities: [
//       'Designed enterprise backend architecture using NestJS.',
//       'Developed multi-tenant accounting platform.',
//       'Built secure authentication and authorization systems.',
//       'Designed scalable PostgreSQL database structures.',
//       'Developed RESTful APIs for finance modules.',
//       'Implemented clean architecture and modular design.',
//       'Optimized database queries and backend performance.',
//       'Led backend implementation across multiple accounting modules.',
//     ],
//     techStack: [
//       'NestJS',
//       'Node.js',
//       'TypeScript',
//       'PostgreSQL',
//       'Sequelize',
//       'JWT',
//       'Docker',
//       'Git',
//       'REST APIs',
//     ],
//     achievements: [
//       'Enterprise Accounting SaaS',
//       'Multi-Tenant Architecture',
//       'Backend Team Leadership',
//       'Secure Authentication',
//       'Database Design',
//       'API Development',
//     ],
//   },
// ];

// const floatingMetrics = [
//   'Enterprise SaaS',
//   'Multi-Tenant',
//   'REST APIs',
//   'Backend Architecture',
//   'System Design',
//   'Database Engineering',
//   'API Security',
//   'Performance Optimization',
// ];

// const FloatingBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       {/* Network Grid Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
//       {/* Floating Metrics */}
//       {floatingMetrics.map((metric, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-xs md:text-sm font-mono text-gray-400/30 dark:text-gray-500/30 whitespace-nowrap"
//           initial={{
//             x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//             y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
//           }}
//           animate={{
//             x: [null, Math.random() * 1000 - 500],
//             y: [null, Math.random() * 1000 - 500],
//           }}
//           transition={{
//             duration: Math.random() * 20 + 20,
//             repeat: Infinity,
//             repeatType: 'mirror',
//             ease: 'linear',
//           }}
//         >
//           {metric}
//         </motion.div>
//       ))}
      
//       {/* Soft Particles & Glowing Orbs */}
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[128px]"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-indigo-500/20 rounded-full blur-[128px]"></div>
//     </div>
//   );
// };

// export default function ExperienceTimeline() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Timeline Line Animation
//       gsap.fromTo(
//         lineRef.current,
//         { scaleY: 0 },
//         {
//           scaleY: 1,
//           transformOrigin: 'top center',
//           ease: 'none',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top center+=100',
//             end: 'bottom center',
//             scrub: 1,
//           },
//         }
//       );

//       // Card Animations (Fade, Slide, Scale, Rotate)
//       const cards = gsap.utils.toArray('.timeline-card');
//       cards.forEach((card: any, i) => {
//         // Determine direction based on index for desktop (even left, odd right)
//         const isLeft = i % 2 === 0;
//         const xOffset = window.innerWidth > 768 ? (isLeft ? -50 : 50) : 0;
//         const yOffset = window.innerWidth <= 768 ? 50 : 0;

//         gsap.fromTo(
//           card,
//           { opacity: 0, x: xOffset, y: yOffset, scale: 0.95, rotation: isLeft ? -2 : 2 },
//           {
//             opacity: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             rotation: 0,
//             duration: 0.8,
//             ease: 'power3.out',
//             scrollTrigger: {
//               trigger: card,
//               start: 'top bottom-=150',
//               toggleActions: 'play none none reverse',
//             },
//           }
//         );

//         // Glow the node dot when card enters
//         const dot = card.querySelector('.timeline-dot');
//         if (dot) {
//           gsap.fromTo(
//             dot,
//             { scale: 0, opacity: 0, boxShadow: '0 0 0px rgba(59, 130, 246, 0)' },
//             {
//               scale: 1,
//               opacity: 1,
//               boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
//               duration: 0.5,
//               scrollTrigger: {
//                 trigger: card,
//                 start: 'top center',
//                 toggleActions: 'play none none reverse',
//               },
//             }
//           );
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative min-h-screen py-24 bg-white dark:bg-[#09090B] text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300"
//     >
//       <FloatingBackground />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-4 block"
//           >
//             Experience
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
//           >
//             Engineering Journey
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-gray-600 dark:text-gray-400"
//           >
//             Building scalable backend systems, enterprise applications, and solving real-world engineering challenges through hands-on industry experience.
//           </motion.p>
//         </div>

//         {/* Timeline Layout */}
//         <div className="relative">
//           {/* Main Vertical Line */}
//           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>
//           {/* Animated Highlight Line */}
//           <div 
//             ref={lineRef}
//             className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent -translate-x-1/2"
//           ></div>

//           {experienceData.map((exp, index) => {
//             const isLeft = index % 2 === 0;
//             return (
//               <div
//                 key={exp.id}
//                 className={`timeline-card relative flex flex-col md:flex-row items-start mb-20 ${
//                   isLeft ? 'md:flex-row-reverse' : ''
//                 }`}
//               >
//                 {/* Timeline Node/Dot */}
//                 <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#09090B] -translate-x-1/2 mt-8 z-20 timeline-dot"></div>

//                 {/* Content Side (Empty space on opposite side for desktop) */}
//                 <div className="hidden md:block md:w-1/2"></div>

//                 {/* Card Container */}
//                 <div className={`w-full md:w-1/2 pl-16 pr-0 md:px-12 pt-4`}>
                  
//                   {/* Glassmorphism Card */}
//                   <motion.div
//                     whileHover={{ y: -5 }}
//                     className="relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-xl"
//                   >
//                     <div className="bg-white/80 dark:bg-[#111111]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 h-full border border-white/20 dark:border-white/5">
                      
//                       {/* Floating Icons background inside card */}
//                       <div className="absolute top-4 right-4 text-gray-200 dark:text-gray-800 z-0">
//                         <Server size={64} strokeWidth={1} />
//                       </div>

//                       {/* Header row */}
//                       <div className="relative z-10 flex flex-wrap gap-4 justify-between items-start mb-6">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
//                             {exp.company}
//                           </h3>
//                           <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-1">
//                             {exp.currentPosition}
//                           </p>
//                           <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
//                             {exp.role} • {exp.employmentType}
//                           </p>
//                         </div>
//                         <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
//                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
//                           {exp.status}
//                         </span>
//                       </div>

//                       {/* Meta info */}
//                       <div className="relative z-10 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium">
//                         <div className="flex items-center gap-1.5">
//                           <MapPin size={16} className="text-gray-400" />
//                           {exp.location}
//                         </div>
//                         <div className="flex items-center gap-1.5">
//                           <Calendar size={16} className="text-gray-400" />
//                           {exp.duration}
//                         </div>
//                       </div>

//                       <p className="relative z-10 text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                         {exp.description}
//                       </p>

//                       {/* Responsibilities */}
//                       <div className="relative z-10 mb-6">
//                         <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
//                           <Code size={16} /> Key Responsibilities
//                         </h4>
//                         <ul className="space-y-2">
//                           {exp.responsibilities.map((req, i) => (
//                             <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
//                               <span className="mt-1 text-blue-500 dark:text-blue-400">•</span>
//                               <span>{req}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Achievements */}
//                       <div className="relative z-10 mb-8">
//                         <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
//                           <Shield size={16} /> Achievements
//                         </h4>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                           {exp.achievements.map((ach, i) => (
//                             <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
//                               <CheckCircle2 size={16} className="text-indigo-500" />
//                               {ach}
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Tech Stack Chips */}
//                       <div className="relative z-10 pt-6 border-t border-gray-200 dark:border-gray-800">
//                         <div className="flex flex-wrap gap-2">
//                           {exp.techStack.map((tech, i) => (
//                             <motion.span
//                               key={i}
//                               whileHover={{ scale: 1.05, backgroundColor: 'var(--tw-colors-blue-500)', color: '#fff' }}
//                               className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-default transition-colors duration-200"
//                             >
//                               {tech}
//                             </motion.span>
//                           ))}
//                         </div>
//                       </div>

//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Building2, MapPin, Briefcase, Calendar, CheckCircle2,
  Server, Shield, Database, LayoutTemplate, Cpu, Zap, Box, Lock, Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const milestones = [
  {
    id: '01',
    title: 'Started as Backend Engineer',
    description: 'Joined the company to build backend services for an enterprise accounting SaaS platform while learning large-scale software architecture.',
  },
  {
    id: '02',
    title: 'Built Core Backend Modules',
    description: 'Designed and implemented scalable REST APIs, authentication systems, and accounting business workflows using NestJS and PostgreSQL.',
  },
  {
    id: '03',
    title: 'Designed Multi-Tenant Architecture',
    description: 'Engineered schema-based multi-tenant architecture capable of supporting enterprise SaaS customers while keeping the codebase modular and scalable.',
  },
  {
    id: '04',
    title: 'Led Backend Development',
    description: 'Started leading backend implementation, reviewing architecture decisions, mentoring developers, and owning critical accounting modules.',
  },
  {
    id: '05',
    title: 'Building Enterprise Scale',
    description: 'Currently focused on system design, backend optimization, scalable infrastructure, clean architecture, and enterprise software engineering.',
  },
];

const responsibilities = [
  { name: 'Backend Architecture', icon: <Server size={20} /> },
  { name: 'NestJS Development', icon: <Box size={20} /> },
  { name: 'Authentication', icon: <Shield size={20} /> },
  { name: 'Accounting Engine', icon: <Cpu size={20} /> },
  { name: 'REST APIs', icon: <Layers size={20} /> },
  { name: 'Database Design', icon: <Database size={20} /> },
  { name: 'Multi-Tenant SaaS', icon: <LayoutTemplate size={20} /> },
  { name: 'API Security', icon: <Lock size={20} /> },
];

const techStack = [
  'NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'Sequelize',
  'JWT', 'Docker', 'Git', 'REST APIs', 'React'
];

const impacts = [
  'Designed enterprise backend architecture',
  'Built scalable authentication infrastructure',
  'Developed finance modules',
  'Created reusable backend components',
  'Improved API performance',
  'Optimized PostgreSQL queries',
  'Implemented modular backend architecture',
  'Created multi-tenant backend foundation',
];

// --- Components ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[128px]"></div>
    <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[128px]"></div>
  </div>
);

export default function EngineeringJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw the journey line downwards based on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: '80% center',
            scrub: 1,
          },
        }
      );

      // 2. Animate milestones
      milestoneRefs.current.forEach((milestone, index) => {
        if (!milestone) return;
        const isLeft = index % 2 === 0;
        
        gsap.fromTo(
          milestone,
          { opacity: 0, y: 50, x: isLeft ? -20 : 20 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: milestone,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Glow the timeline dot
        const dot = milestone.querySelector('.timeline-dot');
        if (dot) {
          gsap.to(dot, {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
            backgroundColor: '#3B82F6',
            scrollTrigger: {
              trigger: milestone,
              start: 'top center',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen py-14 bg-[#FAFAFA] dark:bg-[#09090B] text-gray-900 dark:text-gray-100  transition-colors duration-300 overflow-hidden"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6"
          >
            Experience
          </motion.span>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            {['My ', 'Engineering ', 'Journey'].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            From writing backend APIs to leading enterprise SaaS backend development, every milestone has strengthened my understanding of scalable software architecture.
          </motion.p>
        </div>

        {/* --- FEATURED COMPANY CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto mb-32 group"
        >
          <div className="absolute inset-0 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-white/60 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:-translate-y-1 transition-transform duration-500">
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  NB
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Nubiznez Private Limited</h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-lg">
                    Software Engineer (Backend)
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                <span className="flex items-center gap-2"><Briefcase size={16} /> Full Time</span>
                <span className="flex items-center gap-2"><Calendar size={16} /> January 2025 — Present</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> Coimbatore, Tamil Nadu</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border border-green-200 dark:border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Currently Working
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                Started as Traniee
              </span>
            </div>
          </div>
        </motion.div>

        {/* --- CAREER JOURNEY (VERTICAL) --- */}
        <div className="relative max-w-4xl mx-auto mb-32">
          {/* Main Track Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>
          {/* Animated Glow Line */}
          <div 
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent -translate-x-1/2 z-10"
          ></div>

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={milestone.id}
                ref={(el) => (milestoneRefs.current[index] = el)}
                className={`relative flex flex-col md:flex-row items-center mb-20 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-1/2"></div>
                
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-[#FAFAFA] dark:border-[#09090B] -translate-x-1/2 z-20 timeline-dot transition-colors duration-500"></div>
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-20 pr-0 md:px-12 py-2`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white/40 dark:bg-[#111111]/40 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors shadow-sm"
                  >
                    <span className="text-6xl font-black text-gray-100 dark:text-gray-800/50 absolute top-2 right-4 -z-10 pointer-events-none">
                      {milestone.id}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- ENGINEERING RESPONSIBILITIES --- */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold mb-8 text-center">Engineering Responsibilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {responsibilities.map((res, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)' }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#111111] rounded-2xl border border-gray-200 dark:border-white/5 group transition-all"
              >
                <div className="text-gray-400 group-hover:text-blue-500 mb-4 transition-colors">
                  {res.icon}
                </div>
                <span className="text-sm font-semibold text-center group-hover:text-blue-500 transition-colors">
                  {res.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TECH STACK (FLOATING CLOUD) --- */}
        <div className="mb-32 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 2 : -2 }}
                className="px-6 py-3 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm text-sm font-mono font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ENGINEERING IMPACT --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">System Impact & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {impacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 bg-white/50 dark:bg-[#111111]/50 border border-gray-100 dark:border-white/5 rounded-2xl shadow-sm hover:bg-white dark:hover:bg-[#151515] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium text-gray-800 dark:text-gray-200 text-sm md:text-base">
                  {impact}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}