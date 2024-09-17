export function AboutMe() {
    return (
      <main>
          <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold text-[#FFFFFF]">About Me</h2>
            <p className="text-pretty text-sm text-muted-foreground print:text-[12px]">
              Hi, I am a 9th grader at <span className="hover:underline"><a href="https://dhs.dublinusd.org/" target="_blank" rel="noopener noreferrer">Dublin High School</a></span>
              . My coding journey started at a very young age, when I started using scratch in around first grade, which allowed em to easily make my ideas real. Later on in 2017 my parents enrolled me into <span className="hover:underline"><a href="https://www.hackingtons.com/" target="_blank" rel="noopener noreferrer">Hackingtons</a></span>
              . This is where I started learning web develpment. I use a wide variety of coding languages including: HTML, CSS, JS, Python, Java, C++, and many more listed below.
            </p>
          </section>
      </main>
    )
  };