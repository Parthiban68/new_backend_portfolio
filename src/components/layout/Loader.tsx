import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete } : any) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full max-w-2xl px-8 flex flex-col justify-center">
        
        {/* Quote */}
        <h1 className="text-3xl md:text-4xl text-gray-900 font-normal tracking-tight leading-snug mb-4">
          “The journey of a thousand miles begins with one step.”
        </h1>
        
        {/* Author */}
        <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-12">
          — Lao Tzu
        </p>

        {/* Progress Bar Track */}
        <div className="relative w-full h-[2px] bg-gray-100">
          {/* Progress Bar Fill */}
          <div
            className="absolute top-0 left-0 h-full bg-emerald-400 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Labels */}
        <div className="flex justify-between items-center mt-3 text-[10px] text-gray-400 uppercase tracking-widest">
          <span>Loading</span>
          <span>{progress}%</span>
        </div>
        
      </div>
    </div>
  );
};

export default Loader;