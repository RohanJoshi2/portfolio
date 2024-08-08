import { link } from "fs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-xl lg:flex">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">rohan.joshi()</code>
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">
            - 👋 Hi, I’m Rohan Joshi <br></br>
            - 📫 Email: rohanjoshi7678@gmail.com <br></br>
            - 😄 Pronouns: he/him <br></br>
            - ⌚ Timezone: UTC - 7:00/PDT <br></br>
          </code>
        </p>
      </div>

      <div className="mb-32 grid text-center lg:m lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <a
          href="#languages"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Languages{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="#tools"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Tools{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>

        <a
          href="#projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>

      <div id="languages">
        <h1 className="text-3xl">Languages</h1>
        <div>
          <div className="flex">
            <h1 className="text-lg">Java</h1>
            <Image
              src="Logos/Language_logos/Java_logo.svg"
              alt="Java Logo"
              width="25"
              height="60"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">C++</h1>
            <Image
              src="Logos/Language_logos/C++_logo.svg"
              alt="C++ Logo"
              width="30"
              height="25"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">Python</h1>
            <Image
              src="Logos/Language_logos/Python_logo.svg"
              alt="Python Logo"
              width="25"
              height="25"
            ></Image>   
          </div>
          <div className="flex">
            <h1 className="text-lg">HTML,CSS</h1>
            <Image
              src="Logos/Language_logos/Web_Dev_logos/HTML_logo.svg"
              alt="HTML Logo"
              width="30"
              height="40"
            ></Image>   
            <Image
              src="Logos/Language_logos/Web_Dev_logos/CSS_logos/CSS3_logo.svg"
              alt="CSS Logo"
              width="30"
              height="40"
            ></Image> 
          </div>
          <div className="flex">
            <h1 className="text-lg">TailwindCSS</h1>
            <Image
              src="Logos/Language_logos/Web_Dev_logos/CSS_logos/TailwindCSS_logo.svg"
              alt="TailwindCSS Logo"
              width="40"
              height="40"
            ></Image>
          </div>
          <div className="flex">
            <h1 className="text-lg">Javascript</h1>
            <Image
              src="Logos/Language_logos/Web_Dev_logos/JS_logos/JavaScript_logo.svg"
              alt="JavaScript Logo"
              width="50"
              height="30"
            ></Image>
          </div>
          <div className="flex">
            <h1 className="text-lg">ReactJS</h1>
            <Image
              src="Logos/Language_logos/Web_Dev_logos/JS_logos/ReactJS_logo.svg"
              alt="React Logo"
              width="30"
              height="30"
            ></Image>
          </div>
          <div className="flex">
            <h1 className="text-lg">NextJS</h1>
            <div className="bg-white rounded-3xl">
              <Image
                src="Logos/Language_logos/Web_Dev_logos/JS_logos/NextJS_logo.svg"
                alt="Next Logo"
                width="25"
                height="30"
              ></Image>
            </div>
          </div>
          <div className="flex">
            <h1 className="text-lg">TypeScript</h1>
            <Image
              src="Logos/Language_logos/Web_Dev_logos/TypeScript_logo.svg"
              alt="TypeScript Logo"
              width="30"
              height="30"
            ></Image>
          </div>
        </div>
      </div>

      <div id="tools">
        <h1 className="text-3xl">Tools</h1>
        <div className="flex">
            <h1 className="text-lg">Notion</h1>
            <Image
              src="Logos/Software_logos/Notion_logo.svg"
              alt="Notion Logo"
              width="30"
              height="60"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">Figma</h1>
            <Image
              src="Logos/Software_logos/Figma_logo.svg"
              alt="Figma Logo"
              width="30"
              height="60"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">PrismaORM</h1>
            <Image
              src="Logos/Software_logos/Prisma_logo.svg"
              alt="Prisma Logo"
              width="30"
              height="60"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">Docker</h1>
            <Image
              src="Logos/Software_logos/Docker_logo.svg"
              alt="Docker Logo"
              width="30"
              height="60"
            ></Image>    
          </div>
          <div className="flex">
            <h1 className="text-lg">PostgreSQL</h1>
            <Image
              src="Logos/Software_logos/PostgreSQL_logo.svg"
              alt="PostgreSQL Logo"
              width="30"
              height="60"
            ></Image>    
          </div>
      </div>

      <div id="projects">
        <h1 className="text-3xl">Projects</h1>
        <a href="https://github.com/RohanJoshi2/hello-prisma">Prisma Test</a> <br></br>
        <a href="https://github.com/RohanJoshi2/pokedex">Pokedex</a> <br></br>
      </div>
    </main>
  );
}
