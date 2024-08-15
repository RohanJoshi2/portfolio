import { link } from "fs";
import { Space_Mono } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <div className="mx-auto w-full max-w-2xl space-y-8 bg-black print:space-y-4">
        <div className="flex flex-col items-center justify-center">
        <Image
          className="mb-5"
          src="Logos/Function_logo.svg"
          alt="Function Logo"
          height="100"
          width="244"
        ></Image>
        <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
          <a className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" href="https://www.google.com/maps/place/San Francisco Bay Area,+CA" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe h-3 w-3">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          Based in the Bay Area
          </a>
        </p>
        </div>
        <hr></hr>
        <div>
          <a href="https://github.com/RohanJoshi2" target="_blank" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px">
              <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-darkreader-inline-fill="" className="--darkreader-inline-fill: currentColor;"></path>
            </svg>
          </a>
          <a href="mailto:rohanjoshi7678@gmail.com" className="m-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8">
            <svg viewBox="0 0 512 512" stroke="currentColor" fill="currentColor" stroke-width="0" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" className="--darkreader-inline-stroke: currentColor; --darkreader-inline-fill: currentColor;" data-darkreader-inline-fill="">
              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
            </svg>
          </a>
        </div>
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold text-[#FFFFFF]">About Me</h2>
            <p className="text-pretty text-sm text-muted-foreground print:text-[12px]">
              Hi, I am a 9th grader at <span className="hover:underline"><a href="https://dhs.dublinusd.org/" target="_blank" rel="noopener noreferrer">Dublin High School</a></span>
              . My coding journey started at a very young age, when I started using scratch in around first grade, which allowed em to easily make my ideas real. Later on in 2017 my parents enrolled me into <span className="hover:underline"><a href="https://www.hackingtons.com/" target="_blank" rel="noopener noreferrer">Hackingtons</a></span>
              . This is where I started learning web develpment. I use a wide variety of coding languages including: HTML, CSS, JS, Python, Java, C++, and many more listed below.
            </p>
          </section>
          <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-[#FFFFFF]">Work Experience</h2>
          <div className="rounded-lg bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h2 className="inline-flex items-center justify-center gap-x-1 font-bold leading-none">
                  <a className="hover:underline" href="https://www.thecoderschool.com/">TheCoderSchool</a>
                  <span className="inline-flex gap-x-1">
                    <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Onsite</div>
                    <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Volunteer</div>
                  </span>
                </h2>
                <div className="text-sm tabular-nums text-gray-500">2024 July</div>
              </div>
              <h4 className="text-sm leading-none font-semithin print:text-[12px]">Intern
              </h4>
            </div>
            <div className="text-pretty text-muted-foreground mt-2 text-xs print:text-[10px] text-[#b7b7b7]">As an intern of TheCoderSchool, I had a role helping students follow along with the lesson and debugging their projects.</div>
          </div>
          </section>
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Languages/Softwares</h2>
            <div className="flex flex-wrap gap-1">
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">HTML</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">CSS</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">JavaScript</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">React JS</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Next JS</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Tailwind CSS</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Postgre SQL</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Prisma ORM</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Node JS</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Docker</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Figma</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Blender</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Vercel</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Java</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">C++</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Python</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">TypeScript</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Git/GitHub</div>
              <div className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700">Pygame</div>
            </div>
          </section>
          <section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
                    <div className="flex flex-col space-y-1.5">
                        <div className="space-y-1">
                            <h3 className="font-semibold tracking-tight text-base"><a href="//github.com/Rohanjoshi2/hello-prisma" target="_blank" className="inline-flex items-center gap-1 hover:underline">HELLO-PRISMA</a></h3>
                            <p className="text-muted-foreground text-xs print:text-[10px]">My first time using many things like SQL, Prisma, Docker, and advanced Node JS.</p>
                        </div>
                    </div>
                    <div className="text-pretty text-sm text-muted-foreground mt-auto flex">
                        <div className="mt-2 flex flex-wrap gap-1">
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">HTML</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">CSS</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">JS</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Node JS</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Prisma ORM</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Postgre SQL</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Docker</div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
                    <div className="flex flex-col space-y-1.5">
                        <div className="space-y-1">
                            <h3 className="font-semibold tracking-tight text-base"><a href="//github.com/Rohanjoshi2/pokedex" target="_blank" className="inline-flex items-center gap-1 hover:underline">Pokedex</a></h3>
                            <p className="text-muted-foreground text-xs print:text-[10px]">A fun pokedex app, complete with GUI made entirely in Python. Data from <a href="//pokemondb.net" target="_blank" className="inline-flex items-center gap-1 hover:underline">Pokemondb</a></p>
                        </div>
                    </div>
                    <div className="text-pretty text-sm text-muted-foreground mt-auto flex">
                        <div className="mt-2 flex flex-wrap gap-1">
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Python</div>
                            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">Pygame</div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </div>
    </main>
  );
}

