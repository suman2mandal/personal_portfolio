import React,{ReactNode} from 'react';
import {cn} from "@/components/Wrapper/twMerge";
const ComponentWrapper = ({className,children}:
                          {className?: string;
                            children: ReactNode;
                          }) =>
{
    return <div className={cn("", className)}>{children}</div>;
};

export default ComponentWrapper;
