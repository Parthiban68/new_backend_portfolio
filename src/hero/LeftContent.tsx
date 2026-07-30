import { motion } from 'motion/react';
import { Download, ArrowRight, Activity } from 'lucide-react';

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
      className="flex flex-col"
    >
      {/* Badge */}
      {/* <motion.div variants={itemVariants} className="flex items-center gap-2 bg-bg-subtle border border-black/10 w-fit px-3 py-1.5 rounded-full mb-8">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
        </span>
        <span className="text-[11px] font-semibold tracking-wide text-primary">
          Parthiban M • Backend Engineer
        </span>
      </motion.div> */}

      {/* Headline */}
      <motion.div variants={itemVariants}>
        <h1 className="text-5xl leading-[1.05] font-semibold tracking-tighter mb-8 text-primary">
          Architecting Secure APIs,<br className="hidden lg:block" />
          <span className="text-secondary font-medium">Distributed Systems</span><br className="hidden lg:block" />
          & Enterprise Software.
        </h1>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <p className="text-[18px] text-secondary leading-relaxed mb-10 max-w-[480px]">
          Hi, I'm Parthiban. I build production-grade backend systems with NestJS, PostgreSQL, and modern cloud architecture focused on scalability, maintainability, and long-term growth.
        </p>
      </motion.div>

      {/* Stats Chips (Bento Grid) */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-12 max-w-[480px]">
        <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
          <span className="text-2xl font-semibold tracking-tight text-primary">1.6+ Years</span>
          <span className="text-[11px] text-secondary uppercase tracking-widest mt-1">Experience</span>
        </div>
        <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
          <span className="text-2xl font-semibold tracking-tight text-primary">40+</span>
          <span className="text-[11px] text-secondary uppercase tracking-widest mt-1">Modules Delivered</span>
        </div>
        <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
          <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-1">Backend Stack</span>
          <span className="text-[13px] text-secondary mt-auto">NestJS • PostgreSQL • Redis</span>
        </div>
        <div className="flex flex-col p-4 bg-bg-subtle/50 border border-black/5 rounded-2xl">
          <span className="text-[11px] font-semibold text-primary uppercase tracking-widest mb-1">Methodology</span>
          <span className="text-[13px] text-secondary mt-auto">Clean Architecture • ERP</span>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-[14px] bg-black/80 transition-colors shadow-sm flex items-center gap-2"
        >
          View Projects <ArrowRight className="w-4 h-4" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3.5 bg-transparent border border-black/10 text-primary rounded-full font-medium text-[14px] hover:bg-black/5 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" /> Download CV
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
