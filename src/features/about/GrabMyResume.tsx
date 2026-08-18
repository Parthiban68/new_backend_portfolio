import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  ArrowLeft,
  Download,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const GrabMyResume = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloading) return;

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Trigger native download action
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Parthiban_Software_Engineeer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-[#fdfdfd] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Subtle background lines/texture simulation */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Stacked Resumes */}
        <div className="relative w-full max-w-[400px] aspect-[1/1.4] mx-auto hidden md:block">
          {/* Bottom Layer */}
          <div className="absolute inset-0 bg-white shadow-xl rounded-sm border border-gray-100 transform -rotate-6 origin-bottom-left transition-transform duration-500 hover:-rotate-12"></div>
          {/* Middle Layer */}
          <div className="absolute inset-0 bg-white shadow-xl rounded-sm border border-gray-100 transform -rotate-2 origin-bottom-left transition-transform duration-500 hover:-rotate-4 p-8">
            <div className="w-1/2 h-4 bg-gray-100 mb-6 rounded-full"></div>
            <div className="w-full h-2 bg-gray-50 mb-3 rounded-full"></div>
            <div className="w-5/6 h-2 bg-gray-50 mb-3 rounded-full"></div>
            <div className="w-4/6 h-2 bg-gray-50 mb-10 rounded-full"></div>
          </div>
          {/* Top Layer */}
          <div className="absolute inset-0 bg-[#fdfdfd] shadow-2xl rounded-sm border border-white/20 transform rotate-3 origin-bottom-right transition-transform duration-500 hover:rotate-6 overflow-hidden flex flex-col p-4 md:p-5">
            {/* Subtle top glare */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-10"></div>

            <div className="w-full h-full flex flex-col gap-3 relative z-0">
              {/* Mini Header Section */}
              <div className="flex justify-between items-start gap-3 h-[25%]">
                {/* Left: Name & Title Replica */}
                <div className="flex-1 flex flex-col gap-1.5 pt-1">
                  <div className="w-4/5 h-2.5 bg-gray-300 rounded-sm"></div>
                  <div className="w-3/5 h-2.5 bg-gray-300 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 mt-2 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-2/3 h-2 bg-gray-800 mt-3 rounded-sm"></div>
                </div>
                {/* Right: Bento Box Replica */}
                <div className="w-1/3 h-full grid grid-cols-2 grid-rows-2 gap-1">
                  <div className="row-span-2 col-span-1 bg-[#f06a33] rounded-[3px]"></div>
                  <div className="bg-[#d0bdf4] rounded-[3px]"></div>
                  <div className="bg-[#f2c75c] rounded-[3px]"></div>
                </div>
              </div>

              {/* Mini Two-Column Section */}
              <div className="flex-1 flex gap-3 pt-2 border-t border-gray-200">
                {/* Left Column (Narrow) */}
                <div className="w-[35%] flex flex-col gap-2">
                  {/* Contact Block */}
                  <div className="w-full h-1 bg-gray-300 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-1 bg-gray-200 rounded-sm"></div>

                  {/* Edu Block */}
                  <div className="w-full h-1.5 bg-gray-300 mt-3 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-800 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>

                  {/* Skills Block */}
                  <div className="w-full h-1.5 bg-gray-300 mt-3 rounded-sm"></div>
                  <div className="w-2/3 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-2/3 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-2/3 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>

                  <div className="w-full h-1.5 bg-gray-300 mt-3 rounded-sm"></div>
                  <div className="w-2/3 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-3/4 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                </div>

                {/* Right Column (Wide) */}
                <div className="w-[65%] flex flex-col gap-2">
                  {/* Summary */}
                  <div className="w-full h-1 bg-gray-300 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>

                  {/* Exp 1 */}
                  <div className="w-1/3 h-1.5 bg-gray-300 mt-3 rounded-sm"></div>
                  <div className="w-2/3 h-1.5 bg-gray-800 mt-1 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 mt-1 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>

                  {/* Exp 2 */}
                  <div className="w-2/3 h-1.5 bg-gray-800 mt-3 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 mt-1 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>

                  <div className="w-2/3 h-1.5 bg-gray-800 mt-3 rounded-sm"></div>
                  <div className="w-full h-1 bg-gray-200 mt-1 rounded-sm"></div>
                  <div className="w-5/6 h-1 bg-gray-200 rounded-sm"></div>
                  <div className="w-4/5 h-1 bg-gray-200 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start justify-center max-w-lg">
          <FileText className="w-10 h-10 text-gray-300 mb-6" strokeWidth={1} />
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-6">
            Grab my resume!
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            A compact view of my scalable backend architecture, infrastructure
            health management, database optimization, tools, and the projects
            I'm building next.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <NavLink
              to={"/projects"}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </NavLink>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0a0a0a] text-white font-medium hover:bg-black transition-colors shadow-lg shadow-black/10"
            >
              Download Me
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrabMyResume;
