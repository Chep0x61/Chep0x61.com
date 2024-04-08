"use client"

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from '@/hooks/useLanguage';
import { useUrl } from "@/hooks/useUrl";
import axios from "axios";

const FixedNavbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const { theme } = useTheme();
    const [navbar, setNavbar] = useState<{ aboutmeBtn: string, certifsBtn: string, skillsBtn: string, projectsBtn: string, contactBtn: string }[]>([]);
    const currentLanguage = useLanguage();
    const url = useUrl();

    const lightNavbarBackgroundColor = "#e5e5e5";
    const lightProgressBarColor = "#f8f8f8";

    const darkNavbarBackgroundColor = "#323232";
    const darkProgressBarColor = "#1a1a1a";

    const navbarBackgroundColor = theme === "light" ? lightNavbarBackgroundColor : darkNavbarBackgroundColor;
    const progressBarColor = theme === "light" ? lightProgressBarColor : darkProgressBarColor;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;

        setScrollProgress(progress);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        axios.get(`${url}/navbar?lang=${currentLanguage}`)
            .then(response => {
                const navbarTranslations = response.data.languages.map((content:any) => ({
                    aboutmeBtn: content.translations[0].aboutmeBtn,
                    certifsBtn: content.translations[0].certifsBtn,
                    skillsBtn: content.translations[0].skillsBtn,
                    projectsBtn: content.translations[0].projectsBtn,
                    contactBtn: content.translations[0].contactBtn
                }));
                setNavbar(navbarTranslations);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollClick = (path:any) => {
        const websiteSection = document.getElementById(path);

        if (websiteSection) {
            const offsetTop = websiteSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed bottom-4 left-0 right-0 mx-auto h-16 z-[9] w-[95%] sm:w-[90%] md:w-[80%] rounded-lg border ${theme === "light" ? 'border-[#dfdfdf]' : "border-[#323232]"}  overflow-hidden`}
        >
            <div
                className="h-full bg-gradient-to-r transition-all duration-300"
                style={{
                    backgroundImage: `linear-gradient(to right, ${theme === "light" ? '#e5e5e5' : "#323232"} ${scrollProgress}%, ${theme === "light" ? '#f8f8f8' : "#1a1a1a"} ${scrollProgress}%)`,
                }}
            >
                <div className="flex justify-between items-center h-full md:px-4">
                    <div className="flex ml-2 md:ml-4 gap-2">
                        <LanguageSwitcher/>
                        <ThemeSwitcher/>
                    </div>
                    <div className="hidden md:flex flex-row gap-4 text-base">
                        <button onClick={() => handleScrollClick("aboutme-section")}
                                className="rounded-lg relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 color-[#161616] dark:color-[#ffffff] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span
                                className="relative z-10 text-center">{navbar && navbar.length > 0 ? navbar[0].aboutmeBtn : ""}</span>
                        </button>
                        <button onClick={() => handleScrollClick("certifications-section")}
                                className="hidden lg:flex rounded-lg relative p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 color-[#161616] dark:color-[#ffffff] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span
                                className="relative z-10 text-center">{navbar && navbar.length > 0 ? navbar[0].certifsBtn : ""}</span>
                        </button>
                        <button onClick={() => handleScrollClick("skills-section")}
                                className="gap-2 rounded-lg relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 color-[#161616] dark:color-[#ffffff] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span
                                className="relative z-10 text-center">{navbar && navbar.length > 0 ? navbar[0].skillsBtn : ""}</span>
                        </button>
                        <button onClick={() => handleScrollClick("projects-section")}
                                className="gap-2 rounded-lg relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 color-[#161616] dark:color-[#ffffff] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span
                                className="relative z-10 text-center">{navbar && navbar.length > 0 ? navbar[0].projectsBtn : ""}</span>
                        </button>
                    </div>

                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex mr-2 md:mr-0">
                        <button onClick={() => handleScrollClick("contact-section")}
                                className="gap-2 rounded-lg relative flex p-2 items-center justify-center overflow-hidden bg-[#D0D0D0] dark:bg-gray-800 color-[#161616] dark:color-[#ffffff] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#D5D5D6] dark:before:bg-[#374151] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span
                                className="relative z-10 text-center">{navbar && navbar.length > 0 ? navbar[0].contactBtn : ""}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className={`lucide lucide-arrow-right z-20 transition-transform ${isHovered ? 'translate-x-1.5' : ''}`}>
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default FixedNavbar;
