import React from "react";
import AboutHero from "../features/about/AboutHero"
import EducationTimeline from "../features/about/EducationTimeline"
import ExperienceTimeline from "../features/about/ExperienceTimeline"


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

        {/* 6. COMPARISON: WHY WORK WITH ME? */}
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Mindset
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Engineering Approach.</h2>
          </div>

          <div className="bg-white rounded-[40px] shadow-sm border border-zinc-100 overflow-hidden flex flex-col md:flex-row p-4">
            {/* Left Column */}
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-zinc-100">
              <h3 className="flex items-center justify-center gap-2 font-bold mb-8 text-zinc-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Typical Development
              </h3>
              <ul className="space-y-6 text-sm text-zinc-500 font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Complex over simple solutions</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Duplicated logic across services</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Implementation without planning</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> Security as an afterthought</li>
              </ul>
            </div>
            {/* Right Column */}
            <div className="flex-1 p-8 bg-[#FAFAFA] rounded-[32px]">
               <h3 className="flex items-center justify-center gap-2 font-bold mb-8">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                My Approach
              </h3>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Architecture before implementation</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Database-first thinking</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Reusable, modular backend services</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Security by default (JWT, RBAC)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. FAQ BLOCK */}
       <section className="bg-zinc-100/50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-32">
  <div className="md:w-1/3 ">
    <h2 className="text-3xl font-bold tracking-tight mb-4">
      Current Focus &<br />Future Vision.
    </h2>
    <p className="text-zinc-500 text-sm mb-12">
      Constantly studying software architecture and system design to improve my engineering decisions.
    </p>
    <div className="bg-white p-6 rounded-[24px] shadow-sm flex flex-col gap-4">
      <div className="font-bold">Looking to collaborate?</div>
      <p className="text-xs text-zinc-500">
        Reach out to discuss enterprise backend development.
      </p>
      <button className="self-start text-xs font-bold uppercase tracking-widest border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-50 transition-colors">
        Contact Me
      </button>
    </div>
  </div>
  
  <div className="md:w-2/3 flex flex-col justify-center">
    {[
      "I specialize in Node.js, NestJS, TypeScript, and Express.",
      "I prioritize PostgreSQL with optimized relational schemas.",
      "Deep diving into Docker, Redis, AWS, and distributed systems.",
      "My goal is to become a Software Architect for enterprise SaaS.",
      "I implement robust JWT authentication and RBAC by default."
    ].map((q, i) => (
      <div 
        key={i} 
        className="border-b border-zinc-200 py-6 last:border-0 flex items-center"
      >
        <span className="font-medium text-sm md:text-base text-zinc-800 leading-relaxed">
          {q}
        </span>
      </div>
    ))}
  </div>
</section>

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