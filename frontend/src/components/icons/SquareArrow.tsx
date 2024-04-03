import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface SquareArrowProps {
    href?: string;
    color?: string;
    initialSize?: string;
}

const SquareArrow: React.FC<SquareArrowProps> = ({ href = "", color = "currentColor", initialSize = "24" }) => {
    const [strokeColor, setStrokeColor] = useState("#f8f8f8");
    const [isHover, setIsHover] = useState(false);
    const [size, setSize] = useState(initialSize);
    const { theme } = useTheme();

    const getStrokeColor = () => {
        const isDarkMode = theme === "dark";
        return isDarkMode ? "#f8f8f8" : "#1a1a1a";
    };

    useEffect(() => {
        setStrokeColor(getStrokeColor());
    }, [theme]);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-square-arrow-out-up-right transition-transform ${
                    isHover ? "hover:translate-x-1 hover:-translate-y-1" : ""
                }`}
            >
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                <path d="m21 3-9 9" />
                <path d="M15 3h6v6" />
            </svg>
        </a>
    );
};

export default SquareArrow;
