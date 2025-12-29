
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import SocialBar from './components/SocialBar';
import Offering from './components/Offering';
import Experience from './components/Experience';
import CaseStudy from './components/CaseStudy';
import SystemTopology from './components/SystemTopology';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <SocialBar />
        <Offering />
        <Experience />
        <CaseStudy />
        <SystemTopology />
        {/* <Stats /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
