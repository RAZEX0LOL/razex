import {Link, useLocation} from "react-router-dom";

const nav = [
    { name: "Главная", to: "/" },
    { name: "Портфолио", to: "/portfolio" },
    { name: "Контакты", to: "/contact" },
];

export function Header() {
    const location = useLocation();
    return (
        <header className="w-full bg-white/90 backdrop-blur shadow-sm">
            <div className="max-w-4xl mx-auto flex justify-between items-center py-3 px-6">
                <Link to="/" className="text-2xl font-extrabold text-primary tracking-tight">razex.com</Link>
                <nav className="flex gap-5 text-base font-medium">
                    {nav.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`hover:underline transition ${
                                location.pathname === link.to ? "text-primary" : "text-gray-700"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}