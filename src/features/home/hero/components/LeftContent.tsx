// import { motion } from 'motion/react';
// import { Download, ArrowRight, Activity } from 'lucide-react';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 70,
//       damping: 20
//     }
//   }
// };

// export default function LeftContent() {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="flex flex-col"
//     >
//       {/* Badge */}
//       {/* <motion.div variants={itemVariants} className="flex items-center gap-2 bg-bg-subtle border border-black/10 w-fit px-3 py-1.5 rounded-full mb-8">
//         <span className="relative flex h-1.5 w-1.5">
//           <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-ping" />
//           <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
//         </span>
//         <span className="text-[11px] font-semibold tracking-wide text-primary">
//           Parthiban M • Backend Engineer
//         </span>
//       </motion.div> */}

//       {/* Headline */}
//       <motion.div variants={itemVariants}>
//         <h1 className="text-5xl leading-[1.05] font-semibold tracking-tighter mb-8 text-primary">
//           Architecting Secure APIs,<br className="hidden lg:block" />
//           <span className="text-secondary font-medium">Distributed Systems</span><br className="hidden lg:block" />
//           & Enterprise Software.
//         </h1>
//       </motion.div>

//       {/* Description */}
//       <motion.div variants={itemVariants}>
//         <p className="text-[18px] text-secondary leading-relaxed mb-10 max-w-[480px]">
//           Hi, I'm Parthiban. I build production-grade backend systems with NestJS, PostgreSQL, and modern cloud architecture focused on scalability, maintainability, and long-term growth.
//         </p>
//       </motion.div>

//       {/* Stats Chips (Bento Grid) */}
//       <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-12 max-w-[480px]">
//         <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
//           <span className="text-2xl font-semibold tracking-tight text-primary">1.6+ Years</span>
//           <span className="text-[11px] text-secondary uppercase tracking-widest mt-1">Experience</span>
//         </div>
//         <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
//           <span className="text-2xl font-semibold tracking-tight text-primary">40+</span>
//           <span className="text-[11px] text-secondary uppercase tracking-widest mt-1">Modules Delivered</span>
//         </div>
//         <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
//           <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-1">Backend Stack</span>
//           <span className="text-[13px] text-secondary mt-auto">NestJS • PostgreSQL • Redis</span>
//         </div>
//         <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
//           <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-1">Methodology</span>
//           <span className="text-[13px] text-secondary mt-auto">Clean Architecture • ERP</span>
//         </div>
//       </motion.div>

//       {/* Buttons */}
//       <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-[14px] transition-colors shadow-sm flex items-center gap-2"
//         >
//           View Projects <ArrowRight className="w-4 h-4" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="px-8 py-3.5 bg-transparent border border-black/10 text-primary rounded-full font-medium text-[14px] hover:bg-black/5 transition-colors flex items-center gap-2"
//         >
//           <Download className="w-4 h-4" /> Download CV
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

import { motion, Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

export default function LeftContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center max-w-3xl w-full"
    >
      {/* Top Badge Style */}
      <motion.div
        variants={itemVariants}
        className="flex items-center flex-wrap gap-2 sm:gap-2.5 mb-4 md:mb-5 text-[14px] sm:text-[15px] md:text-[17px] text-zinc-600 dark:text-zinc-400 font-medium transition-colors duration-300"
      >
        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)] shrink-0"></div>
        <span>Software Engineering</span>
        <span className="text-zinc-300 dark:text-zinc-600 font-light text-xl px-0.5">
          ×
        </span>
        <span>Distributed Systems</span>
      </motion.div>

      {/* Headline */}
      <motion.div variants={itemVariants}>
        {/* Uses natural wrap on mobile, forced breaks on sm+ */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.1] sm:leading-[0.92] font-medium tracking-[-0.04em] mb-5 sm:mb-6 md:mb-8 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
          Crafting Secure APIs,
          <br className="hidden sm:block" />
          Distributed Systems,
          <br className="hidden sm:block" />& Enterprise Software!
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-zinc-700 dark:text-zinc-300 leading-[1.6] sm:leading-[1.45] mb-8 sm:mb-10 md:mb-12 max-w-[800px] font-normal transition-colors duration-300">
          I started with clean architecture, database design, and API
          development. Today, I turn that foundation into highly scalable
          backend systems, robust interfaces, and production-grade software
          built with purpose.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 md:gap-8"
      >
        {/* Primary Download Button */}
        <a href="https://github.com/Parthiban68">      <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          // Full width on mobile, auto width on larger screens
          className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4 pl-6 pr-2 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[32px] font-medium text-[16px] md:text-[18px] transition-colors duration-300 shadow-md group"
        >  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          <span>GitHub</span>
          <div className="bg-zinc-800 dark:bg-zinc-200 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-300 p-2.5 rounded-full flex items-center justify-center transition-colors duration-300">
            <ArrowRight
              className="w-5 h-5 text-white dark:text-zinc-900"
              strokeWidth={2.5}
            />
          </div>
        </motion.button></a>
  

        {/* Secondary Explore Button */}
        <NavLink to={"/projects"}>
          <motion.button
            whileHover={{ x: 4 }}
            // Aligned nicely for mobile stacking
            className="flex items-center gap-1.5 pb-1 border-b-[1.5px] border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium text-[16px] md:text-[18px] hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors duration-300"
          >
            Explore projects
            <ArrowUpRight
              className="w-4 h-4 text-zinc-600 dark:text-zinc-400 mb-0.5"
              strokeWidth={2}
            />
          </motion.button>
        </NavLink>
      </motion.div>
    </motion.div>
  );
}
