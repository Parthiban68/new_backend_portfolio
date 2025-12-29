
import React from 'react';
import { Code2, Users, Database, Globe } from 'lucide-react';

const stats = [
  { value: '15+', label: 'APIs Delivered', icon: <Code2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-4" /> },
  { value: '08+', label: 'Live Projects', icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-4" /> },
  { value: '05+', label: 'Partners', icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-4" /> },
  { value: '1M+', label: 'Records', icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-4" /> },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 sm:p-12 md:p-20 flex flex-col items-center text-center border-x border-black/5 dark:border-white/5 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
            {stat.icon}
            <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tighter text-black dark:text-white transition-colors duration-300">{stat.value}</p>
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black/30 dark:text-white/40 mono transition-colors duration-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
