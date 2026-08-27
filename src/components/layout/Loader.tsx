import { useState, useEffect } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = prev < 60 ? Math.floor(Math.random() * 15) + 8 : Math.floor(Math.random() * 8) + 3;
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 250);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#020202] overflow-hidden p-8 transition-colors duration-300">
      <div className="w-full max-w-3xl flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white font-normal tracking-tight leading-snug mb-4">
          "The journey of a thousand miles <br />begins with one step."
        </h1>
        <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
          — Lao Tzu
        </p>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-baseline">
        <span className="text-7xl md:text-9xl lg:text-[140px] font-light text-gray-900 dark:text-white tracking-tighter leading-none tabular-nums">
          {progress}
        </span>
        <span className="text-3xl md:text-5xl lg:text-7xl font-light text-gray-300 dark:text-gray-600 ml-1 md:ml-3">
          %
        </span>
      </div>
    </div>
  );
};

export default Loader;
