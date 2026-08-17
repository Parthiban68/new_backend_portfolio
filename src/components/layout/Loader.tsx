import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }: any) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Increment progress by a random amount
        const nextProgress = prev + Math.floor(Math.random() * 12) + 4;
        
        if (nextProgress >= 100) {
          clearInterval(interval);
          // Brief pause at 100% before unmounting for a smooth transition
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 400); 
          return 100;
        }
        return nextProgress;
      });
    }, 150); // Update every 150ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden p-8">
      
      {/* Centered Quote Area */}
      <div className="w-full max-w-3xl flex flex-col justify-center">
        {/* Quote */}
        <h1 className="text-3xl md:text-5xl text-gray-900 font-normal tracking-tight leading-snug mb-4">
          “The journey of a thousand miles <br />begins with one step.”
        </h1>
        
        {/* Author */}
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
          — Lao Tzu
        </p>
      </div>

      {/* Bottom Right Giant Loading Number */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-baseline">
        <span className="text-7xl md:text-9xl lg:text-[140px] font-light text-gray-900 tracking-tighter leading-none tabular-nums">
          {progress}
        </span>
        <span className="text-3xl md:text-5xl lg:text-7xl font-light text-gray-300 ml-1 md:ml-3">
          %
        </span>
      </div>
      
    </div>
  );
};

export default Loader;