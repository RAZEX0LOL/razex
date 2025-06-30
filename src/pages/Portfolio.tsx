import {projects} from "../data/projects";
import {ProjectCard} from "../components/ProjectCard";

export default function Portfolio() {
    return (
        <main className="min-h-[calc(100vh-120px)] flex justify-center bg-gray-100 px-2">
            <section className="w-full max-w-4xl mx-auto py-10">
                <h1 className="text-2xl font-bold mb-8 text-center text-primary">Портфолио</h1>
                <h2 className={'text-2xl font-bold mb-8 text-center text-primary'}>Множество проектов разработано совместно с МинЦифры и не подлежит раскрытию (NDA), здесь вы можете просмотреть проекты выполненные за последнее время</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((proj) => (
                        <ProjectCard key={proj.title} {...proj} />
                    ))}
                </div>
            </section>
        </main>
    );
}