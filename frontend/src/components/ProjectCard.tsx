"use client"

import react from "@/components/icons/tech/React";
import {useState} from "react";
import ReactCardFlip from 'react-card-flip';

import SquareArrow from "@/components/icons/SquareArrow";
import ArrowUndo from "@/components/icons/ArrowUndo";

import Rocket from "@/components/icons/Rocket";
import Palette from "@/components/icons/Palette";
import Server from "@/components/icons/Server";
import React from "@/components/icons/tech/React";
import Terminal from "@/components/icons/Terminal";


interface Category {
    text: string;
}

interface ProjectCardProps {
    link?: boolean;
    href?: string;
    title: string;
    description: string;
    titleStack: string;
    categories?: Category[];
    stackCategories: string[];
    frontend?: string[];
    frontendLinks?: string[];
    backend?: string[];
    backendLinks?: string[];
    deployment?: string[];
    deploymentLinks?: string[];
    development?: string[];
    developmentLinks?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, titleStack, description, href, categories = [], stackCategories, frontend, frontendLinks, backend, backendLinks, deployment, deploymentLinks, development, developmentLinks }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [gifHover, setGifHover] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                 className={`flex flex-col p-8 sm:p-8 border rounded-lg w-80 h-72 md:w-96 md:h-80 bg-white dark:bg-[#222222] shadow-lg  ${
                     hovered ? 'shadow-2xl' : 'shadow-md'
                 }`}>
                <div className="flex flex-row justify-between">
                    <h3 className="text-2xl font-mangoli">{title}</h3>
                    <SquareArrow href={href}/>
                </div>


                <div className="flex flex-col mt-8">
                    {description}
                </div>


                <div className="flex justify-start absolute bottom-2 left-0 mb-8 ml-8">
                    <div className="hidden md:flex flex-row gap-0.5 sm:gap-1">
                        {categories && categories.map((category: any, index) => (
                            <div key={index} className="flex items-center px-2 py-0.5 bg-gray-200 dark:bg-gray-100 dark:text-black rounded-full border">
                                <span className="text-sm">{category}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex justify-end absolute bottom-0 right-0 mb-8 mr-8">

                    <div onMouseEnter={() => setGifHover(true)} onMouseLeave={() => setGifHover(false)}
                         onClick={handleCardClick}
                         className="md:mt-8 flex justify-center items-center bg-gray-200 dark:bg-gray-100 border border-1 shadow-xl border-black dark:border-red-300 rounded-full w-12 h-12 hover:cursor-pointer">
                        <img className={gifHover ? "w-9" : "w-8"} src={gifHover ? "/icons/toolbox.gif" : "/icons/toolbox.png"}
                             alt="toolbox"/>
                    </div>
                </div>
            </div>

            <div
                className={`flex flex-col p-8 border rounded-lg w-80 h-72 md:w-96 md:h-80 shadow-lg w-80 h-72 md:w-96 md:h-80 bg-white dark:bg-[#222222] shadow-lg ${
                    hovered ? 'shadow-2xl' : 'shadow-md'
                }`}>
                <div>
                    <div className="flex justify-between">
                        <span onClick={handleCardClick} className="relative z-2 cursor-pointer"><ArrowUndo/></span>
                        <h3 className="font-mangoli text-2xl">{titleStack}</h3>
                        <SquareArrow href={href}/>
                    </div>
                    <div className="flex flex-col gap-0.5 mt-0.5 md:gap-1 md:mt-1 text-left">
                        {development && development.length > 0 && (
                            <div className="flex flex-col md:flex-col gap-2 mt-1">
                                <div className="flex flex-row items-center gap-1">
                                    <Terminal size="26"/>
                                    <h4 className="text-lg font-semibold">{stackCategories[3]}</h4>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {development.map((tech: any, index) => (
                                        <span key={index} className="text-sm">
                                            {developmentLinks && developmentLinks[index] && (
                                            <a href={developmentLinks[index]} target="_blank" rel="noopener noreferrer" className="flex w-8 h-8 md:w-10 md:h-10 justify-center items-center bg-gray-200 dark:bg-gray-100 rounded-lg p-1 hover:cursor-pointer hover:dark:bg-gray-300 hover:bg-gray-100">
                                            <img src={`/icons/tech/${tech}.png`} alt={tech}/>
                                            </a>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {frontend && frontend.length > 0 && (
                            <div className="flex flex-col md:flex-col gap-2 mt-1">
                                <div className="flex flex-row items-center gap-1">
                                    <Palette size="26"/>
                                    <h4 className="text-lg font-semibold">{stackCategories[0]}</h4>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {frontend.map((tech: any, index) => (
                                        <span key={index} className="text-sm">
                                            {frontendLinks && frontendLinks[index] && (
                                                <a href={frontendLinks[index]} target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="flex w-8 h-8 md:w-10 md:h-10 justify-center items-center bg-gray-200 dark:bg-gray-100 rounded-lg p-1 hover:cursor-pointer hover:dark:bg-gray-300 hover:bg-gray-100">
                                                    <img src={`/icons/tech/${tech}.png`} alt={tech}/>
                                                </a>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {backend && backend.length > 0 && (
                            <div className="flex flex-col md:flex-col gap-2">
                                <div className="flex flex-row items-center gap-1">
                                    <Server size="26"/>
                                    <h4 className="text-lg font-semibold">{stackCategories[1]}</h4>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {backend.map((tech: any, index) => (
                                        <span key={index} className="text-sm">
                                            {backendLinks && backendLinks[index] && (
                                                <a href={backendLinks[index]} target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="flex w-8 h-8 md:w-10 md:h-10 justify-center items-center bg-gray-200 dark:bg-gray-100 rounded-lg p-1 hover:cursor-pointer hover:dark:bg-gray-300 hover:bg-gray-100">
                                                    <img src={`/icons/tech/${tech}.png`} alt={tech}/>
                                                </a>
                                                )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {deployment && deployment.length > 0 && (
                            <div className="flex flex-col md:flex-col gap-2">
                                <div className="flex flex-row items-center gap-1">
                                    <Rocket size="26"/>
                                    <h4 className="text-lg font-semibold">{stackCategories[2]}</h4>
                                </div>
                                <div className="flex flex-row gap-1">
                                    {deployment.map((tech: any, index) => (
                                        <span key={index} className="text-sm">
                                            {deploymentLinks && deploymentLinks[index] && (
                                             <a href={deploymentLinks[index]} target="_blank" rel="noopener noreferrer"
                                                   className="flex w-8 h-8 md:w-10 md:h-10 justify-center items-center bg-gray-200 dark:bg-gray-100 rounded-lg p-1 hover:cursor-pointer hover:dark:bg-gray-300 hover:bg-gray-100">
                                                    <img src={`/icons/tech/${tech}.png`} alt={tech}/>
                                                </a>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    );
}

export default ProjectCard;
