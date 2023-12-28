"use client";
import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "next-themes";

function Theme({children}:any) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if(!mounted) return null;
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Theme;