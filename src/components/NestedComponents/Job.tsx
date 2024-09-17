import React from 'react';

interface JobProps {
  link: string;
  title: string;
  site: string;
  status: string;
  period: string;
  role: string;
  description: string;
}

export const Job: React.FC<JobProps> = ({ link, title, site, status, period, role, description }) => {
  return (
    <main>
      <div>
        <div className="flex flex-col space-y-1.5">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h2 className="inline-flex items-center justify-center gap-x-1 font-bold leading-none">
              <a className="hover:underline" href={link}>{title}</a>
              <span className="inline-flex gap-x-1">
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">{site}</div>
                <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">{status}</div>
              </span>
            </h2>
            <div className="text-sm tabular-nums text-gray-500">{period}</div>
          </div>
          <h4 className="text-sm leading-none font-semithin print:text-[12px]">{role}</h4>
        </div>
        <div className="text-pretty text-muted-foreground mt-2 text-xs print:text-[10px] text-[#b7b7b7]">{description}</div>
      </div>
    </main>
  );
};
