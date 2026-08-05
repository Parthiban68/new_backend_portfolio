import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#111111] selection:bg-orange-500 selection:text-white pb-20">
      
      <main className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 space-y-32">
        
        {/* 1. HERO SECTION & BENTO GRID */}
        <section className="text-center space-y-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            Backend Engineer
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Transforming requirements.<br />Building the <span className="italic text-zinc-500">foundation.</span>
          </h1>
          
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            Specializing in enterprise application development. Focused on clean architecture, database design, and building scalable backend services for ERP systems.
          </p>

          {/* Image Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 max-w-5xl mx-auto h-[600px]">
            {/* Main Left Image Placeholder */}
            <div className="rounded-[32px] bg-zinc-200 overflow-hidden h-full">
              <img src="/api/placeholder/800/800" alt="Workspace" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
            </div>
            {/* Stacked Right Images */}
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="rounded-[32px] bg-zinc-200 overflow-hidden">
                <img src="/api/placeholder/800/400" alt="Collaboration" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
              </div>
              <div className="rounded-[32px] bg-zinc-200 overflow-hidden">
                <img src="/api/placeholder/800/400" alt="Architecture" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUOTE SECTION */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-orange-500 text-6xl font-serif leading-none">"</div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
            Good software is created by understanding the problem first. My approach: design the architecture carefully, prioritize database structure, and write maintainable code.
          </h2>
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden">
               <img src="/api/placeholder/100/100" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm">Parthiban</div>
              <div className="text-xs text-zinc-500">Backend Engineer & Team Lead</div>
            </div>
          </div>
        </section>

        {/* 3. MEET THE CORE (4-Column Layout) */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                Capabilities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Core Expertise</h2>
            </div>
            <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
              I specialize in the backend foundation. From relational PostgreSQL modeling to secure JWT authentication flows, every module is designed for long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "REST APIs", role: "Node.js & NestJS", img: "/api/placeholder/300/300" },
              { title: "System Auth", role: "JWT & RBAC", img: "/api/placeholder/300/300" },
              { title: "Enterprise ERP", role: "Accounting & Payroll", img: "/api/placeholder/300/300" },
              { title: "Database Design", role: "PostgreSQL Schemas", img: "/api/placeholder/300/300" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[24px] p-4 shadow-sm border border-zinc-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform">
                <div className="w-full aspect-square rounded-[16px] bg-zinc-100 mb-6 overflow-hidden">
                   <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-zinc-500 text-sm mt-1 mb-2">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE LEDGER (List/Table Layout) */}
        <section className="space-y-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ledger</h2>

          <div className="mt-8">
            <div className="flex text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-4 px-2">
              <div className="w-1/3">Company & Role</div>
              <div className="w-1/2">Impact</div>
              <div className="w-1/6 text-right">Year</div>
            </div>
            
            {[
              { name: "Nubiznez Pvt Ltd — Backend Team Lead", desc: "Leading backend architecture, code reviews, and technical discussions for enterprise ERP software.", year: "2025-Present" },
              { name: "Nubiznez Pvt Ltd — Backend Engineer", desc: "Built scalable REST APIs and PostgreSQL schemas for Accounting, Payroll, and Inventory modules.", year: "2025-Present" },
              { name: "Core Systems — Backend Developer", desc: "Implemented secure JWT authentication, RBAC, and automated business reporting workflows.", year: "2024-2025" },
            ].map((award, i) => (
              <div key={i} className="flex items-center text-sm md:text-base border-b border-zinc-200 py-6 px-2 hover:bg-white transition-colors rounded-xl">
                <div className="w-1/3 font-bold">{award.name}</div>
                <div className="w-1/2 text-zinc-500">{award.desc}</div>
                <div className="w-1/6 text-right font-medium">{award.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. METRICS & TESTIMONIALS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white rounded-[32px] p-10 shadow-sm border border-zinc-100 flex flex-col justify-between">
            <div>
              <div className="text-6xl font-bold tracking-tighter mb-4">1.5+ <span className="text-2xl text-zinc-400 block mt-2">Years Experience</span></div>
              <div className="w-6 h-1 bg-orange-500 rounded-full mb-6"></div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Focused on building secure, modular, and scalable backend architectures for enterprise ERP systems and multi-tenant SaaS platforms using Node.js and PostgreSQL.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-8">
               <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
               <div>
                 <div className="text-xs font-bold">Track Record</div>
                 <div className="text-xs text-zinc-400">Enterprise Backend</div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-zinc-100 flex flex-col justify-between">
              <p className="text-sm text-zinc-600 leading-relaxed italic mb-8">
                "Database design is the foundation of every backend application. Get the schema wrong, and scaling the system becomes impossible as the business grows."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                 <div>
                   <div className="text-xs font-bold">Data Modeling</div>
                   <div className="text-xs text-zinc-400">Core Principle</div>
                 </div>
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-zinc-100 flex flex-col justify-between">
              <p className="text-sm text-zinc-600 leading-relaxed italic mb-8">
                "Architecture before implementation. I focus on writing reusable, modular, and maintainable backend services that solve real engineering problems."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-zinc-200"></div>
                 <div>
                   <div className="text-xs font-bold">Clean Architecture</div>
                   <div className="text-xs text-zinc-400">Core Principle</div>
                 </div>
              </div>
            </div>
          </div>
        </section>

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
        <section className="bg-zinc-100/50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Current Focus &<br/>Future Vision.</h2>
            <p className="text-zinc-500 text-sm mb-12">
              Constantly studying software architecture and system design to improve my engineering decisions.
            </p>
            <div className="bg-white p-6 rounded-[24px] shadow-sm flex flex-col gap-4">
              <div className="font-bold">Looking to collaborate?</div>
              <p className="text-xs text-zinc-500">Reach out to discuss enterprise backend development.</p>
              <button className="self-start text-xs font-bold uppercase tracking-widest border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-50">
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-2">
            {[
              "I specialize in Node.js, NestJS, TypeScript, and Express.",
              "I prioritize PostgreSQL with optimized relational schemas.",
              "Deep diving into Docker, Redis, AWS, and distributed systems.",
              "My goal is to become a Software Architect for enterprise SaaS.",
              "I implement robust JWT authentication and RBAC by default."
            ].map((q, i) => (
              <div key={i} className="border-b border-zinc-200 py-6 flex justify-between items-center group cursor-pointer hover:pl-2 transition-all">
                <span className="font-bold text-sm">{q}</span>
                <span className="text-zinc-400 group-hover:text-black">+</span>
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