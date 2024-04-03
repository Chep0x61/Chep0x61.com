"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ArrowDown = () => {
    const [strokeColor, setStrokeColor] = useState("#f8f8f8");
    const { theme } = useTheme();

    const handleLeave = () => {
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
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
             stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-chevrons-down">
            <path d="m7 6 5 5 5-5"/>
            <path d="m7 13 5 5 5-5"/>
        </svg>
    );
}

export default ArrowDown;


