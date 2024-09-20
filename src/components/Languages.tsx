import { Language } from '@/components/NestedComponents/Language';
 
export function Languages() {
    return (
        <section className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Languages/Softwares</h2>
            <div className="flex flex-wrap gap-1">
                <Language language='HTML'/>
                <Language language='CSS'/>
                <Language language='Tailwind CSS'/>
                <Language language='JavaScript'/>
                <Language language='TypeScript'/>
                <Language language='React JS'/>
                <Language language='Next JS'/>
                <Language language='React Native'/>
                <Language language='Node JS'/>
                <Language language='Express JS'/>
                <Language language='Vercel'/>
                <Language language='Prisma ORM'/>
                <Language language='Postgre SQL'/>
                <Language language='Docker'/>
                <Language language='Python'/>
                <Language language='PixelPad'/>
                <Language language='Pygame'/>
                <Language language='Tkinter'/>
                <Language language='Pandas'/>
                <Language language='BS4'/>
                <Language language='C++'/>
                <Language language='SDL2'/>
                <Language language='Vex V5'/>
                <Language language='Git'/>
                <Language language='GitHub'/>
                <Language language='GitLens'/>
                <Language language='Figma'/>
                <Language language='Blender'/>
            </div>
        </section>
    )
};