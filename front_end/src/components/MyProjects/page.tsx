"use client";

import ProjectCard from "@/components/MyProjects/ProjectCard";
import { Projects } from "@/constants";
import React from "react";
import HedingWrapper from "@/components/Wrapper/HedingWrapper";

const MyProjects = () => {
  return (
    <div id="Projects">
        <HedingWrapper>My Projects and Works</HedingWrapper>
        <div className=" h-full mt-10 flex items-center justify-center bg-center bg-cover">
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 max-w-[90%] max-h-[90%]">
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
