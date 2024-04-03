"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Mail = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [strokeColor, setStrokeColor] = useState("#f8f8f8");
    const { theme } = useTheme();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };

    const getStrokeColor = () => {
        const isDarkMode = theme === "dark";
        return isDarkMode ? "#f8f8f8" : "#1a1a1a";
    };

    useEffect(() => {
        setStrokeColor(getStrokeColor());
    }, [theme]);

    return (
        <a href="mailto:thibault.thuillier@epitech.eu" target="_blank" rel="noopener noreferrer"
           onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div className="relative inline-flex group">
                <div
                    className={`absolute transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} -inset-0 bg-gradient-to-r bg-[#1f2937] from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg z-[1]`}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="lucide lucide-at-sign transition-all duration-100">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
                </svg>
            </div>
        </a>
    );
};

export default Mail;
