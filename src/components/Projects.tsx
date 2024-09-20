import { Project } from '@/components/NestedComponents/Project';
 
export function Projects() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Projects</h2>
            <div className="grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                <Project
                    link="https://github.com/Rohanjoshi2/stopwatch"
                    title="Stopwatch"
                    description="Simple stopwatch app made in React Native."
                    languages={[ "React Native", "React JS", "TypeScript", "CSS"]}
                />
                <Project
                    link="https://github.com/Rohanjoshi2/portfolio"
                    title="Portfolio"
                    description="The portfolio you are looking at right now!"
                    languages={[ "React JS", "Next JS", "TypeScript", "CSS", "Vercel", "Figma" ]}
                />
                <Project
                    link="https://github.com/Rohanjoshi2/hello-prisma"
                    title="HELLO-PRISMA"
                    description="My first time using many things like SQL, Prisma, Docker, and advanced Node JS."
                    languages={[ "HTML", "CSS", "JavaScript", "Node JS", "Express JS", "Prisma ORM", "Postgre SQL", "Docker" ]}
                />
                <Project
                    link="https://github.com/Rohanjoshi2/pokedex"
                    title="Pokedex"
                    description="A fun pokedex app, complete with GUI made entirely in Python. Data from Pokemondb, parsed with BS4."
                    languages={[ "Python", "Pygame", "BS4" ]}
                />
            </div>
        </section>
    )
};