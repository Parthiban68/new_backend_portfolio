import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
    text: ['0101', '1101', 'GET /api/v1/health', 'POST /auth', '200 OK', '1010'][Math.floor(Math.random() * 6)],
  }));
};

export default function BackgroundElements() {
  const [particles, setParticles] = useState<{id: number, x: number, y: number, duration: number, delay: number, text: string}[]>([]);

  useEffect(() => {
    setParticles(generateParticles(20));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.03),transparent_50%)]" />

      {/* Engineering Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Animated SVG Lines (Topology hint) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05]">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <motion.path 
            d="M-100 400 Q 250 150 500 400 T 1100 400" 
            fill="none" 
            stroke="#111" 
            strokeWidth="0.5" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100 500 Q 300 250 600 500 T 1100 500" 
            fill="none" 
            stroke="#111" 
            strokeWidth="0.5" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path 
            d="M-100 600 Q 350 350 700 600 T 1100 600" 
            fill="none" 
            stroke="#111" 
            strokeWidth="0.5" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-[10px] font-mono text-primary/10 whitespace-nowrap uppercase tracking-tighter"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        >
          {p.text}
        </motion.div>
      ))}
    </div>
  );
}
