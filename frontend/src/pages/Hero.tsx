"use client"

import RotatingTextCircle from "@/components/RotatingCircle";
import RainbowButton from "@/components/RainbowButton";
import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";

interface HeroContent {
    title: string;
    sentence1: string;
    sentence2: string;
    resumeBtn: string;
    circleSentence: string;
}

const Hero = () => {
    const url = useUrl();
    const currentLanguage = useLanguage();
    const [hero, setHero] = useState<HeroContent[]>([]);
    const path = currentLanguage === "fr" ? "/documents/cv_thibault_thuillier.pdf" : "/documents/resume_thibault_thuillier.pdf";

    useEffect(() => {
        axios.get(`${url}/hero?lang=${currentLanguage}`)
            .then(response => {
                const heroTranslations: HeroContent[] = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    sentence1: content.translations[0].sentence1,
                    sentence2: content.translations[0].sentence2,
                    resumeBtn: content.translations[0].resumeBtn,
                    circleSentence: content.translations[0].circleSentence
                }));
                setHero(heroTranslations);
            })
            .catch(error => {
                console.error('Error during request:', error);
            });
    }, [currentLanguage]);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen text-center md:mt-5">
            <div className="flex flex-col md:flex-row gap-8 md:gap-1 lg:gap-16 justify-center items-center md:pb-36 text-4xl">
                <div className="flex flex-wrap justify-center">
                    <div className="mx-2 max-w-[200px] md:min-w-[320px] md:max-w-[320px] lg:min-w-[310px] lg:max-w-[350px] shadow-2xl">
                        <img src="/myself.jpg" alt="Thibault Thuillier" className="shadow-lg rounded max-w-full" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-mangoli text-3xl md:text-4xl lg:text-6xl text-center md:text-left mx-1 lg:max-w-[720px]">
                        {hero && hero.length > 0 ? hero[0].title : ""} <span className="line-through">Thibault Thuillier, a.k.a&nbsp;</span> Chep0x61.
                    </div>
                    <div className="flex mt-2 md:mt-2 text-center md:text-left text-base md:text-lg lg:text-xl max-w-[95%] lg:max-w-[640px] mx-auto md:mx-1">
                        {hero && hero.length > 0 ? hero[0].sentence1 : ""}
                    </div>
                    <div className="flex mt-2 md:mt-4 text-center md:text-left text-base md:text-lg lg:text-xl max-w-[92%] lg:max-w-[640px] mx-auto md:mx-1">
                        {hero && hero.length > 0 ? hero[0].sentence2 : ""}
                    </div>
                    <div className="flex justify-center">
                        <div className="mt-6 md:mt-8">
                            <RainbowButton redirection={path} text={hero && hero.length > 0 ? hero[0].resumeBtn : ""}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="mt-[-3rem] md:mt-[-8rem]">
                <RotatingTextCircle text={hero && hero.length > 0 ? hero[0].circleSentence : ""}/>
            </div>
        </div>
    );
}

export default Hero;