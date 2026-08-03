import React from 'react';

const HomeAbout = () => {
  return (
    <section className="min-h-screen bg-[#fcfcfd]">
      {/* Main Container */}
      <div className="max-w-full w-full relative z-10 bg-white/60 backdrop-blur-sm rounded-[3rem] p-16 shadow-[0_12px_40px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">BEYOND THE SCREEN</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-950 leading-[1.05] mb-8 tracking-tight">
            Designing with Purpose.
          </h2>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            I’m Sreedev, a product designer focused on creating digital products that feel simple, purposeful, and visually refined. I enjoy transforming early concepts into intuitive user flows and polished interfaces, with every design decision shaped by clarity, usability, and real user needs.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Button Design updated to a minimalist outline button */}
            <button className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-full text-base font-semibold text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
              Read my story
              <svg 
                className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2.5 text-base text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to execution-driven opportunities
            </div>
          </div>
        </div>

        {/* Right Column - Stats Flex (Replacing Grid) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="flex items-center gap-10 md:gap-16 text-center">
            
            {/* Stat Column 1 */}
            <div className="flex flex-col items-center">
              <h3 className="text-7xl md:text-8xl lg:text-[130px] font-bold text-gray-950 mb-2.5 tracking-tight">03</h3>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-[0.2em] leading-tight">
                YEARS OF<br/>EXPLORATION
              </p>
            </div>

            {/* Vertical Divider 1 */}
            <div className="h-32 lg:h-44 w-px bg-gray-200"></div>

            {/* Stat Column 2 */}
            <div className="flex flex-col items-center">
              <h3 className="text-7xl md:text-8xl lg:text-[130px] font-bold text-gray-950 mb-2.5 tracking-tight">25</h3>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-[0.2em] leading-tight">
                DIGITAL<br/>EXPERIENCES
              </p>
            </div>

            {/* Vertical Divider 2 */}
            <div className="h-32 lg:h-44 w-px bg-gray-200"></div>

            {/* Stat Column 3 */}
            <div className="flex flex-col items-center">
              <h3 className="text-7xl md:text-8xl lg:text-[130px] font-bold text-gray-950 mb-2.5 tracking-tight">02</h3>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-[0.2em] leading-tight">
                PRODUCTS<br/>LAUNCHED
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;