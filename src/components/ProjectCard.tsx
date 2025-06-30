interface ProjectProps {
    title: string;
    description: string;
    stack: string;
    url: string;
    image?: string;
    repo?: string;
}

export function ProjectCard({ title, description, stack, url, image, repo }: ProjectProps) {
    return (
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col border border-gray-100 hover:shadow-xl transition">
            {image && <img src={image} alt={title} className="w-full h-44 object-cover rounded-xl mb-3" />}
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-xs text-gray-400 mb-3">{stack}</p>
            <div className="flex gap-4 mt-auto">
                <a href={url} target="_blank" className="text-primary hover:underline font-semibold">Сайт</a>
                {repo && <a href={repo} target="_blank" className="text-gray-500 hover:underline">Код</a>}
            </div>
        </div>
    );
}