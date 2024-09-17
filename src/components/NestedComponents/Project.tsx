import React from 'react';
import { ProjectLanguage } from '@/components/NestedComponents/ProjectLanguage';

interface ProjectProps {
  link: string;
  title: string;
  description: string;
  languages: string[];
}

export const Project: React.FC<ProjectProps> = ({ link, title, description, languages }) => {
  return (
    <main>
      <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
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
    </main>
  );
};