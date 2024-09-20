import Image from "next/image";
import { GlobeIcon, GitHubLogoIcon, EnvelopeClosedIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

export function Head() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="mb-5"
          src="Logos/Function_logo.svg"
          alt="Function Logo"
          height="100"
          width="244"
        />
        <p className="max-w-md text-center text-xs text-muted-foreground">
            <a className="inline-flex items-center gap-x-1.5 hover:underline" href="https://www.google.com/maps/place/San Francisco Bay Area,+CA" target="_blank" rel="noopener noreferrer">
                <GlobeIcon className="h-3 w-3" />
                <span>Based in the Bay Area</span>
            </a>
        </p>
      </div>
      <hr className="my-8 w-full" />
      <div className="flex justify-center space-x-4">
        <a
        href="https://github.com/RohanJoshi2"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-white h-8 w-8"
        >
            <GitHubLogoIcon className="h-5 w-5 text-white hover:text-black transition-colors" />
        </a>
        <a
          href="https://www.instagram.com/rohanjoshi1000/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:bg-white h-8 w-8"
        >
          <InstagramLogoIcon className="h-5 w-5 text-white hover:text-black transition-colors" />
        </a>
        <a
          href="mailto:rohanjoshi7678@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:bg-white h-8 w-8"
        >
          <EnvelopeClosedIcon className="h-5 w-5 text-white hover:text-black transition-colors" />
        </a>
      </div>
    </section>
  )
}