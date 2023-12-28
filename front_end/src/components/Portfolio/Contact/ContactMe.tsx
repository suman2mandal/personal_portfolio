import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

const ContactMe = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div>
                <div className="text-4xl text-center">Contact Me</div>
                <div className="text-2xl">I&apos;d love to hear from you!</div>
                </div>
            </div>
            <div className="grid px-24 grid-cols-2 w-screen">
                <div>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MdEmail className="text-4xl"/>
                    <FaFacebook className="text-4xl"/>
                    <FaInstagram className="text-4xl"/>
                    <FaTwitter className="text-4xl"/>
                </div>
                <div>
                    <div className="flex">
                        <input className="border-2 border-black" type="text" placeholder="Name "/>
                        <input className="border-2 border-black" type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <input className="border-2 border-black" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                        <textarea className="border-2 border-black" placeholder="Message"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
