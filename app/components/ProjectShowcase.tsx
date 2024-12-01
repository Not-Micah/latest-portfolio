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
    className="w-[1000px]">
        <GridLines cellWidth={120} strokeWidth={2}>
            <img 
            src={card.url}
            className="w-full h-auto" />
        </GridLines>
    </div>
  );
};

const ProjectShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.1, 1], ["1%", "-85%"]);

  return (
    <section 
    ref={targetRef} 
    className="
    relative 
    z-20 my-48
    max-w-max w-full mx-auto
    h-[300vh] 
    ">
      <div className="flex flex-col gap-y-12 max-lg:gap-y-8">
        <h3 className="dynamic-subheading font-accentTwo">Some of my projects</h3>
        <p className="dynamic-text">Here's a <span className="underline">small selection</span> of my work!</p>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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

