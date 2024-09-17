import { Job } from '@/components/NestedComponents/Job';
 
export function WorkEx() {
    return (
      <main>
          <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold text-[#FFFFFF]">Work Experience</h2>
          <Job
            link="https://www.thecoderschool.com/"
            title="TheCoderSchool"
            site="Onsite"
            status="Volunteer"
            period="2024 July - 2024 July"
            role="Intern"
            description="As an intern of TheCoderSchool, I had a role helping students follow along with the lesson and debugging their projects."
          />
          </section>
      </main>
    )
};