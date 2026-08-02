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


import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20
    }
  }
};

export default function LeftContent() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center max-w-3xl"
    >
      {/* Top Badge Style */}
      <motion.div 
        variants={itemVariants} 
        className="flex items-center gap-2.5 mb-5 md:mb-5 text-[15px] md:text-[17px] text-gray-500 font-medium"
      >
        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
        <span>Backend Engineering</span>
        <span className="text-gray-300 font-light text-xl px-0.5">×</span>
        <span>Distributed Systems</span>
      </motion.div>

      {/* Headline */}
      <motion.div variants={itemVariants}>
        <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-[60px] leading-[0.92] font-medium tracking-[-0.04em] mb-6 md:mb-8 text-[#0a0a0a]">
          Crafting Secure APIs,<br />
          Distributed Systems,<br />
          & Enterprise Software!
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <p className="text-[15px] md:text-[17px] text-[#1a1a1a] leading-[1.45] mb-10 md:mb-12 max-w-[800px] font-normal">
          I started with clean architecture, database design, and API development. Today, I turn that foundation into highly scalable backend systems, robust interfaces, and production-grade software built with purpose.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 md:gap-8">
        {/* Primary Download Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-4 pl-6 pr-2 py-2 bg-[#0a0a0a] text-white rounded-[32px] font-medium text-[16px] md:text-[18px] transition-colors shadow-md"
        >
          <span>Download CV</span>
          <div className="bg-[#2a2a2a] p-2.5 rounded-full flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </motion.button>

        {/* Secondary Explore Button */}
        <motion.button 
          whileHover={{ x: 4 }}
          className="flex items-center gap-1.5 pb-1 border-b-[1.5px] border-gray-300 text-[#0a0a0a] font-medium text-[16px] md:text-[18px] hover:border-gray-500 transition-colors"
        >
          Explore projects <ArrowUpRight className="w-4 h-4 text-gray-700 mb-0.5" strokeWidth={2} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}