"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import VerticalSteps from "@/components/VerticalSteps";
import Briefcase from "@/components/icons/Briefcase";

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

const Professional = () => {
    const currentLanguage = useLanguage();
    const [professional, setProfessional] = useState([]);

    useEffect(() => {
        axios.get(`${useUrl}/api/professional?lang=${currentLanguage}`)
            .then(response => {
                const professionalTranslations = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    experiences: [
                        content.translations[0].experience6,
                        content.translations[0].experience5,
                        content.translations[0].experience4,
                        content.translations[0].experience3,
                        content.translations[0].experience2,
                        content.translations[0].experience1,
                    ]
                }));
                setProfessional(professionalTranslations);
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);

    return (
        <div className="flex flex-col lg:flex-row justify-center my-20">
            <div className="flex flex-col gap-4 items-center justify-center">
                {professional.map((pro: Content, index) => (
                    <div key={index}>
                        <h3 className="text-center mb-16 font-mangoli text-4xl md:text-6xl">{pro.title}</h3>
                        <div className="flex flex-col items-center justify-center md:flex-row md:gap-24 lg:gap-48">
                            <VerticalSteps bubbleIcon={<Briefcase size="24"/>} experiences={pro.experiences}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Professional;
