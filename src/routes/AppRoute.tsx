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


import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Loader from "../components/layout/Loader";

const AppRoute = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
console.log(isLoading);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black transition-colors duration-300">
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="w-full flex flex-col ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutPage />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default AppRoute;