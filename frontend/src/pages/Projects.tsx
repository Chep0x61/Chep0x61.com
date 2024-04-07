"use client"

import ProjectCard from "@/components/ProjectCard";

import { useLanguage } from "@/hooks/useLanguage";
import { useUrl } from "@/hooks/useUrl";
import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
    text: string;
}

interface Project {
    name: string;
    description: string;
    href: string;
    stack: string;
    categories: Category[];
    stackCategories: string[];
    frontend: string[];
    frontendLinks: string[];
    backend: string[];
    backendLinks: string[];
    deployment: string[];
    deploymentLinks: string[];
    development: string[];
    developmentLinks: string[];
}

interface Content {
    title: string;
    sentence1: string;
    projects: Project[];
}

const Projects = () => {
    const url = useUrl();
    const currentLanguage = useLanguage();
    const [projects, setProjects] = useState<Content[]>([]);

    useEffect(() => {
        axios.get(`${url}/projects?lang=${currentLanguage}`)
            .then(response => {
                const projectsTranslations: Content[] = response.data.languages.map((language: any) => ({
                    title: language.translations[0].title,
                    sentence1: language.translations[0].sentence1,
                    projects: language.translations.map((translation: any) => ({
                        name: translation.name,
                        description: translation.description,
                        href: translation.href,
                        stack: translation.stack,
                        categories: translation.categories,
                        stackCategories: translation.stackCategories,
                        frontend: translation.frontend,
                        frontendLinks: translation.frontendLinks,
                        backend: translation.backend,
                        backendLinks: translation.backendLinks,
                        deployment: translation.deployment,
                        deploymentLinks: translation.deploymentLinks,
                        development: translation.development,
                        developmentLinks: translation.developmentLinks,
                    }))
                }));
                setProjects(projectsTranslations);
            })
            .catch(error => {
                console.error('Error during request:', error);
            });
    }, [currentLanguage]);

    return (
        <div id="projects-section" className="flex flex-col justify-center items-center">
            <div className="text-center my-8 font-mangoli text-4xl md:text-6xl">{projects && projects.length > 0 ? projects[0].title : ""}</div>
            <div className="flex flex-col lg:flex-row gap-2 justify-center items-center font-mangoli text-lg md:text-xl mb-4 lg:mb-8 text-center max-w-[350px] md:max-w-[450px] lg:max-w-[600px]">
                <img className="hidden lg:inline w-12" src="/icons/toolbox.gif"/>
                {projects && projects.length > 0 ? projects[0].sentence1 : ""}
                <img className="w-12" src="/icons/toolbox.gif"/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.projects[0].name}
                        titleStack={project.projects[0].stack}
                        description={project.projects[0].description}
                        href={project.projects[0].href}
                        categories={project.projects[0].categories}
                        stackCategories={project.projects[0].stackCategories}
                        frontend={project.projects[0].frontend}
                        frontendLinks={project.projects[0].frontendLinks}
                        backend={project.projects[0].backend}
                        backendLinks={project.projects[0].backendLinks}
                        deployment={project.projects[0].deployment}
                        deploymentLinks={project.projects[0].deploymentLinks}
                        development={project.projects[0].development}
                        developmentLinks={project.projects[0].developmentLinks}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;