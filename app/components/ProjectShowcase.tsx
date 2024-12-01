"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { projectCards } from "../data";

const Card = ({ card }: { card: any }) => {
  return (
    <div
      key={card.id}
      className="
      relative 
      h-[450px] w-[450px] 
      overflow-hidden 
      bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section 
    ref={targetRef} 
    className="
    relative 
    z-20
    max-w-max w-full mx-auto
    h-[300vh] 
    ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projectCards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

