import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import HomePage from "../pages/HomePage";

const AppRoute = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
