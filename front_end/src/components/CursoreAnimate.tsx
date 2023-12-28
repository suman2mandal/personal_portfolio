"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HedingWrapper from "@/components/Wrapper/HedingWrapper";



function App() {

    return (
        <div className="
         application flex flex-col justify-center ">
            <HedingWrapper>
                Welcome to my portfolio!
            </HedingWrapper>


            <h4  className="text-md sm:text-4xl text-center mt-2 font-bold flex justify-center">
                {" "}
                Exploring the Digital Landscape: My Web Development Journey
            </h4>
            <p className="dark:text-gray-400 text-xl text-gray-800 mt-6 text-left md:text-center xl:text-2xl">
                I’m a passionate Web Developer with a knack for creating dynamic and interactive web experiences.<br/>
                I’m currently on the lookout for new opportunities to bring my skills to a forward-thinking
                company.<br/>

                If you’re seeking a dedicated developer who is always on the pulse of the latest industry trends and
                technologies, then look no further.<br/> Let’s connect and explore how we can build the future of the
                web
                together! 💼🚀
                <br/>
            </p>
        <div className="application flex flex-col justify-center">
            {/* ... (your existing code) ... */}

            <div className="lg:mx-60 md:mx-20">
                <div className="flex h-[200px] sm:h-[250px] md:h-[300px] lg:h-[550px] mt-10 justify-center">
                    <Image
                        src="/L0.png"
                        className="min-w-full justify-center absolute"
                            width={1000}
                            height={1000}
                        alt="Can't load Image"
                    />
                    <Image
                        src="/L1.png"
                        className="min-w-full justify-center absolute hover1"
                            width={1000}
                            height={1000}
                        alt="Can't load Image"
                    />
                    <Image
                        src="/L2.png"
                        className="min-w-full justify-center absolute  hover2"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                    <Image
                        src="/L3.png"
                        className="min-w-full justify-center absolute hover3"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                    <Image
                        src="/L4.png"
                        className="min-w-full justify-center absolute hover4"
                        width={1000}
                        height={1000}
                        alt="Can't load Image"
                    />
                </div>
            </div>
        </div>
        </div>
    );
}

export default App;
