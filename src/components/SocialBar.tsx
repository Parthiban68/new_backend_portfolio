import React from "react";

const SocialBar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100">
      <div className="flex space-x-8">
        <a
          href="https://www.linkedin.com/in/m-parthiban"
          className="hover:text-black dark:hover:text-white transition-colors flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Parthiban68"
          className="hover:text-black dark:hover:text-white transition-colors flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>
          <span>Github</span>
        </a>
      </div>

      <div className="flex items-center space-x-2 group cursor-pointer">
        <span className="text-gray-400">Email:</span>
        <span className="text-black dark:text-white border-b border-transparent group-hover:border-black dark:group-hover:border-white transition-all">
          PARTHIBANM1268@GMAIL.COM
        </span>
      </div>
    </div>
  );
};

export default SocialBar;
