"use client";

import Image from "next/image";
import { GlobeIcon, GitHubLogoIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@/components/NestedComponents/Link';
import { useState, useEffect } from 'react';

// Custom hook for media query
const useMedia = (query: string, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

type IconType = 'github' | 'instagram' | 'email' | null;

export function Head() {
  const [hoveredIcon, setHoveredIcon] = useState<IconType>(null);
  const isSmallScreen = useMedia('(max-width: 640px)', false);

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="mb-5"
          src="/Logos/Function_logo.svg"
          alt="Function Logo"
          height={isSmallScreen ? 80 : 100}
          width={isSmallScreen ? 195 : 244}
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
        <div onMouseEnter={() => setHoveredIcon('github')} onMouseLeave={() => setHoveredIcon(null)}>
          <Link link="https://github.com/RohanJoshi2">
            <GitHubLogoIcon className="h-5 w-5" />
          </Link>
        </div>
        <div onMouseEnter={() => setHoveredIcon('instagram')} onMouseLeave={() => setHoveredIcon(null)}>
          <Link link="https://www.instagram.com/rohanjoshi1000/">
            <InstagramLogoIcon className="h-5 w-5" />
          </Link>
        </div>
        <div onMouseEnter={() => setHoveredIcon('email')} onMouseLeave={() => setHoveredIcon(null)}>
          <Link link="mailto:rohanjoshi7678@gmail.com">
            {hoveredIcon === 'email' ? (
              <EnvelopeOpenIcon className="h-5 w-5" />
            ) : (
              <EnvelopeClosedIcon className="h-5 w-5" />
            )}
          </Link>
        </div>
      </div>
    </section>
  )
}