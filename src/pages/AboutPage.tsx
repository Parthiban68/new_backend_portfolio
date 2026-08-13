import React from "react";
import AboutHero from "../features/about/AboutHero"
import EducationTimeline from "../features/about/EducationTimeline"
import ExperienceTimeline from "../features/about/ExperienceTimeline"
import GrabMyResume from "../features/about/GrabMyResume"


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfd] dark:bg-neutral-950 text-[#111111] dark:text-white selection:bg-orange-500 selection:text-white pb-20">
      
      <main className=" mx-auto px-6 pt-20">
        
        {/* 1. HERO SECTION & BENTO GRID */}
       <AboutHero/>

        {/* 2. QUOTE SECTION */}
        <section className="max-w-4xl mx-auto text-center ">
          <div className="text-orange-500 text-6xl font-serif leading-none">"</div>

          <blockquote className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
          "Bad programmers worry about the code. Good programmers worry about data structures and their relationships."
          </blockquote>

          <div className="flex items-center justify-center gap-4 pt-6 ">
            <img
              src="https://images.openai.com/static-rsc-4/B4vKVl0UzVhk7VaH6Bp6k_HefERCj7J6-dI0juWMiIoGVfLfVGy4FPzp3nBImc5QR_HVz_XoGHF4iOuIrtS8-3OfTcZ8HvWyJcQJZu21vnYENPMBXFaMzcmP2O9xeehvDOQ-XXUKSTzKoN3b-fLBFH4zQZg6Vl4GhpMgDlt5xSs?purpose=inline"
              alt="Martin Fowler"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="text-left">
              <div className="font-bold text-sm">Linus Torvalds</div>
              <div className="text-xs text-zinc-500">
              Creator of Linux and Git
              </div>
            </div>
          </div>
        </section>

        <EducationTimeline/>
        <ExperienceTimeline/>
        <GrabMyResume/>


        {/* 8. CTA & FOOTER */}
        <section className="relative text-center py-32 overflow-hidden flex flex-col items-center justify-center">
          {/* Faded Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h1 className="text-[12rem] md:text-[20rem] font-black tracking-tighter text-zinc-900 leading-none">
              BACKEND
            </h1>
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Scale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Building scalable systems<br/>for enterprise growth
            </h2>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
              If you are developing enterprise ERP software and need maintainable backend engineering, let's connect.
            </p>
            <button className="bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-zinc-800 transition">
              Get in Touch <span className="ml-2">→</span>
            </button>
          </div>
        </section>

      </main>

      {/* Actual Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#111111] rounded-full flex items-center justify-center">
             <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          <span className="text-black font-bold text-base">Parthiban.</span>
        </div>
        <div>© 2026 Parthiban. Backend Engineer.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition">LinkedIn</a>
          <a href="#" className="hover:text-black transition">GitHub</a>
          <a href="#" className="hover:text-black transition">Twitter</a>
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;