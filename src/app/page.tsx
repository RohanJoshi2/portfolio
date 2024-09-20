import { Head } from '@/components/Head';
import { AboutMe } from '@/components/AboutMe';
import { WorkEx } from '@/components/WorkEx';
import { Languages } from '@/components/Languages';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 bg-black">
      <div className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
          <Head/>
          <AboutMe/>
          <WorkEx/>
          <Languages/>
          <Projects/>
      </div>
    </main>
  );
}