import React, { ReactNode } from 'react';
import PostBanner from "@/components/Blog/Banner/PostBanner";
import SidebarTabLinkProps from "@/components/Blog/Contents/SidebarTabLinkProps";
import { TbTransitionTop } from "react-icons/tb";

export interface Link {
    icon?: React.ReactNode;
    link_text: string;
    indent: number;
    jump: string;
}

interface TemplateProps {
    links: Link[];
    BannerImage: string;
    Title: string;
    Posts: ReactNode;
    Others: ReactNode;
}

function Template({ links, BannerImage, Title, Posts, Others }: TemplateProps) {
    const displayLink = links.map((link: Link, index: number) => (
        <SidebarTabLinkProps key={index} icon={link?.icon} link_text={link.link_text} indent={link.indent} jump={link.jump} />
    ));

    return (
        <>
            <div className="flex justify-between md:justify-evenly md:space-x-6 md:mx-28">
                <div className="bg-slate-600 overflow-scroll scrollbar-hide rounded-2xl h-fit z-10 md:sticky top-0 left-0 w-1/4 mt-4 fixed">
                    <div className="">
                        <PostBanner imageUrl={`${BannerImage}`} />
                        <div className="p-4">
                            <ul className="flex flex-col space-y-2">{displayLink}</ul>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 mt-4 rounded-2xl">
                    <PostBanner id="#top" imageUrl={`${BannerImage}`} />
                    <div className="flex justify-between items-center my-2 mx-6 ">
                        <h1 className="text-4xl font-bold ">{Title}</h1>
                        <div>12/12/2023</div>
                    </div>
                    <div className="p-6 mt-10 bg-slate-600 rounded-2xl !prose-invert" style={{ color: '#000000' }}>{Posts}</div>
                </div>
                <div className="bg-slate-600 rounded-2xl h-screen w-1/4 mt-4">
                    <div className="p-4">{Others}</div>
                </div>
            </div>
        </>
    );
}

export default Template;
