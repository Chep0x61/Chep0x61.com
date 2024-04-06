"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";

interface Certification {
    title: string;
    year: string;
    href: string;
}

interface Content {
    title: string;
    certifs: Certification[];
}

const Certifications = () => {
    const currentLanguage = useLanguage();
    const [certifications, setCertifications] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`${useUrl}/certifications?lang=${currentLanguage}`)
            .then(response => {
                const certificationsData: Content[] = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    certifs: [
                        content.translations[0].certif5,
                        content.translations[0].certif4,
                        content.translations[0].certif3,
                        content.translations[0].certif2,
                        content.translations[0].certif1,
                    ]
                }));
                setCertifications(certificationsData);
            })
            .catch(error => {
                console.error('Error during request:', error);
            });
    }, [currentLanguage]);

    return (
        <div id="certifications-section" className="flex flex-col justify-center items-center">
            <div className="text-center mb-4 font-mangoli text-4xl md:text-6xl">{certifications && certifications.length > 0 ? certifications[0].title : ""}</div>
            <div className="flex flex-col justify-center">
                {certifications.map((certification, index) => (
                    <div key={index} className="certification-item">
                        <ul>
                            {certification.certifs.map((certif: any, certifIndex) => (
                                <li key={certifIndex} className="flex my-2 font-semibold sm:text-lg p-1 text-justify justify-center hover:opacity-40 hover:cursor-pointer">
                                    <a href={certif[3]}>
                                        {certif[1]} • {certif[0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications;
