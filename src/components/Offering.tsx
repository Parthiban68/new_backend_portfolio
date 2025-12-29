
import React from 'react';
import { Layers, Smartphone, Zap, Activity, Server, Layout, MousePointer2 } from 'lucide-react';

interface OfferingCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: React.ReactNode;
}

const Offering: React.FC = () => {
  const modules = [
    { 
      id: 'ROLE_01', 
      title: 'Full-Stack Developer', 
      specs: 'Node.js / React / PostgreSQL / MERN',
      desc: 'Bridging the gap between complex backend logic and intuitive frontend interfaces. Expertise in end-to-end production-grade deployments and real-time integrations.',
      icon: <Layers className="w-6 h-6" />,
    },
    { 
      id: 'ROLE_02', 
      title: 'Front-End Developer', 
      specs: 'React.js / Tailwind CSS / Three.js',
      desc: 'Crafting high-performance, responsive user interfaces. Focused on cutting page load times by 30% and delivering seamless, accessible digital experiences.',
      icon: <Layout className="w-6 h-6" />,
    },
    { 
      id: 'ROLE_03', 
      title: 'Back-End Developer', 
      specs: 'Node.js / Express / Microservices',
      desc: 'Engineering scalable APIs and secure server-side architectures. Specialized in RSA-based JWT, secure middleware, and database optimization (+40% performance gains).',
      icon: <Server className="w-6 h-6" />,
    },
    { 
      id: 'ROLE_04', 
      title: 'Mobile Developer', 
      specs: 'Flutter / Dart',
      desc: 'Developing cross-platform mobile applications with high-fidelity interactions, ensuring smooth performance and native-like experiences on iOS and Android.',
      icon: <Smartphone className="w-6 h-6" />,
    }
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-40 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
        {/* Left Side: Fixed/Sticky Info */}
        <div className="lg:col-span-5 space-y-8 md:space-y-12 lg:sticky lg:top-48">
          <div className="space-y-4">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-blue-600 mono flex items-center">
              <Zap className="w-4 h-4 mr-2" /> CORE_EXPERTISE.SYS
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl heavy uppercase tracking-tighter text-black dark:text-white leading-[0.85] transition-colors duration-300">PROFESSIONAL <br /> ROLES.</h2>
          </div>
          
          <p className="text-lg md:text-xl text-black/40 dark:text-white/40 font-light leading-relaxed max-w-sm transition-colors duration-300">
            A comprehensive engineering profile focused on <span className="text-black dark:text-white font-bold transition-colors">Performance</span>, <span className="text-black dark:text-white font-bold transition-colors">Security</span>, and <span className="text-black dark:text-white font-bold transition-colors">Scale</span>.
          </p>

          <div className="hidden lg:flex items-center space-x-4 text-[10px] mono text-blue-600 font-bold uppercase tracking-widest animate-pulse">
            <MousePointer2 className="w-4 h-4" />
            <span>Scroll_Right_To_Explore_Modules</span>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
             {['Node.js', 'React', 'Flutter', 'PostgreSQL'].map((tech) => (
               <div key={tech} className="border border-black/10 dark:border-white/10 p-3 md:p-4 text-[9px] md:text-[10px] mono text-black/50 dark:text-white/50 uppercase tracking-widest text-center bg-black/[0.01] dark:bg-white/[0.01]">
                 {tech}
               </div>
             ))}
          </div>
        </div>

        {/* Right Side: Scrollable Module Cards */}
        <div className="lg:col-span-7 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-6 custom-scrollbar space-y-4 md:space-y-6">
          {modules.map((m) => (
            <div key={m.id} className="group relative bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-6 md:p-10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-blue-600/30 transition-all lg:cursor-crosshair">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="p-3 md:p-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 text-black dark:text-white group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all shadow-xl">
{React.cloneElement(
  m.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
  {
    className: "w-5 h-5 md:w-6 md:h-6",
  }
)}

                </div>
                <div className="text-right">
                  <p className="text-[9px] md:text-[10px] font-black mono text-black/20 dark:text-white/20 mb-1">{m.id}</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl heavy uppercase tracking-tight text-black dark:text-white transition-colors duration-300">{m.title}</h3>
                  <p className="text-[9px] md:text-[10px] mono text-blue-600 font-bold uppercase tracking-widest">{m.specs}</p>
                </div>
                <p className="text-black/50 dark:text-white/50 leading-relaxed font-light text-base md:text-lg transition-colors duration-300">
                  {m.desc}
                </p>
                
                <div className="pt-6 md:pt-8 border-t border-black/5 dark:border-white/5 transition-colors duration-300 flex justify-between items-center">
                  <div className="flex items-center space-x-3 text-[9px] md:text-[10px] mono text-black/30 dark:text-white/30">
                    <Activity className="w-3 h-3" />
                    <span>CAPACITY: 100%</span>
                  </div>
                  <div className="text-[9px] md:text-[10px] mono text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    READY_FOR_DEPLOYMENT
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End of list indicator for desktop scroll */}
          <div className="hidden lg:flex justify-center py-10 opacity-20">
             <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-transparent"></div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 102, 255, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 102, 255, 0.5);
        }
        @media (max-width: 1024px) {
          .custom-scrollbar {
            max-height: none !important;
            overflow-y: visible !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Offering;
