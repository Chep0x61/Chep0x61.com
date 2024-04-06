"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import VerticalSteps from "@/components/VerticalSteps";
import Diploma from "@/components/icons/Diploma";

interface Experience {
    title: string;
    location: string;
    year: string;
    duration: string;
    description: string;
    logo: string;
    href: string;
}

interface Content {
    title: string;
    experiences: Experience[];
}

const Educational = () => {
    const currentLanguage = useLanguage();
    const [educational, setEducational] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`${useUrl}/api/educational?lang=${currentLanguage}`)
            .then(response => {
                const educationalTranslations: Content[] = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    experiences: [
                        content.translations[0].experience4,
                        content.translations[0].experience3,
                        content.translations[0].experience2,
                        content.translations[0].experience1,
                    ]
                }));
                setEducational(educationalTranslations);
            })
            .catch(error => {
                console.error('Error during request:', error);
            });
    }, [currentLanguage]);

    return (
        <div className="flex flex-col lg:flex-row justify-center my-20">
            <div className="flex flex-col gap-4 items-center justify-center">
                {educational.map((edu: Content, index) => (
                    <div key={index}>
                        <h3 className="text-center mb-16 font-mangoli text-4xl md:text-6xl">{edu.title}</h3>
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-24 lg:gap-48">
                            <VerticalSteps bubbleIcon={<Diploma size="24" />} experiences={edu.experiences} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Educational;
