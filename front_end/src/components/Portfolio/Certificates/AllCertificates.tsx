"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import HedingWrapper from "@/components/Wrapper/HedingWrapper";
import axios from "axios";
import {backend} from "@/constants/constant";

function AllCirtificates() {
  const [certificate,setCertificate] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        // Make sure to invoke the axios call and set the state
        const response = await axios.get(`${backend}/Certificates`);
        setCertificate(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  // console.log(certificate,"certificate");
  // @ts-ignore
  function ProjectTemplate({ key,image,date, title, description, link }) {
      return (
          <div key={key}
        className="flex bg-white rounded-md border border-slate-200">
        <div className="flex-1 p-10">
          <h3 className="text-xl font-medium text-gray-700">{title}</h3>
          <p className="mt-2 text-slate-500">{description}</p>
          <a href={link} className="mt-2 inline-flex text-sky-500">
            Read More →
          </a>
        </div>
        <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
          <div className="absolute inset-0">
            <Image
              src={image}
              width={100}
              height={100}
              sizes="200vw"
              style={{ width: "100%", height: "100%",objectFit: "cover", objectPosition: "left" }}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  // const image:string = "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png";
  // const image2:string = "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"

  const images: string[] = [
    "/ReactCirt.png",
    "/Algorithm.png",
    "/CertificateMongoDB.png",
    "/ScriptionInPy.png",
    "/MachineLearning.png",
    // Add more image URLs as needed
  ];

  const titles: string[] = [
    "React| Internshala (13th August, 2023)",
    "Algorithms Specialization| Coursera (22nd October, 2022)",
    "Introduction to MongoDB| MongoDB Inc (6th May, 2022)",
    "Introduction to Scripting in Python| (27 march, 2022)",
    "Machine Learning| Standford University (6th May, 2022)",
  ];

  const descriptions: string[] = [
    "Completed a 6-week online training on React. Consisted of Introduction, Tic Tac Toe Game, Box Office App, Chat Application, Custom Backend, and Assignment & Summary modules.",
    "Programming and thinking skills to the next level which helped me to pursue serious software engineering, and study advanced topics in algorithms.",
    "Implemented MongoDB's document data model, managing large datasets and utilizing the CRUD API and Aggregation Framework. Streamlined data operations, improving database performance by 40%.",
    "A rigorous 4-course specialization in Python scripting, acquiring key programming concepts and practical problem-solving skills. Dedicated 40+ hours to mastering Python 3, enabling the automation of tasks and data analysis. Applied learning through hands-on projects, including sports analytics and data visualization, processing over 10,000+ lines of historical baseball data to compute and analyze statistics.",
    "Under the mentorship of Professor Andrew Ng, I delved into machine learning, mastering key concepts and techniques such as linear regression, neural networks, and SVMs. Hands-on experience with Octave/Matlab and projects like recommender systems deepened my understanding. This course has prepared me to tackle real-world machine learning problems and laid the groundwork for further learning and application in this domain.",
  ];

  const link: string[] = [
    "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
    "https://www.coursera.org/account/accomplishments/specialization/ZWGTN933YJLC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
    "https://coursera.org/share/96c7fc769a108eaf9accbb8f9b956825",
    "https://coursera.org/share/195c3b02858a8ca611d240996a7eb2d4",
    "https://coursera.org/share/8103311c220e015dc2bab535bda6c48a",
    "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
    "https://coursera.org/share/8103311c220e015dc2bab535bda6c48a",
  ];

  return (
    <div className="mt-20" id="Certifications">
      {/*<div className="text-4xl font-bold flex justify-center">Cirtificates</div>*/}
      <HedingWrapper>
        Cirtificates
      </HedingWrapper>
      <div className="flex min-h-screen items-center justify-center p-10">
        <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
          {certificate.map((item:any,index:number) => {
            return (
                <ProjectTemplate
                    key={index}
                    image={item.image}
                    date={item.date}
                    title={item.name}
                    description={item.description}
                    link={item.link}
                 />)
              }) }
        </div>
      </div>
    </div>
  );
}

export default AllCirtificates;
