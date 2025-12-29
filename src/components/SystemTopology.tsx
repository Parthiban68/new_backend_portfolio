
import React from 'react';
import { ShieldCheck, Cpu, MessageSquare, Smartphone, Database, Share2 } from 'lucide-react';

const SystemTopology: React.FC = () => {
  const infrastructure = [
    { 
      id: 'CLIENT_ENTRY', 
      icon: <Smartphone className="w-5 h-5" />, 
      label: 'ACCESS_GATE', 
      sub: 'React / Flutter',
      tags: ['HTTPS', 'WSS'],
    },
    { 
      id: 'SECURITY_MESH', 
      icon: <ShieldCheck className="w-5 h-5" />, 
      label: 'SEC_LAYER', 
      sub: 'RSA-256 / JWT',
      tags: ['Rate_Limit', 'CORS'],
    },
    { 
      id: 'CORE_ENGINE', 
      icon: <Cpu className="w-5 h-5" />, 
      label: 'NEST_CORE', 
      sub: 'Ticketing Engine',
      tags: ['Micro', 'Winston'],
    },
    { 
      id: 'NOTIFICATION_BRIDGE', 
      icon: <MessageSquare className="w-5 h-5" />, 
      label: 'ASYNC_BR', 
      sub: 'WA / Firebase',
      tags: ['PDF', 'Push'],
    },
    { 
      id: 'DATA_WAREHOUSE', 
      icon: <Database className="w-5 h-5" />, 
      label: 'POLY_STORE', 
      sub: 'PG / Redis',
      tags: ['ACID', 'Cache'],
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 md:gap-8">
          <div className="space-y-4 max-w-2xl">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-blue-600 mono flex items-center">
              <Share2 className="w-4 h-4 mr-2" /> INFRA_SCHEMA_v2.5
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl heavy uppercase tracking-tighter text-black dark:text-white leading-[0.85] transition-colors duration-300">SYSTEM <br /> ARCHITECTURE.</h2>
          </div>
          <div className="hidden lg:block pb-2">
            <p className="text-right text-[10px] mono text-black/30 dark:text-white/30 uppercase leading-relaxed max-w-[240px]">
              Visualizing the data lifecycle of TBS_CRM.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Animated Background Connection Map - Hidden on small screens for clarity */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-10 transition-opacity hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" className="stroke-black dark:stroke-white fill-none">
              <path d="M50,200 L1150,200" strokeWidth="1" />
              <path d="M240,200 L240,100 L960,100 L960,200" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 relative z-10">
            {infrastructure.map((node, i) => (
              <div key={node.id} className="group flex flex-col items-center">
                <div className="w-full bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 p-6 md:p-8 hover:bg-white dark:hover:bg-black hover:border-blue-600/30 transition-all duration-500 relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-black/5 dark:bg-white/5 overflow-hidden">
                    <div className="h-full bg-blue-600 w-1/3 animate-[loading_3s_infinite_ease-in-out]"></div>
                  </div>

                  <div className="flex flex-col items-center space-y-4 md:space-y-6">
                    <div className="p-3 md:p-4 bg-black dark:bg-white text-white dark:text-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                      {node.icon}
                    </div>

                    <div className="text-center space-y-2">
                      <p className="text-[10px] md:text-xs font-black mono text-black dark:text-white uppercase transition-colors">{node.label}</p>
                      <p className="text-[8px] md:text-[10px] mono text-black/40 dark:text-white/40 uppercase tracking-widest">{node.sub}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1">
                      {node.tags.map(tag => (
                        <span key={tag} className="text-[7px] mono px-2 py-0.5 border border-black/5 dark:border-white/5 text-black/30 dark:text-white/30 uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 md:mt-8 flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                     <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[8px] mono text-black/20 dark:text-white/20 uppercase">STABLE</span>
                     </div>
                     <span className="text-[8px] mono text-blue-600 font-bold">0.02ms</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Deep Dive Annotations */}
        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 border-t border-black/5 dark:border-white/5 pt-12 md:pt-16">
           <div className="space-y-4">
              <div className="text-blue-600 mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">01 // SECURITY</div>
              <p className="text-xs md:text-sm text-black/50 dark:text-white/50 mono leading-relaxed">
                Asymmetric RSA-256 JWT signing for hardened microservice auth.
              </p>
           </div>
           <div className="space-y-4">
              <div className="text-orange-600 mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">02 // MESSAGING</div>
              <p className="text-xs md:text-sm text-black/50 dark:text-white/50 mono leading-relaxed">
                Redis-backed notification pipes for multi-channel PDF delivery.
              </p>
           </div>
           <div className="space-y-4">
              <div className="text-green-600 mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em]">03 // STORAGE</div>
              <p className="text-xs md:text-sm text-black/50 dark:text-white/50 mono leading-relaxed">
                Transactional PG integrity paired with sub-ms Redis caching.
              </p>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default SystemTopology;
