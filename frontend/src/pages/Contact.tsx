"use client"

import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";
import RainbowButton from "@/components/RainbowButton";

import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import axios from "axios";

interface Content {
    title: string;
    sentence1: string;
    button: string;
}

const Contact = () => {
    const currentLanguage = useLanguage();
    const [contact, setContact] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/contact?lang=${currentLanguage}`)
            .then(response => {
                const contactTranslations: Content[] = response.data.languages.map((content: any) => ({
                    title: content.translations[0].title,
                    sentence1: content.translations[0].sentence1,
                    button: content.translations[0].button
                }));
                setContact(contactTranslations);
            })
            .catch(error => {
                console.error('Error during request:', error);
            });
    }, []);

    return (
        <div id="contact-section" className="flex flex-col justify-center items-center h-[900px]">
            <p className="text-center mb-4 font-mangoli text-4xl md:text-6xl">{contact && contact.length > 0 ? contact[0].title : ""}</p>
            <p className="text-center mb-4 max-w-[90%] md:max-w-[80%] lg:max-w-[815px] font-mangoli text-2xl md:text-3xl">
                {contact && contact.length > 0 ? contact[0].sentence1 : ""}
            </p>

            <div className="my-8 lg:my-14">
                <RainbowButton redirection="mailto:thibault.thuillier@epitech.eu" text={contact && contact.length > 0 ? contact[0].button : ""}/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-2 justify-center mb-4">

                <div className="flex flex-col items-center lg:mb-16">
                    <Github/>
                    <p className="mt-2">Chep0x61</p>
                </div>
                <div className="hidden lg:flex flex-col items-center">
                    <Mail/>
                    <p className="mt-2">thibault.thuillier@epitech.eu</p>
                </div>
                <div className="flex flex-col items-center">
                    <LinkedIn/>
                    <p className="mt-2">Thibault Thuillier</p>
                </div>

            </div>

            <div className="flex justify-center items-center mt-4 mb-4 lg:hidden">
                <div className="flex flex-col items-center">
                    <Mail/>
                    <p className="mt-2">thibault.thuillier@epitech.eu</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4 text-center">
                <p className="mt-6">{`Thibault Thuillier's`}</p>
                <img
                    src="/myself.jpg"
                    alt="..."
                    className="w-12 shadow-lg rounded max-w-full border-none"
                />
                <p className="mt-6">Portfolio © 2024</p>
            </div>
            <p className="text-center mt-4">
                Made with ❤️ by myself with a lot of <a className="font-bold" href="">inspirations</a>
            </p>
        </div>
    );
};

export default Contact;
