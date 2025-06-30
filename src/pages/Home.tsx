import avatar from "/avatar.jpeg";
import {Link} from "react-router-dom";

const skills = [
    "React", "Next.js","JavaScript", "TypeScript", "Node.js", "Redux Toolkit", "MobX",
    "Tailwind CSS", "SCSS", "Git", "Docker"
];

export default function Home() {
    return (
        <main className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gray-100 px-2">
            <section className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center">
                <img
                    src={avatar}
                    alt="Rasul Khattaev"
                    className="w-28 h-28 rounded-full border-4 border-primary shadow mb-4 object-cover"
                />
                <h1 className="text-3xl font-bold mb-1 text-center">Rasul Khattaev</h1>
                <p className="text-primary font-semibold mb-2 text-lg">Frontend-разработчик</p>
                <p className="text-gray-600 text-center mb-4">
                    React, Next.js, TypeScript, Node.js, Tailwind CSS, SCSS, Redux Toolkit, MobX
                </p>
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow bg- hover:bg-blue-700 transition"
                    >
                        Скачать резюме (PDF)
                    </a>
                    <a
                        href="https://github.com/RAZEX0LOL"
                        target="_blank"
                        className="bg-gray-800 text-white px-5 py-2 rounded-xl shadow hover:bg-gray-900 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rasul-khattaev-27a55a349"
                        target="_blank"
                        className="bg-blue-500 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-600 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://saratov.hh.ru/resume/fb6b7baeff09e061130039ed1f544d76366a53"
                        target="_blank"
                        className="bg-red-500 text-white px-5 py-2 rounded-xl shadow hover:bg-red-600 transition"
                    >
                        HH.ru
                    </a>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mb-7">
                    {skills.map(skill => (
                        <span
                            key={skill}
                            className="border border-blue-200 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
              {skill}
            </span>
                    ))}
                </div>
                <Link
                    to="/portfolio"
                    className="text-primary font-semibold hover:underline transition"
                >
                    Смотреть портфолио &rarr;
                </Link>
            </section>
        </main>
    );
}