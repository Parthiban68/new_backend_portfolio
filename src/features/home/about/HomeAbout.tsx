import React from "react";
import { NavLink } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="bg-[#fcfcfd] dark:bg-gray-950 transition-colors duration-300">
      {/* Main Container */}
      <div className="max-w-full w-full relative z-10 bg-white/60 dark:bg-neutral-950 p-16 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="w-full lg:w-1/8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
              WHO AM I?
            </span>
          </div>

          <h2 className="text-5xl md:text-5xl font-bold text-gray-950 dark:text-white leading-[1.05] mb-8 tracking-tight">
            Backend Software Engineer.
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-10 max-w-xl">
            I'm <strong>Parthiban</strong>, a Backend Software Engineer with
            <strong> 1.6+ years of experience</strong> building scalable SaaS
            applications using{" "}
            <strong>
              Node.js, NestJS, Express.js, TypeScript, PostgreSQL, and Sequelize
            </strong>
            . I specialize in designing REST APIs, multi-tenant architectures,
            authentication systems, and clean backend solutions for enterprise
            applications.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <NavLink to={"/about-me"} className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-base font-semibold text-gray-900 dark:text-gray-100 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white transition-all">
              Read my story
              <svg
                className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </NavLink>

            <div className="flex items-center gap-2.5 text-base text-gray-700 dark:text-gray-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Full-Time Backend Opportunities
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="flex items-center gap-10 md:gap-16 text-center">
            {/* Experience */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                1.6+
              </h3>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                YEARS OF
                <br />
                EXPERIENCE
              </p>
            </div>

            <div className="h-32 lg:h-44 w-px bg-gray-200 dark:bg-gray-800"></div>

            {/* Projects */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                10+
              </h3>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                BACKEND
                <br />
                PROJECTS
              </p>
            </div>

            <div className="h-32 lg:h-44 w-px bg-gray-200 dark:bg-gray-800"></div>

            {/* Technologies */}
            <div className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                15+
              </h3>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                TECHNOLOGIES
                <br />
                USED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;



//   import React from "react";

// const HomeAbout = () => {
//   const skills = [
//     "Node.js",
//     "NestJS",
//     "TypeScript",
//     "PostgreSQL",
//     "Express.js",
//     "Sequelize",
//     "REST APIs",
//     "JWT",
//   ];

//   return (
//     <section className="bg-[#fcfcfd] py-24">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}
//           <div>

//             <div className="flex items-center gap-3 mb-6">
//               <span className="w-3 h-3 rounded-full bg-emerald-500"></span>

//               <span className="uppercase tracking-[0.35em] text-xs font-semibold text-gray-500">
//                 About Me
//               </span>
//             </div>

//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
//               Building scalable backend solutions.
//             </h2>

//             <p className="text-lg leading-8 text-gray-600 mb-8">
//               I'm <strong>Parthiban</strong>, a Backend Software Engineer with
//               <strong> 1.6+ years of experience</strong> developing scalable
//               SaaS applications. I specialize in backend architecture,
//               multi-tenant systems, REST APIs, authentication, and database
//               design using modern JavaScript technologies.
//             </p>

//             {/* Skills */}

//             <div className="flex flex-wrap gap-3 mb-10">
//               {skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             <div className="flex flex-wrap items-center gap-5">

//               <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition">
//                 Read My Story
//               </button>

//               <div className="flex items-center gap-2 text-gray-600">
//                 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//                 Open to Backend Opportunities
//               </div>

//             </div>

//           </div>

//           {/* RIGHT */}

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

//             <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm text-center">
//               <h3 className="text-5xl font-bold text-gray-900 mb-3">
//                 1.6+
//               </h3>

//               <p className="uppercase text-xs tracking-[0.2em] text-gray-500">
//                 Years Experience
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm text-center">
//               <h3 className="text-5xl font-bold text-gray-900 mb-3">
//                 10+
//               </h3>

//               <p className="uppercase text-xs tracking-[0.2em] text-gray-500">
//                 Backend Projects
//               </p>
//             </div>

//             <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-sm text-center">
//               <h3 className="text-5xl font-bold text-gray-900 mb-3">
//                 15+
//               </h3>

//               <p className="uppercase text-xs tracking-[0.2em] text-gray-500">
//                 Technologies
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default HomeAbout;