"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";

import Linux from "@/components/icons/tech/Linux";
import Windows from "@/components/icons/tech/Windows";
import Docker from "@/components/icons/tech/Docker";
import Javascript from "@/components/icons/tech/Javascript";
import Node from "@/components/icons/tech/Node";
import Postgresql from "@/components/icons/tech/Postgresql";
import Python from "@/components/icons/tech/Python";
import React from "@/components/icons/tech/React";
import Typescript from "@/components/icons/tech/Typescript";
import C from "@/components/icons/tech/C";
import CMasMas from "@/components/icons/tech/CMasMas";
import Bash from "@/components/icons/tech/Bash";
import Tailwind from "@/components/icons/tech/Tailwind";
import Jenkins from "@/components/icons/tech/Jenkins";
import Kubernetes from "@/components/icons/tech/Kubernetes";
import Git from "@/components/icons/tech/Git";
import Vue from "@/components/icons/tech/Vue";
import Next from "@/components/icons/tech/Next";
import Prisma from "@/components/icons/tech/Prisma";
import Express from "@/components/icons/tech/Express";
import AWS from "@/components/icons/tech/AWS";
import GCP from "@/components/icons/tech/GCP";
import Label from "@/components/Label";
import Speech from "@/components/icons/Speech"
import Brain from "@/components/icons/Brain";
import Compass from "@/components/icons/Compass";
import Heartshake from "@/components/icons/Heartshake";
import Pencil from "@/components/icons/Pencil";
import Arch from "@/components/icons/tech/Arch";
import Ubuntu from "@/components/icons/tech/Ubuntu";
import Kali from "@/components/icons/tech/Kali";


interface Skill {
    title: string;
    soft: string;
    softarr: string[];
    dev: string;
    deploy: string;
    os: string;
    front: string;
    back: string;
}

interface Content {
    title: string;
    soft: string;
    softarr: string[];
    dev: string;
    deploy: string;
    os: string;
    front: string;
    back: string;
}

const Skills = () => {
    const currentLanguage = useLanguage();
    const [skills, setSkills] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`${useUrl}/skills?lang=${currentLanguage}`)
            .then(response => {
                const skillsTranslations = response.data.languages.map((content: any) => {
                    const softarr = typeof content.translations[0].skills === 'string' ? content.translations[0].skills.split(',') : content.translations[0].skills;
                    return {
                        title: content.translations[0].title,
                        soft: content.translations[0].soft,
                        softarr: softarr,
                        dev: content.translations[0].dev,
                        deploy: content.translations[0].deploy,
                        os: content.translations[0].os,
                        front: content.translations[0].front,
                        back: content.translations[0].back
                    };
                });
                setSkills(skillsTranslations);
                console.log(skillsTranslations)
            })
            .catch(error => {
                console.error('Erreur lors de la requête :', error);
            });
    }, []);

    return (
        <div id="skills-section" className="flex flex-col items-center text-center text-xl mb-8">
            <div className="text-center mt-8 mb-8 md:mb-8 font-mangoli text-4xl md:text-6xl">{skills && skills.length > 0 ? skills[0].title : ""}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].soft : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text={skills && skills.length > 0 ? skills[0].softarr[0] : ""} w="44"
                               icon={<Compass size="28"/>}/>
                        <Label text={skills && skills.length > 0 ? skills[0].softarr[1] : ""} w="44"
                               icon={<Brain size="28"/>}/>
                        <Label text={skills && skills.length > 0 ? skills[0].softarr[2] : ""} w="44"
                               icon={<Heartshake size="28"/>}/>
                        <Label text={skills && skills.length > 0 ? skills[0].softarr[3] : ""} w="44"
                               icon={<Speech size="28"/>}/>
                        <Label text={skills && skills.length > 0 ? skills[0].softarr[4] : ""} w="44"
                               icon={<Pencil size="28"/>}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].front : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text="React" href="https://react.dev/" icon={<React size="8"/>}/>
                        <Label text="Vue" href="https://vuejs.org/" icon={<Vue size="8"/>}/>
                        <Label text="Next" href="https://nextjs.org/" icon={<Next size="8"/>}/>
                        <Label text="Tailwind" href="https://tailwindcss.com/" icon={<Tailwind size="8"/>}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].back : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text="Node" href="https://nodejs.org/en" icon={<Node size="8"/>}/>
                        <Label text="Express" href="https://expressjs.com" icon={<Express size="8"/>}/>
                        <Label text="Prisma" href="https://www.prisma.io" icon={<Prisma size="24"/>}/>
                        <Label text="Postgresql" href="https://www.postgresql.org" icon={<Postgresql size="8"/>}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].dev : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text="Bash" href="https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html" icon={<Bash size="8"/>}/>
                        <Label text="C" href="https://en.cppreference.com/w/c/language" icon={<C size="8"/>}/>
                        <Label text="C++" href="https://cplusplus.com" icon={<CMasMas size="8"/>}/>
                        <Label text="Python" href="https://www.python.org/" icon={<Python size="8"/>}/>
                        <Label text="Javascript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon={<Javascript size="8"/>}/>
                        <Label text="Typescript" href="https://www.typescriptlang.org" icon={<Typescript size="8"/>}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].deploy : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text="Git" href="https://git-scm.com/doc" icon={<Git size="8"/>}/>
                        <Label text="Docker" href="https://www.docker.com" icon={<Docker size="8"/>}/>
                        <Label text="Kubernetes" href="https://kubernetes.io" icon={<Kubernetes size="8"/>}/>
                        <Label text="Jenkins" href="https://www.jenkins.io" icon={<Jenkins size="8"/>}/>
                        <Label text="AWS" href="https://aws.amazon.com" icon={<AWS size="8"/>}/>
                        <Label text="GCP" href="https://cloud.google.com" icon={<GCP size="8"/>}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-3xl font-mangoli mb-2">{skills && skills.length > 0 ? skills[0].os : ""}</h3>
                    <div className="flex flex-col text-center gap-2 ml-6 sm:ml-10">
                        <Label text="Linux" href="https://wikipedia.org/wiki/Linux" icon={<Linux size="8"/>}/>
                        <Label text="Arch" href="https://distrowatch.com/table.php?distribution=arch" icon={<Arch size="8"/>}/>
                        <Label text="Ubuntu" href="https://distrowatch.com/table.php?distribution=ubuntu" icon={<Ubuntu size="8"/>}/>
                        <Label text="Kali" href="https://distrowatch.com/table.php?distribution=kali" icon={<Kali size="8"/>}/>
                        <Label text="Windows" href="https://www.microsoft.com/en-us/windows" icon={<Windows size="8"/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
