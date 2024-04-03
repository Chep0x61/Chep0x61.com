"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const LinkedIn = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [strokeColor, setStrokeColor] = useState("#f8f8f8");
    const { theme } = useTheme();

    const getStrokeColor = () => {
        const isDarkMode = theme === "dark";
        return isDarkMode ? "#f8f8f8" : "#1a1a1a";
    };

    useEffect(() => {
        setStrokeColor(getStrokeColor());
    }, [theme]);

    return (
        <a href="https://www.linkedin.com/in/thibault-thuillier/" target="_blank" rel="noopener noreferrer"
           onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative inline-flex group">
                <div className={`absolute transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} -inset-0 bg-gradient-to-r bg-[#1f2937] from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg z-[1]`}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-linkedin transition-all duration-100">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            </div>
        </a>
    );
};

export default LinkedIn;
