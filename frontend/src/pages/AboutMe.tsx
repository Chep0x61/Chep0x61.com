"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import axios from "axios";

interface Content {
    title: string;
    sentence1: string;
    sentence2: string;
    sentence3: string;
}

const AboutMe = () => {
    const currentLanguage = useLanguage();
    const [about, setAbout] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/about?lang=${currentLanguage}`)
            .then(response => {
                const aboutTranslations = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    sentence1: content.translations[0].sentence1,
                    sentence2: content.translations[0].sentence2,
                    sentence3: content.translations[0].sentence3,
                }));
                setAbout(aboutTranslations);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);

    return (
        <div id="aboutme-section" className="flex flex-col items-center">
            <div className="text-center font-mangoli text-4xl md:text-6xl lg:mt-4">{about && about.length > 0 ? about[0].title : ""}</div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-16 mt-4">
            <div className="flex flex-col items-center text-center max-w-[80%] lg:max-w-[450px]">
                <p className="text-base md:text-lg font-semibold text-balance">{about && about.length > 0 ? about[0].sentence1 : ""}</p>
                <p className="mt-4 text-base md:text-lg mx-1 text-balance">{about && about.length > 0 ? about[0].sentence2 : ""}</p>
                <p className="mt-2 text-base md:text-lg mx-1 text-balance">{about && about.length > 0 ? about[0].sentence3 : ""}</p>
            </div>
                <img className="hidden lg:inline w-64 h-auto mb-16" src="/hands/lock.png" alt="hand throw portal with opened lock" />
            </div>
        </div>
    )
}

export default AboutMe;