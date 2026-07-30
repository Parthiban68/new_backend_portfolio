import { motion } from 'motion/react';
import { Database, Server, Settings, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

interface NetworkNodeProps {
  id: string;
  label: string;
  isCenter?: boolean;
  active: boolean;
  stack?: string;
  color?: string;
  onClick: () => void;
}

export default function NetworkNode({ id, label, isCenter, active, stack, color, onClick }: NetworkNodeProps) {
  if (isCenter) {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-20 group cursor-pointer outline-none -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute -inset-8 bg-black/5 blur-3xl rounded-full" />
        <div className={cn(
          "w-32 h-32 bg-white border border-black/10 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-all duration-500",
          active ? "rotate-0 shadow-[0_0_30px_rgba(0,0,0,0.1)] border-primary" : "rotate-[15deg]"
        )}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Central</span>
          <span className="text-[16px] font-black tracking-tight text-primary">API GW</span>
          <div className="mt-3 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-30"></div>
          </div>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        boxShadow: active ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 10px rgba(0,0,0,0.02)',
        borderColor: active ? '#111111' : 'rgba(0,0,0,0.05)'
      }}
      className={cn(
        "relative flex flex-col -translate-x-1/2 -translate-y-1/2 cursor-pointer outline-none text-left",
        "w-36 p-4 bg-white backdrop-blur-md rounded-2xl border transition-colors duration-300 z-10 shadow-sm"
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={cn("w-1.5 h-1.5 rounded-full", color || "bg-primary")}></div>
        <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">{label}</span>
      </div>
      <div className="text-[12px] font-medium text-primary line-clamp-1 truncate w-full">{stack}</div>
      <div className="mt-2 h-1 w-full bg-black/5 rounded-full overflow-hidden flex">
        {/* Animated mock progress bar matching the color */}
        <motion.div 
          className={cn("h-full", color || "bg-primary")} 
          initial={{ width: "30%" }}
          animate={{ width: active ? "90%" : "60%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.button>
  );
}
