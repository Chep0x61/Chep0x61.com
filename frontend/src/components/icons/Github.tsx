"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Github = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [strokeColor, setStrokeColor] = useState("#f8f8f8");
    const { theme } = useTheme();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
        setStrokeColor(getStrokeColor());
    };

    const getStrokeColor = () => {
        const isDarkMode = theme === "dark";
        return isDarkMode ? "#f8f8f8" : "#1a1a1a";
    };

    useEffect(() => {
        setStrokeColor(getStrokeColor());
    }, [theme]);

    return (
        <a href="https://github.com/Chep0x61" target="_blank" rel="noopener noreferrer">
            <div className="relative inline-flex group">
                <div className={`absolute transition-opacity duration-200 ${isHovered ? 'opacity-200' : 'opacity-0'} -inset-0 bg-gradient-to-r bg-[#1f2937] from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg z-[1]`}/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github transition-all duration-100 z-[2]"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                >
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </div>
        </a>
    );
};

export default Github;
