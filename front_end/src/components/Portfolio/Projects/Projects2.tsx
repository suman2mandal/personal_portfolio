import React from "react";
import Image from "next/image";
interface ProjectData {
  image: string;
  title: string;
  description: string;
  link: string;
}

function Project({
  image,
  title,
  description,
  link,
}: ProjectData): JSX.Element {
  return (
    <div className="row-span-2 flex flex-col rounded-md border border-slate-200">
      <div className="h-1/2 flex-1">
        {/*<img*/}
        {/*    src={image}*/}
        {/*    className=" h-full w-full object-cover object-right-top"*/}
        {/*    alt={title}*/}
        {/*/>*/}
        <Image
          src={image}
          width={100}
          height={100}
          sizes="200vw"
          style={{ width: "100%", height: "100%" }}
          alt=""
        />
      </div>
      <div className="p-10 bg-white">
        <h3 className="text-xl font-medium text-gray-700">{title}</h3>
        <p className="mt-2 text-slate-500">{description}</p>
        <a href={link} className="mt-2 inline-flex text-sky-500">
          Read More →
        </a>
      </div>
    </div>
  );
}

function Projects2() {
  const projectsData: ProjectData[] = [
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png",
      title:
        "Restock E-commerce Platform | Redux, Framer Motion, Swiper JS, React Particles",
      description:
        "Developed and implemented key features for Restock, an open-source e-commerce platform for pre-owned PC parts, resulting in a 40% increase in user engagement.\no Ensured quality, affordability, and sustainability in the tech industry\no Used Next JS to develop this project with scalable and responsive features\no Increased the traffic and conversion rate of the website by 15% and 10% respectively",
      link: "your_project_link_here",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png",
      title:
        "Stay-Stats Data-Driven Dashboard for Hotel Management | Next JS, Redux, rechart",
      description:
        "Created a dashboard for a hotel business to analyse key performance indicators, enabling strategic planning through data visualization of trends impacting business performance.\no Engineered a robust hotel management system optimizing key performance indicators (KPIs) by streamlining booking processes and increasing revenue by 25% annually.\no Enabled strategic planning and decision making with interactive data visualization using Next JS.",
      link: "your_project_link_here",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png",
      title: "Personal Portfolio🔗 | Framer Motion, Tailwind, Three JS",
      description:
        "Portfolio website, designed with a user-friendly interface. It effectively highlights all my achievements and projects I have worked on.",
      link: "your_project_link_here",
    },
    {
      image:
        "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png",
      title: "E-Commerce🔗 | Redux, Swiper JS",
      description:
        "E-commerce website designed with a fresh, minimalist user interface, a user-friendly and intuitive browsing experience.",
      link: "your_project_link_here",
    },
    // Add more projects as needed
  ];

  return (
    <>
      <div className="text-4xl font-bold flex justify-center">Projects</div>
      <div className="flex items-center justify-center p-10 ">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects2;
