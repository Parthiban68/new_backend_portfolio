import { motion } from "motion/react";
import BackgroundElements from "./components/BackgroundElements";
import LeftContent from "./components/LeftContent";
import RightNetwork from "./components/RightNetwork";

export default function Hero() {
  return (
    <section
      // Locked to h-screen to perfectly fit the viewport.
      // Overflow-hidden ensures background elements don't create unwanted scrollbars.
      // UPDATED: Replaced 'bg-bg-base' with explicit light/dark mode background and text colors
      className="relative h-screen flex mt-10 flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-20 w-full max-w-full mx-auto overflow-hidden transition-colors duration-300 bg-white dark:bg-neutral-950 text-zinc-900 dark:text-zinc-50"
    >
      {/* Static Background - Removed scroll-linked y transform */}
      <div className="absolute inset-0 z-0">
        <BackgroundElements />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 flex items-center">
        {/* Added justify-center for mobile so the left content remains vertically centered when right side is hidden */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 w-full h-full">
          {/* LEFT: 100% on mobile/md, 60% on lg */}
          <div className="w-full lg:w-[60%] flex-shrink-0 flex items-center pt-8 lg:pt-0">
            <LeftContent />
          </div>

          {/* RIGHT: 'hidden md:flex' hides it on mobile and shows on medium devices and above */}
          <div className="hidden md:flex w-full lg:w-[40%] h-[40vh] lg:h-[65vh] max-h-[700px] relative items-center justify-center">
            <RightNetwork />
          </div>
        </div>
      </div>

      {/* Bottom Bar Info - Kept the initial load-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-14 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 flex justify-end items-center z-20 pointer-events-none hidden md:flex"
      >
        <div className="flex items-center gap-2 text-[12px] font-medium bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-sm text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for new Backend projects
        </div>
      </motion.div>
    </section>
  );
}
