import {useRef} from "react";

export function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(form.current!);
        const mailto = `mailto:rkhattaev@yandex.ru?subject=Сообщение с сайта&body=${encodeURIComponent(
            `Имя: ${data.get("name")}
Email: ${data.get("email")}
Сообщение: ${data.get("message")}`
        )}`;
        window.location.href = mailto;
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
            <input name="name" required placeholder="Имя" className="w-full p-2 border rounded" />
            <input name="email" type="email" required placeholder="Email" className="w-full p-2 border rounded" />
            <textarea name="message" required placeholder="Сообщение" rows={4} className="w-full p-2 border rounded" />
            <div className={'flex items-center justify-center'}>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Отправить</button>
            </div>
        </form>
    );
}