import React from 'react';

interface ProjectLanguageProps {
  language: string;
}

export const ProjectLanguage: React.FC<ProjectLanguageProps> = ({ language }) => {
  return (
    <main>
      <div className="inline-flex items-center rounded-md border font-semibold transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight hover:shadow-gray-700 hover:shadow-xl  hover:translate-y-[-2px]">
        {language}
      </div>
    </main>
  );
};
