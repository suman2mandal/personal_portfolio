"use client";

import ProjectCard from "@/components/MyProjects/ProjectCard";
import { Projects } from "@/constants";
import React, {useEffect, useState} from "react";
import HedingWrapper from "@/components/Wrapper/HedingWrapper";
import axios from "axios";
import {backend} from "@/constants/constant";

const MyProjects = () => {
    const [project,setProject] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                // Make sure to invoke the axios call and set the state
                const response = await axios.get(`${backend}/Projects`);
                setProject(response.data.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);
    console.log(project,"project");
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
