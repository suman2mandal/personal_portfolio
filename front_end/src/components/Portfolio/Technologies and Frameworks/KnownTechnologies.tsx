import React from 'react';
import {FaDocker, FaFlask, FaGitAlt, FaJenkins, FaPython, FaReact} from "react-icons/fa";
import {SiDjango, SiExpress, SiMongodb, SiNginx, SiPhp, SiTailwindcss, SiWebstorm} from 'react-icons/si';
import {TbBrandCpp, TbBrandJavascript, TbBrandLaravel, TbBrandNextjs } from "react-icons/tb";
import {FaGithub, FaJava} from "react-icons/fa6";

function KnownTechnologies() {
    return (
        <>
        <div className="text-4xl font-bold flex justify-center">
            Technologies and Frameworks
        </div>
            <div className="px-20 flex mt-24">
                <div className="text-3xl">Language&nbsp;Stack&nbsp;|&nbsp;</div>
                <div className="flex w-full justify-between items-center columns-3">
                    {/*Make it responsive*/}
                    {/*<div className="flex">*/}
                    <TbBrandJavascript className="text-4xl"/>
                    <FaPython className="text-4xl"/>
                    <FaJava className="text-4xl"/>
                    {/*</div>*/}
                    <TbBrandCpp  className="text-4xl"/>
                    <SiPhp  className="text-4xl"/>
                </div>
            </div>
            <div className="px-20 flex mt-24 mb-24">
                <div className="text-3xl">Tech&nbsp;Stack&nbsp;|&nbsp;</div>
                <div className="flex w-full justify-between items-center">
                        <FaReact className="text-4xl"/>
                        <TbBrandNextjs className="text-4xl"/>
                        <SiTailwindcss className="text-4xl"/>
                        <SiExpress className="text-4xl"/>
                        <SiMongodb className="text-4xl"/>
                        <SiDjango className="text-4xl"/>
                        <FaFlask className="text-4xl"/>
                        <TbBrandLaravel className="text-4xl"/>
                </div>
            </div>
            <div className="px-20 flex mt-24 mb-28">
                <div className="text-3xl">Tool&nbsp;Stack&nbsp;|&nbsp;</div>
                <div className="flex w-full justify-between items-center">
                    <SiNginx className="text-4xl"/>
                    <FaDocker className="text-4xl"/>
                    <FaJenkins className="text-4xl"/>
                    <FaGitAlt  className="text-4xl"/>
                    <FaGithub className="text-4xl"/>
                    <SiWebstorm className="text-4xl"/>
                </div>
            </div>
        </>
    );
}

export default KnownTechnologies;