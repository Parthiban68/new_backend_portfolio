import Hero from "../features/home/hero/Hero";
import Ticker from "../features/home/techstack/Ticker";
import HomeAbout from "../features/home/about/HomeAbout";
import ProcessTimeline from "../features/home/process/ProcessTimeline";
import LetsConnect from "../features/home/letsconnect/LetsConnect";
import SelectedWork from "../features/home/selectedwork/SelectedWork";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Ticker />
      <HomeAbout />
      <ProcessTimeline />
      <SelectedWork />
      <LetsConnect />
    </main>
  );
};

export default HomePage;
