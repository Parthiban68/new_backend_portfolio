// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
// // import NetworkNode from './NetworkNode';
// import FloatingTechPills from './FloatingTechPills';

// const services = [
//   { id: 'auth', label: 'Auth', stack: 'JWT / OAuth 2.0', db: 'Redis', angle: 0, distance: 220, color: 'bg-primary' },
//   { id: 'accounting', label: 'Accounting', stack: 'NestJS / CQRS', db: 'PostgreSQL', angle: 45, distance: 260, color: 'bg-secondary' },
//   { id: 'users', label: 'Users', stack: 'PostgreSQL / RBAC', db: 'PostgreSQL', angle: 90, distance: 200, color: 'bg-primary' },
//   { id: 'payments', label: 'Payments', stack: 'Stripe / Ledger', db: 'Ledger', angle: 135, distance: 250, color: 'bg-secondary' },
//   { id: 'notifications', label: 'Notifications', stack: 'WebSockets', db: 'Kafka', angle: 180, distance: 230, color: 'bg-primary' },
//   { id: 'reports', label: 'Reports', stack: 'Workers', db: 'ClickHouse', angle: 225, distance: 270, color: 'bg-secondary' },
//   { id: 'inventory', label: 'Inventory', stack: 'gRPC', db: 'PostgreSQL', angle: 270, distance: 210, color: 'bg-primary' },
//   { id: 'analytics', label: 'Analytics', stack: 'Clickhouse / OLAP', db: 'MongoDB', angle: 315, distance: 240, color: 'bg-secondary' },
// ];

// export default function RightNetwork() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeNode, setActiveNode] = useState<string | null>(null);
  
//   // Mouse tracking for 3D rotation
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
//   const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
//   const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     mouseX.set(x);
//     mouseY.set(y);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   // Packets animation state
//   const [packets, setPackets] = useState<{id: string, from: string, to: string, progress: number}[]>([]);

//   useEffect(() => {
//     // Generate random packets between gateway and services
//     const interval = setInterval(() => {
//       const service = services[Math.floor(Math.random() * services.length)];
//       const isIngress = Math.random() > 0.5;
      
//       const newPacket = {
//         id: Math.random().toString(36).substr(2, 9),
//         from: isIngress ? 'gateway' : service.id,
//         to: isIngress ? service.id : 'gateway',
//         progress: 0
//       };
      
//       setPackets(prev => [...prev.slice(-15), newPacket]);
//     }, 400); // New packet every 400ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="w-full h-full perspective-[1200px] flex items-center justify-center relative"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="absolute top-4 right-4 md:top-8 md:right-8 text-[10px] font-bold text-secondary uppercase tracking-widest bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 z-30 pointer-events-none">
//         Interactive Architecture Portfolio
//       </div>
//       <motion.div 
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className="w-full h-full absolute inset-0 flex items-center justify-center"
//       >
//         <FloatingTechPills />

//         {/* Central API Gateway */}
//         {/* <NetworkNode 
//           id="gateway"
//           label="API Gateway"
//           isCenter
//           active={activeNode === 'gateway'}
//           onClick={() => setActiveNode(activeNode === 'gateway' ? null : 'gateway')}
//         /> */}

//         {/* Connection Lines (SVG) */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(-1px)' }}>
//           <defs>
//             <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#111111" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#111111" stopOpacity="0.05" />
//             </linearGradient>
//           </defs>
//           <g className="origin-center" transform="translate(50% 50%)">
//             {services.map((service) => {
//               const rad = (service.angle * Math.PI) / 180;
//               const x2 = Math.cos(rad) * service.distance;
//               const y2 = Math.sin(rad) * service.distance;
//               const isActive = activeNode === service.id || activeNode === 'gateway';

//               return (
//                 <motion.line
//                   key={`line-${service.id}`}
//                   x1="0"
//                   y1="0"
//                   x2={x2}
//                   y2={y2}
//                   stroke={isActive ? "#111111" : "url(#lineGrad)"}
//                   strokeWidth={isActive ? 1.5 : 1}
//                   className="transition-colors duration-500"
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
//                 />
//               );
//             })}
//           </g>
//         </svg>

//         {/* Satellite Microservices */}
//         {services.map((service, index) => {
//           const rad = (service.angle * Math.PI) / 180;
//           const x = Math.cos(rad) * service.distance;
//           const y = Math.sin(rad) * service.distance;

//           return (
//             <motion.div
//               key={service.id}
//               className="absolute"
//               style={{ x, y, transformStyle: "preserve-3d" }}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//             >
//               {/* <NetworkNode 
//                 id={service.id}
//                 label={service.label}
//                 active={activeNode === service.id}
//                 onClick={() => setActiveNode(activeNode === service.id ? null : service.id)}
//                 stack={service.stack}
//                 color={service.color}
//               /> */}
              
//               {/* Floating Info Panel */}
//               <AnimatePresence>
//                 {activeNode === service.id && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10, scale: 0.9 }}
//                     animate={{ opacity: 1, y: -90, scale: 1 }}
//                     exit={{ opacity: 0, y: 10, scale: 0.9 }}
//                     className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-xl border border-black/10 rounded-xl p-3 shadow-xl z-50 pointer-events-none"
//                     style={{ transform: "translateZ(30px)" }}
//                   >
//                     <div className="text-xs font-semibold text-primary mb-1">{service.label} Panel</div>
//                     <div className="text-[10px] text-secondary flex flex-col gap-1">
//                       <div className="flex justify-between"><span>Stack:</span> <span className="font-medium text-primary">{service.stack}</span></div>
//                       <div className="flex justify-between"><span>Database:</span> <span className="font-medium text-primary">{service.db}</span></div>
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           );
//         })}

//         {/* Packets (Data traversing) */}
//         {packets.map(packet => {
//           // Determine path
//           const isIngress = packet.from === 'gateway';
//           const targetId = isIngress ? packet.to : packet.from;
//           const service = services.find(s => s.id === targetId);
//           if (!service) return null;
          
//           const rad = (service.angle * Math.PI) / 180;
//           const startX = isIngress ? 0 : Math.cos(rad) * service.distance;
//           const startY = isIngress ? 0 : Math.sin(rad) * service.distance;
//           const endX = isIngress ? Math.cos(rad) * service.distance : 0;
//           const endY = isIngress ? Math.sin(rad) * service.distance : 0;

//           return (
//             <motion.div
//               key={packet.id}
//               className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(0,0,0,0.5)]"
//               initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
//               animate={{ x: endX, y: endY, opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
//               transition={{ duration: 1.2, ease: "linear" }}
//               onAnimationComplete={() => setPackets(prev => prev.filter(p => p.id !== packet.id))}
//             />
//           );
//         })}

//       </motion.div>
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
// import NetworkNode from './NetworkNode';
import FloatingTechPills from './FloatingTechPills';
import image from "../../assets/new_5.png"

const services = [
  { id: 'auth', label: 'Auth', stack: 'JWT / OAuth 2.0', db: 'Redis', angle: 0, distance: 220, color: 'bg-primary' },
  { id: 'accounting', label: 'Accounting', stack: 'NestJS / CQRS', db: 'PostgreSQL', angle: 45, distance: 260, color: 'bg-secondary' },
  { id: 'users', label: 'Users', stack: 'PostgreSQL / RBAC', db: 'PostgreSQL', angle: 90, distance: 200, color: 'bg-primary' },
  { id: 'payments', label: 'Payments', stack: 'Stripe / Ledger', db: 'Ledger', angle: 135, distance: 250, color: 'bg-secondary' },
  { id: 'notifications', label: 'Notifications', stack: 'WebSockets', db: 'Kafka', angle: 180, distance: 230, color: 'bg-primary' },
  { id: 'reports', label: 'Reports', stack: 'Workers', db: 'ClickHouse', angle: 225, distance: 270, color: 'bg-secondary' },
  { id: 'inventory', label: 'Inventory', stack: 'gRPC', db: 'PostgreSQL', angle: 270, distance: 210, color: 'bg-primary' },
  { id: 'analytics', label: 'Analytics', stack: 'Clickhouse / OLAP', db: 'MongoDB', angle: 315, distance: 240, color: 'bg-secondary' },
];

export default function RightNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  
  // Mouse tracking for 3D rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Packets animation state
  const [packets, setPackets] = useState<{id: string, from: string, to: string, progress: number}[]>([]);

  useEffect(() => {
    // Generate random packets between gateway and services
    const interval = setInterval(() => {
      const service = services[Math.floor(Math.random() * services.length)];
      const isIngress = Math.random() > 0.5;
      
      const newPacket = {
        id: Math.random().toString(36).substr(2, 9),
        from: isIngress ? 'gateway' : service.id,
        to: isIngress ? service.id : 'gateway',
        progress: 0
      };
      
      setPackets(prev => [...prev.slice(-15), newPacket]);
    }, 400); // New packet every 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full perspective-[200px] flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -top-12 right-6 md:right-10 text-[10px] font-bold text-secondary uppercase tracking-widest bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 z-30 pointer-events-none">
        Interactive Architecture Portfolio
      </div>
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full absolute inset-0 flex items-center justify-center"
      >
        <FloatingTechPills />

        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'translateZ(-1px)' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111111" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g className="origin-center" transform="translate(50% 50%)">
            {services.map((service) => {
              const rad = (service.angle * Math.PI) / 180;
              const x2 = Math.cos(rad) * service.distance;
              const y2 = Math.sin(rad) * service.distance;
              const isActive = activeNode === service.id || activeNode === 'gateway';

              return (
                <motion.line
                  key={`line-${service.id}`}
                  x1="0"
                  y1="0"
                  x2={x2}
                  y2={y2}
                  stroke={isActive ? "#111111" : "url(#lineGrad)"}
                  strokeWidth={isActive ? 1.5 : 1}
                  className="transition-colors duration-500"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              );
            })}
          </g>
        </svg>

        {/* Central Card Image Node */}
        <div 
          className="absolute z-40 flex items-center justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.div
            className={`h-[600px] w-[400px] rounded-2xl bg-transparent p-2.5  cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
              activeNode === 'gateway' ? 'ring-4 ring-[#111111] scale-110' : 'hover:scale-105'
            }`}
            onClick={() => setActiveNode(activeNode === 'gateway' ? null : 'gateway')}
            initial={{ scale: 0, rotateZ: -2 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <div className="h-[600px] w-[400px] rounded-xl overflow-hidden flex items-center bg-transparent justify-center">
              <img 
                src={image}
                alt="Profile Center Node"
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
        </div>

        {/* Satellite Microservices */}
        {services.map((service, index) => {
          const rad = (service.angle * Math.PI) / 180;
          const x = Math.cos(rad) * service.distance;
          const y = Math.sin(rad) * service.distance;

          return (
            <motion.div
              key={service.id}
              className="absolute z-20"
              style={{ x, y, transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            >
              {/* <NetworkNode 
                id={service.id}
                label={service.label}
                active={activeNode === service.id}
                onClick={() => setActiveNode(activeNode === service.id ? null : service.id)}
                stack={service.stack}
                color={service.color}
              /> */}
              
              {/* Floating Info Panel */}
              <AnimatePresence>
                {activeNode === service.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -90, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-xl border border-black/10 rounded-xl p-3 shadow-xl z-50 pointer-events-none"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <div className="text-xs font-semibold text-primary mb-1">{service.label} Panel</div>
                    <div className="text-[10px] text-secondary flex flex-col gap-1">
                      <div className="flex justify-between"><span>Stack:</span> <span className="font-medium text-primary">{service.stack}</span></div>
                      <div className="flex justify-between"><span>Database:</span> <span className="font-medium text-primary">{service.db}</span></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Packets (Data traversing) */}
        {packets.map(packet => {
          // Determine path
          const isIngress = packet.from === 'gateway';
          const targetId = isIngress ? packet.to : packet.from;
          const service = services.find(s => s.id === targetId);
          if (!service) return null;
          
          const rad = (service.angle * Math.PI) / 180;
          const startX = isIngress ? 0 : Math.cos(rad) * service.distance;
          const startY = isIngress ? 0 : Math.sin(rad) * service.distance;
          const endX = isIngress ? Math.cos(rad) * service.distance : 0;
          const endY = isIngress ? Math.sin(rad) * service.distance : 0;

          return (
            <motion.div
              key={packet.id}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#111111] z-10 shadow-[0_0_6px_rgba(0,0,0,0.5)]"
              initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
              animate={{ x: endX, y: endY, opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
              transition={{ duration: 1.2, ease: "linear" }}
              onAnimationComplete={() => setPackets(prev => prev.filter(p => p.id !== packet.id))}
            />
          );
        })}

      </motion.div>
    </div>
  );
}