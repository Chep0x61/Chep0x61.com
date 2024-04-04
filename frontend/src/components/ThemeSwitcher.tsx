"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const lightBackgroundColor = "#e5e5e5"
    const lightHoverBackgroundColor = "#D5D5D6"
    const lightAnimation = "#f8f8f8"

    const darkBackgroundColor = "#1f2937"
    const darkHoverBackgroundColor = "#374151"
    const darkAnimation = "#f8f8f8"

    const backgroundColor = theme === "light" ? lightBackgroundColor : darkBackgroundColor;
    const hoverBackgroundColor = theme === "light" ? lightHoverBackgroundColor : darkHoverBackgroundColor;
    const animationColor = theme === "light" ? lightAnimation : darkAnimation;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (

        <button onClick={toggleTheme}
                className={`gap-2 rounded-full relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-700 before:ease-out hover:before:h-24 hover:before:w-24`}>
        <span className="relative z-10 text-center">
            {theme === 'light' ? <Moon /> : <Sun />}
        </span>
        </button>
    );
}
