import BackgroundPixels from "./components/BackgroundPixels";
import Hero from "./components/Hero";
import SkillSet from "./components/SkillSet";
import ProjectShowcase from "./components/ProjectShowcase";
import Contacts from "./components/Contacts";

const Home = () => {
  return (
    <main className="
    bg-[#F6EEE3] ">
      {/* <BackgroundPixels 
        className="fixed inset-0 z-10
        w-[100vw] h-[100vh] overflow-hidden 
        opacity-[7.5%]"
      /> */}
      <Hero />
      <SkillSet />
      <ProjectShowcase />
      <Contacts />
      <div className="w-[100vw] h-[400px]" />
    </main>
  );
};

export default Home;