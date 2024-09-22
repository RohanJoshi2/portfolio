import React from 'react';
import { Project } from '@/components/NestedComponents/Project';

interface ProjectData {
    link: string;
    title: string;
    description: string;
    languages: string[];
}

const projects: ProjectData[] = [
    {
        link: "https://github.com/Rohanjoshi2/portfolio",
        title: "Portfolio",
        description: "The portfolio you are looking at right now!",
        languages: [ "React JS", "Next JS", "TypeScript", "CSS", "Vercel", "Figma", "Radix UI" ],
    },
    {
        link: "https://github.com/Rohanjoshi2/stopwatch",
        title: "Stopwatch",
        description: "Simple stopwatch app made in React Native.",
        languages: [ "React Native", "React JS", "TypeScript", "CSS" ],
    },
    {
        link: "https://github.com/RohanJoshi2/Login-System",
        title: "Login System",
        description: "My first time using many things like SQL, Prisma, Docker, and advanced Node JS.",
        languages: [ "HTML", "CSS", "JavaScript", "Node JS", "Express JS", "Prisma ORM", "Postgre SQL", "Docker" ],
    },
    {
        link: "https://github.com/Rohanjoshi2/pokedex-app",
        title: "Pokedex",
        description: "A fun pokedex app, complete with GUI made entirely in Python. Data from Pokemondb, parsed with BS4.",
        languages: [ "Python", "Pygame", "BS4" ],
    },
];

export function Projects() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Projects</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                        languages={project.languages}
                    />
                ))}
            </div>
        </section>
    );
};