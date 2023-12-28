import React from 'react';
import HedingWrapper from "@/components/Wrapper/HedingWrapper";

function Education() {
    return (
        <div id="Education">
            <HedingWrapper>
                Education
            </HedingWrapper>
            {/* component */}
            <div className="container mx-auto w-full h-full mb-24 hidden md:block">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                        className="border-2-2 absolute dark:border-white border-gray-700 h-full border"
                        style={{ left: "50%" }}
                    />
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg dark:text-black text-white">1</h1>
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Neotia Institute of Technology Management, and Science(Sep, 2023) </h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Bachelor Of Technology in Computer Science & Engineering: Conducted by Maulana Abul Kalam Azad University of Technology, West Bengal in October 2023 and was placed in 1st Class with Distinction.
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold dark:text-black text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-slate-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Central Calcutta Polytechnic(Oct,&nbsp;2020)  </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Diploma in Computer Science & Technology: Conducted by the West Bengal State Council of Technical & Vocational Education & Skill Development in October 2020 and was placed in 1st Class with Distinction.
                            </p>
                        </div>
                    </div>
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg dark:text-black text-white">3</h1>
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Jyotirmoy Basu Vocational Training Center(Jan,&nbsp;2018)</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Conducted by the West Bengal State Council of Vocational Education & Traning in June 2018 and was placed in excellent(A+) grade.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Education;