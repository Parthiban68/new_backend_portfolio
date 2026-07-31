import { motion } from 'motion/react';
import { useMemo } from 'react';

const techStack = [
  "NestJS", "PostgreSQL", "TypeScript", "Redis", 
  "Docker", "AWS", "JWT", "Kafka", 
  "GraphQL", "REST", "gRPC"
];

export default function FloatingTechPills() {
  const pills = useMemo(() => {
    return techStack.map((tech, i) => {
      // distribute them randomly but safely within a radius
      const angle = (i / techStack.length) * Math.PI * 2;
      const radius = 350 + Math.random() * 50;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        tech,
        x,
        y,
        delay: i * 0.2,
        duration: 10 + Math.random() * 5
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none origin-center" style={{ transform: 'translateZ(-20px)' }}>
      {pills.map((pill, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [pill.x * 0.8, pill.x, pill.x * 0.9, pill.x * 1.1, pill.x * 0.8],
            y: [pill.y * 0.8, pill.y * 1.1, pill.y, pill.y * 0.9, pill.y * 0.8],
            opacity: 1
          }}
          transition={{
            duration: pill.duration,
            repeat: Infinity,
            ease: "linear",
            delay: pill.delay
          }}
        >
          <div className="px-3 py-1 bg-white border border-black/10 text-primary text-[10px] font-bold shadow-sm uppercase tracking-wider rounded-full -translate-x-1/2 -translate-y-1/2">
            {pill.tech}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
