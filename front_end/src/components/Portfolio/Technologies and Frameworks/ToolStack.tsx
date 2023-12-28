import React from 'react';
import {FaDocker, FaFlask, FaGitAlt, FaJenkins, FaReact} from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';
import {SiDjango, SiExpress, SiMongodb, SiNginx, SiTailwindcss, SiWebstorm } from 'react-icons/si';
import {TbBrandLaravel, TbBrandNextjs } from "react-icons/tb";

function ToolStack() {
    return (
        <>
            <div className="text-4xl font-bold flex justify-center">
                Tools Stack
            </div>
            <div className="flex w-fit justify-center space-x-4 mt-24 mb-28">
                <div className="flex justify-center px-24 py-10 rounded-2xl">
                    <SiNginx className="text-4xl"/>
                </div>
                <div className="flex justify-center px-24 py-10 rounded-2xl">
                    <FaDocker className="text-4xl"/>
                </div>
                <div className="flex justify-center px-24 py-10 rounded-2xl">
                    <FaJenkins className="text-4xl"/>
                </div>
                <div className="flex justify-center px-24 py-10 rounded-2xl">
                    <FaGitAlt  className="text-4xl"/>
                </div>
                <div className="flex ustify-center px-24 py-10 rounded-2xl">
                    <FaGithub className="text-4xl"/>
                </div>
                <div className="flex justify-center px-24 py-10 rounded-2xl">
                    <SiWebstorm className="text-4xl"/>
                </div>
            </div>
        </>
    );
}

export default ToolStack;