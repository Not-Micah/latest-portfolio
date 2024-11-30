import BackgroundPixels from "./components/BackgroundPixels";
import Hero from "./components/Hero";
import SkillSet from "./components/SkillSet";

import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <main className="
    bg-[#F6EEE3] 
    relative
    overflow-hidden">
      <BackgroundPixels 
        className="fixed inset-0 z-10
        w-[100vw] h-[100vh] overflow-hidden 
        opacity-[7.5%]"
      />
      <Hero />
      <SkillSet />
    </main>
  );
};

export default Home;