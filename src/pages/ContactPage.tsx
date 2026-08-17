import React from "react";
import { motion } from "framer-motion";

const RevealLine = ({ children, delay, className }: any) => (
  <span className={`inline-block ${className || ""}`}>
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="inline-block"
    >
      {children}
    </motion.span>
  </span>
);

export default function Page({ reduced = false }) {
  const EASE: any = [0.25, 0.1, 0.25, 1];

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      {/* --- HERO SECTION --- */}
      <header className="flex flex-col items-center text-center pt-32 pb-16 md:pt-44 md:pb-20 lg:min-h-[82vh] lg:justify-center lg:pb-24 lg:pt-36 px-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="relative flex h-[8px] w-[8px]">
            <span className="absolute inset-0 rounded-full bg-[#10B981]" />
            <span className="animate-ping absolute inset-0 rounded-full bg-[#10B981] opacity-75" />
          </span>

          <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#999999] md:text-[11px]">
            Open to frontend & full-stack opportunities
          </p>
        </motion.div>

        {/* Main Heading */}
        <h2 className="mt-8 max-w-[22ch] text-7xl font-normal leading-[0.95] tracking-[-0.045em] text-[#111] dark:text-neutral-50 md:mt-10">
          <RevealLine delay={0.1}>
            Let's turn complex ideas into
          </RevealLine>{" "}
          <br className="hidden md:block" />
          <RevealLine delay={0.19}>
            products people remember.
          </RevealLine>
        </h2>

        {/* Subtext Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-8 max-w-[650px] text-[16px] leading-[1.65] text-[#6B6B6B] dark:text-neutral-400 md:text-[19px]"
        >
          I build modern frontend experiences and scalable full-stack systems
          using React, Node.js, NestJS, and PostgreSQL — from polished
          interfaces to reliable APIs and SaaS platforms.
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="mt-12 flex flex-col items-center gap-5 md:mt-16"
        >
          {/* Social Connect Pill */}
          <div className="flex items-center justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-2 pl-6 pr-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:border-neutral-800 dark:bg-neutral-900 md:gap-12">
            {/* Left Side: Label */}
            <div className="flex items-center gap-3">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#6466F1]"
              >
                <path
                  d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                  fill="currentColor"
                />
              </svg>

              <div className="flex flex-col items-start text-left">
                <span className="text-[13px] font-semibold leading-tight text-gray-900 dark:text-white md:text-[14px]">
                  Let's Connect
                </span>

                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 md:text-[10px]">
                  Find me online
                </span>
              </div>
            </div>

            {/* Right Side: Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 transition-transform hover:scale-105 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/40"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#E1306C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  ></line>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/m-parthiban/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 transition-transform hover:scale-105 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#0A66C2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://github.com/Parthiban68"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-transform hover:scale-105 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#181717] dark:text-white"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 transition-transform hover:scale-105 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#25D366"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          <h1 className="text-md font-medium text-gray-400 dark:text-neutral-500 italic">
            or
          </h1>

          {/* Or & Scroll Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 rounded-full border border-gray-200 bg-transparent px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-white hover:shadow-sm dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              Start a conversation
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </header>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact-section"
        className="mx-auto max-w-full px-20 py-12"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[clamp(40px,5vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111] dark:text-white">
              Open to ideas at <br /> every stage.
            </h2>

            <p className="mt-6 max-w-[400px] text-[17px] leading-relaxed text-[#6B6B6B] dark:text-neutral-400">
              Whether you're building a product from scratch, improving an
              existing frontend, or solving a complex backend problem, I'm
              interested in building reliable software that makes a real
              difference.
            </p>

            <div className="mt-14 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 border-b border-gray-200 pb-6 dark:border-neutral-800">
                <svg
                  className="mt-0.5 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-gray-900 dark:text-white">
                    parthibanm1268@gmail.com
                  </p>
                </div>
              </div>

              {/* Based In */}
              <div className="flex items-start gap-4 border-b border-gray-200 pb-6 dark:border-neutral-800">
                <svg
                  className="mt-0.5 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Based In
                  </p>

                  <p className="mt-1 font-medium text-gray-900 dark:text-white">
                    Coimbatore, Tamil Nadu · Working worldwide
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-4 border-b border-gray-200 pb-6 dark:border-neutral-800">
                <svg
                  className="mt-0.5 text-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Focus
                  </p>

                  <p className="mt-1 font-medium text-gray-900 dark:text-white">
                    Frontend · Full-Stack · SaaS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-neutral-800 dark:bg-neutral-900 sm:p-12">
            <h3 className="text-3xl font-semibold tracking-tight text-[#111] dark:text-white sm:text-4xl">
              Tell me what you're building.
            </h3>

            <form className="mt-10 flex flex-col gap-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="How should I address you?"
                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-neutral-700 dark:text-white dark:focus:border-white dark:focus:ring-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                    Email address
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-neutral-700 dark:text-white dark:focus:border-white dark:focus:ring-white"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                    What are we building?
                  </label>

                  <div className="relative">
                    <select className="w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm text-gray-600 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-neutral-700 dark:text-gray-400 dark:focus:border-white dark:focus:ring-white">
                      <option value="" disabled selected>
                        Select a project type
                      </option>

                      <option value="frontend">
                        Frontend Engineering
                      </option>

                      <option value="fullstack">
                        Full-Stack Development
                      </option>

                      <option value="backend">
                        Backend / API Development
                      </option>

                      <option value="saas">
                        SaaS / Product Development
                      </option>

                      <option value="architecture">
                        Architecture / Engineering
                      </option>

                      <option value="collaboration">
                        Product Collaboration
                      </option>

                      <option value="other">
                        Other
                      </option>
                    </select>

                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                    Preferred timeline
                  </label>

                  <input
                    type="text"
                    placeholder="For example, 4–6 weeks"
                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-neutral-700 dark:text-white dark:focus:border-white dark:focus:ring-white"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
                  Project details
                </label>

                <textarea
                  rows={5}
                  placeholder="What are you building, who is it for, and what problem are you trying to solve?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-neutral-700 dark:text-white dark:focus:border-white dark:focus:ring-white"
                />
              </div>

              {/* Footer Row */}
              <div className="mt-4 flex flex-col items-center justify-between gap-6 sm:flex-row">
                <span className="text-[12px] font-medium text-gray-400">
                  Tell me what you're building and I'll take it from there.
                </span>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:bg-black hover:scale-[1.02] active:scale-95 dark:bg-white dark:text-black dark:hover:bg-gray-100 sm:w-auto"
                >
                  Send project brief

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}