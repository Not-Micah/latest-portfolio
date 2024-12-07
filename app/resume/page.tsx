"use client";

import { useState } from "react";
import { sortedResume } from "../data";

import ResumeItem from "./components/ResumeItem";

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState(sortedResume[0].title);

  const filteredProjects = sortedResume.find(category => category.title === activeFilter)?.projects || [];

  return (
    <section
      className="
        w-full min-h-[100vh]
        flex justify-center items-start
        bg-[#F6EEE3]"
    >
      <div
        className="
          max-w-max w-full mx-auto
          padding my-40"
      >
        <h3 className="dynamic-subheading">Micah Tidball's Resume</h3>
        <p className="dynamic-text font-accentTwo mt-4">
          IGCSE: 9A*s, AS Level: 3As, 2x Highest Mark in Indonesia
        </p>

        <div
          className="
            mt-10 mb-2
            flex justify-start items-center gap-2
            flex-wrap"
        >
          {sortedResume.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(item.title)}
              className={`
                ${activeFilter === item.title ? "underline" : ""}
                bg-black/20 p-2 rounded-lg`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div
          className="
            flex flex-col gap-y-20
            my-16"
        >
          {filteredProjects.map((project, index) => (
            <ResumeItem
              key={index}
              title={project.title}
              description={project.description}
              date={project.date}
              url={project.url}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
