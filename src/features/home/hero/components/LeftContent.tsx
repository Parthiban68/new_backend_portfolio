import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function LeftContent() {
  return (
    <div className="flex w-full max-w-2xl flex-col justify-center">
      <div
        data-hero-reveal
        className="mb-3 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#6d675c] max-[360px]:mb-2 max-[360px]:gap-1.5 max-[360px]:text-[11px] sm:mb-4 sm:text-[13px] md:text-[14px]"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.55)]" />
        <span>Software Engineering</span>
        <span className="px-0.5 text-lg font-light text-[#c9c3b7]">×</span>
        <span>Distributed Systems</span>
      </div>

      <h1
        id="hero-heading"
        data-hero-reveal
        className="max-w-[760px] font-display text-[clamp(2.05rem,3.55vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#12100c] max-[360px]:text-[1.65rem] max-[360px]:leading-[1.0]"
      >
        Crafting Secure APIs,
        <br />
        Distributed Systems,
        <br />
        &amp; Enterprise Software!
      </h1>

      <p
        data-hero-reveal
        className="mt-4 max-w-[650px] text-[14px] leading-[1.55] text-[#645f55] max-[360px]:mt-3 max-[360px]:text-[13px] max-[360px]:leading-[1.45] sm:mt-5 sm:text-[15px] md:text-base"
      >
        I started with clean architecture, database design, and API development.
        Today, I turn that foundation into highly scalable backend systems,
        robust interfaces, and production-grade software built with purpose.
      </p>

      <div
        data-hero-reveal
        className="mt-5 flex flex-col items-start gap-4 max-[360px]:mt-4 max-[360px]:gap-3 sm:mt-6 sm:flex-row sm:items-center sm:gap-6"
      >
        <a
          href="https://github.com/Parthiban68"
          target="_blank"
          rel="noreferrer"
          className="group flex w-full items-center justify-between gap-4 rounded-[32px] bg-[#12100c] py-1.5 pl-5 pr-1.5 text-[14px] font-medium text-white shadow-[0_12px_30px_rgba(18,16,12,0.16)] transition-transform hover:-translate-y-0.5 sm:w-auto sm:pl-6 sm:text-[15px]"
        >
          <span className="flex items-center gap-2">
            <Github className="h-4 w-4" strokeWidth={2.2} />
            GitHub
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </span>
        </a>

        <NavLink
          to="/projects"
          className="group inline-flex items-center gap-1.5 border-b-[1.5px] border-[#c9c3b7] pb-1 text-[14px] font-medium text-[#12100c] transition-colors hover:border-[#12100c] sm:text-[15px]"
        >
          Explore projects
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </NavLink>
      </div>
    </div>
  );
}
