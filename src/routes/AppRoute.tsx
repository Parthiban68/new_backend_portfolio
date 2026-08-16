// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/layout/Navbar";
// import HomePage from "../pages/HomePage";
// import AboutPage from "../pages/AboutPage";

// const AppRoute = () => {
//   return (
//     <div className="overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about-me" element={<AboutPage/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default AppRoute;


import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Loader from "../components/layout/Loader";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoute = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
console.log(isLoading);

  return (
    <div className="min-h-screen w-full  bg-white dark:bg-black transition-colors duration-300">
      <ScrollToTop />
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="w-full flex flex-col ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AppRoute;