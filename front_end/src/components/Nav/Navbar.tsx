import Switcher from "@/components/Nav/Mode/Switcher";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { SiExpertsexchange } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { AiFillContacts } from "react-icons/ai";
import { PiGameControllerFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-20 text-white z-50 fixed dark:bg-slate-700 bg-stone-700">
      <div className="w-1/6">
        <p className="font-signature ml-2   ">
          <Link
            href="/"
            className="flex justify-center items-center font-extrabold text-2xl"
          >
            PORTFOLIO
          </Link>
        </p>
      </div>
      <ul className="hidden md:flex justify-evenly w-full">
        <li className="nav-links cursor-pointer capitalize font-semibold hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">
          <IoMdPerson className="my-auto"/>
          <Link href="#About">About</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize font-semibold -gray-300 hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">
          <SiExpertsexchange className="my-auto"/>
          <Link href="#Education">Education</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize font-semibold hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">
          <AiFillProject className="my-auto"/>
          <Link href="#Projects">Projects</Link>
        </li>
        <li className="nav-links cursor-pointer capitalize font-semibold hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">
          <PiCertificateFill className="my-auto"/>
          <Link href="#Certifications">Certifications</Link>
        </li>
        {/*<li className="nav-links cursor-pointer capitalize font-semibold    hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">*/}
        {/*  <PiGameControllerFill className="my-auto"/>*/}
        {/*  <Link href="#Hobbies">Hobbies</Link>*/}
        {/*</li>*/}
        <li className="nav-links cursor-pointer capitalize font-semibold hover:scale-105 dark:hover:text-white hover:text-gray-800 duration-200 flex gap-1">
          <AiFillContacts className="my-auto"/>
          <Link href="#Contact">Contact</Link>
        </li>
        <div>
            <Switcher />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
