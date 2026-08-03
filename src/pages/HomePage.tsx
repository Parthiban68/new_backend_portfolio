import React from "react";
import Hero from "../features/home/hero/Hero";
import Ticker from "../features/home/techstack/Ticker";
import SocialBar from "../components/SocialBar";
import Offering from "../components/Offering";
import Experience from "../components/Experience";
import CaseStudy from "../components/CaseStudy";
import SystemTopology from "../components/SystemTopology";
import { Contact } from "lucide-react";
import Footer from "../components/Footer";
import Stats from "../components/Stats";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        {/* <SocialBar /> */}
        <Offering />
        <Experience />
        <CaseStudy />
        <SystemTopology />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
