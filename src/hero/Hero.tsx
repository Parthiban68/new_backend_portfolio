import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import BackgroundElements from './BackgroundElements';
import LeftContent from './LeftContent';
import RightNetwork from './RightNetwork';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-bg-base flex items-center"
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <BackgroundElements />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          style={{ y: yContent, opacity: opacityContent }}
          className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8"
        >
          {/* LEFT: 60% Content */}
          <div className="w-full lg:w-[60%] flex-shrink-0 pt-20 lg:pt-0">
            <LeftContent />
          </div>

          {/* RIGHT: 40% Interactive visualization */}
          <div className="w-full lg:w-[40%] h-[500px] lg:h-[700px] relative">
            <RightNetwork />
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 flex justify-end items-center z-20 pointer-events-none hidden md:flex"
      >
        <div className="flex items-center gap-2 text-[12px] font-medium text-primary bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Available for new Backend projects
        </div>
      </motion.div>
    </section>
  );
}
