"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div className="flex justify-center">
      <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <div>
          {projectsData.map((project: any, index: any) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
