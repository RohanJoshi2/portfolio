import Image from "next/image";
import { GlobeIcon, GitHubLogoIcon, EnvelopeClosedIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@/components/NestedComponents/Link';

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
        <Link link="https://github.com/RohanJoshi2">
          <GitHubLogoIcon className="h-5 w-5" />
        </Link>
        <Link link="https://www.instagram.com/rohanjoshi1000/">
          <InstagramLogoIcon className="h-5 w-5" />
        </Link>
        <Link link="mailto:rohanjoshi7678@gmail.com">
          <EnvelopeClosedIcon className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}