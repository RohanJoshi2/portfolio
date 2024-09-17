'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ProjectLanguage } from '@/components/NestedComponents/ProjectLanguage';

const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

interface ProjectProps {
  link: string;
  title: string;
  description: string;
  languages: string[];
}

export const Project: React.FC<ProjectProps> = ({ link, title, description, languages }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Tilt
          className="parallax-effect-tilt"
          perspective={500}
          scale={1.02}
          tiltMaxAngleX={-20}
          tiltMaxAngleY={-20}
          glareEnable={false}  
        >
          <div
            className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3"
            style={{ boxShadow: 'none', margin: '0' }} // Remove any extra shadows and margins
          >
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                    {title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-xs print:text-[10px]">{description}</p>
              </div>
            </div>
            <div className="text-pretty text-sm text-muted-foreground mt-auto flex">
              <div className="mt-2 flex flex-wrap gap-1">
                {languages.map((lang, index) => (
                  <ProjectLanguage key={index} language={lang} />
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      ) : (
        <div
          className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3"
          style={{ boxShadow: 'none', margin: '0' }}
        >
        </div>
      )}
    </div>
  );
};
