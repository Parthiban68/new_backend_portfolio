
import React from 'react';
import { Terminal, Box, Cpu, ShieldCheck, MessageSquare, Database, MousePointer2 } from 'lucide-react';

const Experience: React.FC = () => {
  const achievements = [
    {
      title: "Core Backend (TBS_WEB)",
      icon: <Cpu className="w-4 h-4" />,
      desc: "Architected RESTful APIs and optimized SQL patterns, resulting in a 40% overall system performance increase.",
      stats: "25% Latency Cut"
    },
    {
      title: "Real-time Notification",
      icon: <MessageSquare className="w-4 h-4" />,
      desc: "Engineered a bridge between Firebase and WhatsApp services to automate PDF ticketing delivery.",
      stats: "70% Delivery"
    },
    {
      title: "Production Security",
      icon: <ShieldCheck className="w-4 h-4" />,
      desc: "Implemented RSA-based JWT authentication and Winston logging for audit-ready reliability.",
      stats: "Zero-Trust"
    },
    {
      title: "Frontend Experience",
      icon: <Box className="w-4 h-4" />,
      desc: "Refactored legacy UI using React and Tailwind CSS, focusing on atomic design and efficient state.",
      stats: "30% Page Speed"
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-black py-24 md:py-40 border-y border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none transition-opacity duration-300">
        <div className="text-[100px] md:text-[180px] font-black mono text-black dark:text-white absolute top-0 left-0 leading-none select-none rotate-90 origin-top-left -translate-y-10 md:-translate-y-20">LOGS</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12 mb-20 md:mb-32">
          <div className="space-y-4 max-w-2xl">
            <div className="text-blue-600 mono text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] flex items-center">
              <Terminal className="w-4 h-4 mr-2" /> KERNEL_HISTORY.LOG
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl heavy uppercase tracking-tighter text-black dark:text-white leading-[0.8] transition-colors duration-300">
              PROFESSIONAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black dark:to-white">ENGINEERING.</span>
            </h2>
          </div>
          
          <div className="w-full md:w-fit bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 md:p-8 flex flex-col justify-between transition-colors duration-300">
            <div className="space-y-1 mb-6 md:mb-8">
              <span className="text-[9px] md:text-[10px] mono text-black/30 dark:text-white/30 uppercase tracking-widest">CURRENT_ASSIGNMENT</span>
              <p className="text-xl md:text-2xl font-black text-black dark:text-white transition-colors duration-300 uppercase">NUBIZNEZ PVT LTD.</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] md:text-[10px] mono text-green-600 dark:text-green-500 font-bold uppercase">System_Active_Since_2025</span>
            </div>
          </div>
        </div>

        {/* Main Experience Block with Split Scroll */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Sidebar: Fixed/Sticky Info */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12 lg:sticky lg:top-48">
            <div className="space-y-6">
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 flex items-center justify-center text-white shadow-xl">
                   <Box className="w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                   <p className="text-[9px] md:text-[10px] mono text-black/40 dark:text-white/40 uppercase">Role</p>
                   <p className="text-lg md:text-xl font-black text-black dark:text-white transition-colors uppercase">Full Stack Dev</p>
                 </div>
               </div>
               
               <div className="p-5 md:p-6 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] space-y-4">
                 <p className="text-[9px] md:text-[10px] mono text-blue-600 font-bold uppercase tracking-widest">STACK_SNAPSHOT</p>
                 <div className="flex flex-wrap gap-1.5 md:gap-2">
                   {['Node.js', 'Express', 'Postgres', 'React', 'Firebase'].map(tech => (
                     <span key={tech} className="text-[8px] md:text-[9px] mono px-2 py-1 bg-white dark:bg-black border border-black/5 dark:border-white/5 text-black/50 dark:text-white/50">{tech}</span>
                   ))}
                 </div>
               </div>
            </div>

            <div className="hidden lg:block space-y-4 pt-12 border-t border-black/5 dark:border-white/5">
              <p className="text-xs font-black mono text-black/20 dark:text-white/20 uppercase tracking-[0.4em]">MISSION</p>
              <p className="text-lg text-black/60 dark:text-white/60 font-light leading-relaxed">
                "Developing production-grade solutions for high-concurrency environments, ensuring 99.9% uptime."
              </p>
            </div>
          </div>

          {/* Right Content: Scrollable Achievement Modules */}
          <div className="lg:col-span-8 lg:max-h-[85vh] lg:overflow-y-auto lg:pr-6 custom-scrollbar space-y-4">
            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="group relative bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 p-6 md:p-8 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:border-blue-600/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-6">
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="text-blue-600 bg-blue-600/10 p-2 border border-blue-600/20">
                          {item.icon}
                        </div>
                        <h4 className="text-lg md:text-xl font-black text-black dark:text-white uppercase tracking-tight transition-colors duration-300">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs md:text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-xl mono">
                        {item.desc}
                      </p>
                    </div>
                    
                    <div className="sm:text-right flex flex-col justify-end space-y-0.5 md:space-y-1">
                      <span className="text-[8px] md:text-[9px] mono text-black/20 dark:text-white/20 uppercase tracking-widest">KPI</span>
                      <span className="text-xl md:text-2xl font-black text-blue-600 mono whitespace-nowrap">{item.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-Tenure Context */}
            <div className="p-6 md:p-10 bg-black dark:bg-blue-900/10 border border-black/5 dark:border-blue-500/20 transition-colors">
               <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Database className="w-6 h-6 md:w-8 md:h-8 text-blue-600 shrink-0" />
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-[9px] md:text-[10px] mono text-blue-600 font-bold uppercase tracking-widest">Architectural_Impact // TBS_CRM</p>
                    <p className="text-xs md:text-sm text-white/70 dark:text-white/50 mono leading-relaxed">
                      Enabled 70% faster customer updates by streamlining the data pipe between the core ticketing engine and external notification services.
                    </p>
                  </div>
               </div>
            </div>

            <div className="hidden lg:block h-20"></div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 102, 255, 0.2); }
        @media (max-width: 1024px) {
          .custom-scrollbar { max-height: none !important; overflow-y: visible !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
