import React from 'react';

interface LinkProps {
  link: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-white text-white hover:text-black h-8 w-8"
    >
      {children}
    </a>
  );
};
