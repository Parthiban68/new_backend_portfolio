// import React from "react";

// const Ticker: React.FC = () => {
//   // Converted to Title Case to match the clean aesthetic of the reference image
//   const tech = [
//     "Node.js",
//     "Nest.js",
//     "Express.js",
//     "TypeScript",
//     "React.js",
//     "MongoDB",
//     "PostgreSQL",
//     "Docker",
//     "Redux",
//     "JavaScript",
//     "Dart",
//     "Flutter",
//   ];

//   // A subtle line-art icon to separate the items
//   const Separator = () => (
//     <svg
//       className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300 mx-8 sm:mx-16 shrink-0"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1}
//         d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
//       />
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1}
//         d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
//       />
//     </svg>
//   );

//   return (
//     <div className="relative z-10 py-16 bg-white overflow-hidden flex flex-col items-center">
//       {/* Inline styles for the seamless scrolling animation */}
//       <style>
//         {`
//           @keyframes scroll-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll-left 35s linear infinite;
//           }
//         `}
//       </style>

//       {/* Heading */}
//       <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-12 tracking-tight">
//         Tech Stack
//       </h2>

//       {/* Ticker Container */}
//       <div className="w-full flex overflow-hidden group border-y border-gray-100 py-6 bg-white/50">
//         <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          
//           {/* We map the array twice to create a seamless infinite loop */}
//           {[...Array(2)].map((_, arrayIndex) => (
//             <div key={arrayIndex} className="flex items-center">
//               {tech.map((item, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-xl sm:text-3xl font-light text-gray-400 tracking-wide transition-colors cursor-default whitespace-nowrap hover:text-gray-600">
//                     {item}
//                   </span>
//                   <Separator />
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ticker;


import React from "react";
import {
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiRedux,
  SiDart,
  SiFlutter,
} from "react-icons/si";

const Ticker: React.FC = () => {
  // Tech stack data with embedded minimalist inline SVGs for easy copy-pasting
  const tech = [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Dart",
    icon: <SiDart className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-5 h-5 md:w-6 md:h-6" />,
  },
];

  // A simple minimalist dot separator matching the reference image exactly
  const Separator = () => (
    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mx-6 md:mx-10 shrink-0"></span>
  );

  return (
    <div className="relative z-10 py-5 bg-[#fafafa] dark:bg-neutral-950 border-y border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col items-center">
      {/* Inline styles for responsive scrolling animation */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            /* Slower on mobile so it's readable, slightly faster on desktop */
            animation: scroll-left 25s linear infinite;
          }
          @media (min-width: 768px) {
            .animate-scroll {
              animation: scroll-left 40s linear infinite;
            }
          }
        `}
      </style>

      {/* Heading - Styled exactly like "DAILY-DRIVER TOOLKIT" in the image */}
      <p className="text-[10px] md:text-[14px] font-ligth text-gray-900 dark:text-gray-200 tracking-[0.2em] uppercase text-center mb-4">
       Daily-driver toolkit
      </p>

      {/* Ticker Container */}
      <div className="w-full flex overflow-hidden group py-2 md:py-4 relative">
        {/* Optional subtle gradient fade on the edges for a polished look */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#fafafa] to-transparent dark:from-neutral-950 dark:to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#fafafa] to-transparent dark:from-neutral-950 dark:to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center">
          
          {/* Mapped twice to create a seamless infinite loop */}
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex items-center">
              {tech.map((item, i) => (
                <React.Fragment key={i}>
                  {/* Item Container: Flex row for Icon + Text */}
                  <div className="flex items-center space-x-2 md:space-x-3 text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-default">
                    {item.icon}
                    <span className="text-lg sm:text-xl md:text-2xl font-light tracking-tight whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                  <Separator />
                </React.Fragment>
              ))}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Ticker;