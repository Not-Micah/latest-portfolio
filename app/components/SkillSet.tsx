"use client";

import { twMerge } from "tailwind-merge";
import { useState, useRef } from "react";

interface WindowProps {
  header?: string;

  className?: string;
  startX: number;
  startY: number;

  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ header, className, startX, startY, children }) => {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      setPosition({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // Listen to mouse move and mouse up events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={dragRef}
      className={twMerge(
        `z-[20] 
        bg-white 
        border-x-2 border-b-2 border-[#333333] 
        rounded-md
        flex flex-col 
        cursor-grab`,
        className
      )}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >

      <div className="
      w-full h-[50px] 
      flex justify-center items-center 
      bg-[#333333] text-white
      rounded-t-md
      font-body dynamic-label 
      p-2">
        {header}
      </div>

      {children}
    </div>
  );
};

const displayContent = ({ content }: { content: [string, { key: string; list: string }[]] }) => {
  return (
    <div className="p-4 dynamic-label font-body flex flex-col gap-y-2">
      <p className="mb-4">{content[0]}</p>
      {content[1].map((item, index) => (
        <p key={index}>
          <span className="font-bold">{item.key}</span> {item.list}
        </p>
      ))}
    </div>
  );
};

import { skillSetData } from "../data";

const SkillSet = () => {
  return (
    <section className="
    max-w-max w-full mx-auto 
    overflow-x-hidden
    xl:overflow-visible
    xl:h-[100vh] 
    grid grid-cols-2
    max-xl:grid-cols-1 max-xl:gap-y-12
    padding mt-64">

      <div className="
      w-full h-full 
      max-xl:h-[800px]
      max-xl:order-2
      relative">

        <img 
        src="/computer.svg"
        className="
        absolute -left-[75px] top-[10px]
        w-[100px] -rotate-12"/>

        <img 
        src="/database.svg"
        className="
        absolute right-[45px] top-1/2
        w-[100px] rotate-12"/>

        <img 
        src="/floppy_disk.svg"
        className="
        absolute left-[10px] bottom-[250px]
        w-[100px] -rotate-[5deg]"/>

        {skillSetData.map((data, index) => (
          <Window
            key={index}
            header={data.header}
            className="absolute w-[400px]"
            startX={data.startX}
            startY={data.startY}
          >
            {displayContent({ content: data.content })}
          </Window>
        ))}
      </div>

      <div className="w-full h-full 
      flex flex-col items-end gap-y-12
      max-xl:items-start max-xl:gap-y-8
      max-xl:order-1">
        <h3 className="font-accentTwo dynamic-subheading text-right
        pt-4
        max-xl:text-left">Some of my skills</h3>
        <p className="dynamic-text text-right max-w-[500px]
        max-xl:text-left">Here&apos;s what I&apos;ve used for most of my projects! Each window is <span className="italic">draggable</span>.</p>
      </div>

    </section>
  );
};


export default SkillSet;
