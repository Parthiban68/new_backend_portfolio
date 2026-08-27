import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
// import NetworkNode from './NetworkNode';
import FloatingTechPills from "./FloatingTechPills";
import image from "../../../../assets/new_5.png";

export default function RightNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Mouse tracking for 3D rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [15, -15]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    // const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    // mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full perspective-[200px] flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full absolute inset-0 flex items-center justify-center"
      >
        {/* <FloatingTechPills /> */}

        {/* Central Card Image Node */}
        <div
          className="absolute z-40 flex items-center justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            className={`h-full max-h-[800px] aspect-[2/3] rounded-2xl bg-transparent p-2.5 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
              activeNode === "gateway"
                ? "ring-4 ring-zinc-900 dark:ring-zinc-100"
                : "hover:scale-105"
            }`}
            // onClick={() =>
            //   setActiveNode(activeNode === "gateway" ? null : "gateway")
            // }
            initial={{ scale: 0, rotateZ: -2 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <div className="h-full w-full rounded-xl overflow-hidden flex items-center bg-transparent justify-center">
              <img
                src={image}
                alt="Profile Center Node"
                width={300}
                height={400}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
