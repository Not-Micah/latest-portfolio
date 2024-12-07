"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { projectCards } from "../data";

// Import error!
import GridLines from '@mezh-hq/react-gridlines';

const Card = ({ card }: { card: any }) => {
  return (
    <div 
    key={card.id}
    className="
    w-[1000px] 
    max-xl:w-[800px] max-lg:w-[600px] max-md:w-[400px]
    border-2 border-[#333333]
    rounded-lg overflow-hidden">
        <GridLines cellWidth={120} strokeWidth={2}>
            <img 
            src={card.url}
            className="w-full h-auto" />
        </GridLines>
        <p className="
        dynamic-label text-white
        w-full h-[125px]
        max-xl:h-[150px] max-md:h-[200px]
        padding py-6
        bg-[#333333]">
            {card.description}
        </p>
    </div>
  );
};

const ProjectShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.2, 1], ["1%", "-85%"]);

  return (
    <section 
    ref={targetRef} 
    className="
    relative 
    mt-48 mb-60
    max-w-max w-full mx-auto
    h-[300vh] 
    ">
      <div className="
      flex flex-col gap-y-12 max-lg:gap-y-8 
      padding pb-16">
        <h3 className="dynamic-subheading font-accentTwo">Some of my projects</h3>
        <p className="dynamic-text">Here's a <span className="italic">small selection</span> of my work!</p>
      </div>
      <div className="
      z-20 
      sticky top-0 
      flex items-center 
      overflow-hidden
      pt-4
      max-xl:pb-16">
        <motion.div style={{ x }} className="flex gap-x-16">
          {projectCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

