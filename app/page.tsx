import BackgroundPixels from "./components/BackgroundPixels";
import Hero from "./components/Hero";
import SkillSet from "./components/SkillSet";
import ProjectShowcase from "./components/ProjectShowcase";
import Contacts from "./components/Contacts";
import Ending from "./components/Ending";

const Home = () => {
  return (
    <main className="
    bg-[#F6EEE3] ">
      <BackgroundPixels 
        className="fixed inset-0
        w-[100vw] h-[100vh] overflow-hidden
        z-0"
      />
      <Hero />
      <SkillSet />
      <ProjectShowcase />
      <Contacts />
      <Ending />
    </main>
  );
};

export default Home;