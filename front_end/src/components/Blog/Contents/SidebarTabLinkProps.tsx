import React from 'react';

type SidebarTabLinkProps = {
    icon?: React.ReactNode; // Change to a more specific type if needed
    link_text: string;
    indent: number;
    jump: string;
};

const SidebarTabLink: React.FC<SidebarTabLinkProps> = ({ icon, link_text, indent, jump }) => {
    return (
        <li className={`mx-${indent}`}>
            <a href={`#${jump}`} className="underline flex items-center"><span className="text-xl mr-4">{icon}</span>{link_text}</a>
        </li>
    );
}

export default SidebarTabLink;
