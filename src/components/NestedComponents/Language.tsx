import React from 'react';

interface LanguageProps {
  language: string;
}

export const Language: React.FC<LanguageProps> = ({ language }) => {
  return (
    <div className="rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap print:text-[10px] text-white hover:bg-zinc-700 text-[#FFFFFF]" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {language}
    </div>
  );
};