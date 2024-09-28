'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ProjectLanguage } from '@/components/NestedComponents/ProjectLanguage';
import { useMedia } from 'react-use';

const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

interface ProjectProps {
  link: string;
  title: string;
  description: string;
  languages: string[];
}

export const Project: React.FC<ProjectProps> = ({ link, title, description, languages }) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMedia('(max-width: 768px)'); // Tailwind's md breakpoint

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ProjectContent = () => (
      <div
          className="project-card rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3 h-full w-full"
          style={{ boxShadow: 'none', margin: '0' }}
      >
        <div className="flex flex-col space-y-1.5 flex-grow">
          <div className="space-y-1">
            <h3 className="font-semibold tracking-tight text-base">
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline text-[#FFFFFF]">
                {title}
              </a>
            </h3>
            <p className="text-muted-foreground text-xs print:text-[10px] text-[#FFFFFF]">{description}</p>
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
  );

  return (
      <div className="flex justify-center h-[250px] w-full">
        {isMounted ? (
            isMobile ? (
                <ProjectContent />
            ) : (
                <Tilt
                    className="parallax-effect-tilt"
                    perspective={500}
                    scale={1.02}
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    glareEnable={false}
                    style={{ height: '100%', width: '100%' }}
                >
                  <ProjectContent />
                </Tilt>
            )
        ) : (
            <ProjectContent />
        )}
      </div>
  );
};