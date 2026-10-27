import { useRef } from "react";
import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import image from "../../../../assets/new_5.png";

const springConfig = { damping: 30, stiffness: 100, mass: 1.2 };

export default function RightNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || shouldReduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      data-hero-media
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[min(54vh,560px)] aspect-[2/3] items-center justify-center [perspective:1200px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[30px] border border-emerald-500/25"
      />

      <span className="absolute -left-8 top-14 hidden rounded-full border border-black/10 bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-black/55 shadow-sm backdrop-blur xl:block">
        NestJS
      </span>
      <span className="absolute -right-5 top-8 hidden rounded-full border border-black/10 bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-black/55 shadow-sm backdrop-blur xl:block">
        AWS
      </span>
      <span className="absolute -right-7 bottom-16 hidden rounded-full border border-black/10 bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-black/55 shadow-sm backdrop-blur xl:block">
        PostgreSQL
      </span>

      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full overflow-hidden rounded-[28px] border border-black/10 bg-[#12100c] shadow-[0_35px_80px_rgba(18,16,12,0.24)]"
      >
        <img
          src={image}
          alt="Portrait of Parthiban"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <p className="font-display text-[15px] font-medium text-white">
              Parthiban M
            </p>
            <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.24em] text-white/55">
              Backend Engineer
            </p>
          </div>
          <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
        </div>
      </motion.div>
    </div>
  );
}
