"use client";
import React, {useEffect, useState} from 'react';
import HedingWrapper from "@/components/Wrapper/HedingWrapper";
import axios from 'axios';
import {backend} from '@/constants/constant';
import Image from "next/image";
function Education() {
    const [education,setEducation] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                // Make sure to invoke the axios call and set the state
                const response = await axios.get(`${backend}/Education`);
                setEducation(response.data.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    // console.log(education,"education");
    return (
        <div id="Education">
            <HedingWrapper>Education</HedingWrapper>
            <div className="container mx-auto w-full h-full mb-24 hidden md:block">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                        className="border-2-2 absolute dark:border-white border-gray-700 h-full border"
                        style={{left: "50%"}}
                    />
                    {education.map((item:any, index:number) => (
                        index % 2 === 0 ? (
                            <div key={`${index}`} className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"/>
                                <div
                                    className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg dark:text-black text-white">{index + 1}</h1>
                                </div>
                                <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 flex">
                                    <Image
                                        src={item.logo}
                                        sizes="200vw"
                                        width={100}
                                        height={100}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                        alt=""/>
                                    <div>
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.name} | {item.year}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                        {item.description}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={`${index}`}
                                 className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"/>
                                <div
                                    className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto text-white font-semibold dark:text-black text-lg">{index + 1}</h1>
                                </div>
                                <div className="order-2 bg-slate-600 rounded-lg shadow-xl w-5/12 px-6 py-4 flex">
                                    <Image
                                        src={item.logo}
                                        sizes="200vw"
                                        width={100}
                                        height={100}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                        alt=""/>
                                    <div>
                                    <h3 className="mb-3 font-bold text-white text-xl">{item.name} | {item.year} </h3>
                                    <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                        {item.description}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="container space-y-6 mx-auto w-full h-full mb-24 block md:hidden">
                {/* If you only want to show the first two items, you can use slice */}
                {education.map((item:any, index:number) => (
                    index % 2 === 0 ? (
                        // Even index
                        <div
                            key={index}
                            className="order-1 bg-white rounded-lg shadow-xl px-6 py-4 mx-6 flex"
                        >
                            <Image
                                src={item.logo}
                                sizes="200vw"
                                width={100}
                                height={100}
                                style={{
                                    height: "100px",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                                alt=""/>
                            <div>
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.name} | {item.year}</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                {item.description}
                            </p>
                            </div>
                        </div>
                    ) : (
                        // Odd index
                        <div
                            key={index}
                            className="order-2 bg-slate-600 rounded-lg shadow-xl px-6 py-4 mx-6 flex"
                        >
                            <Image
                                src={item.logo}
                                sizes="200vw"
                                width={100}
                                height={100}
                                style={{
                                    height: "100px",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                                alt=""/>
                            <div>
                            <h3 className="mb-3 font-bold text-white text-xl">{item.name} | {item.year} </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                {item.description}
                            </p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Education;