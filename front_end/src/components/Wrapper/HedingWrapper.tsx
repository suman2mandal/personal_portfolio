import React,{ReactNode} from 'react';
import {cn} from "@/components/Wrapper/twMerge";
const HedingWrapper = ({className,children}:
                              {className?: string;
                                  children: ReactNode;
                              }) => {
    return <h1 className="text-2xl sm:text-5xl text-center font-bold flex justify-center items-center">
        <p className={cn("bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent flex items-center justify-center text-5xl font-extrabold py-6", className)}> {children} </p>
    </h1>
    // <div className={cn("", className)}></div>;
};

export default HedingWrapper;
