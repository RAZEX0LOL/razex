import {ContactForm} from "../components/ContactForm";

export default function Contact() {
    return (
        <main className="min-h-[calc(100vh-120px)] flex justify-center items-center bg-gray-100 px-2">
            <section className="w-full max-w-xl bg-white rounded-3xl shadow-xl px-8 py-10">
                <h1 className="text-2xl font-bold mb-6 text-primary text-center">Связаться со мной</h1>
                <div className="mb-8 space-y-2 text-center">
                    <div>
                        <span className="font-semibold">Email:</span>{" "}
                        <a href="mailto:rkhattaev@yandex.ru" className="underline">rkhattaev@yandex.ru</a>
                    </div>
                    <div>
                        <span className="font-semibold">Telegram:</span>{" "}
                        <a href="https://t.me/Nidhogg_0" className="underline" target="_blank">@Nidhogg_0</a>
                    </div>
                    <div>
                        <span className="font-semibold">Телефон:</span>{" "}
                        <a href="tel:+79648472450" className="underline">+7 964 847-24-50</a>
                    </div>
                    <div>
                        <span className="font-semibold">GitHub:</span>{" "}
                        <a href="https://github.com/RAZEX0LOL" className="underline" target="_blank">RAZEX0LOL</a>
                    </div>
                    <div>
                        <span className="font-semibold">HH.ru:</span>{" "}
                        <a href="https://saratov.hh.ru/resume/fb6b7baeff09e061130039ed1f544d76366a53" className="underline" target="_blank">Профиль на HH.ru</a>
                    </div>
                </div>
                <ContactForm />
            </section>
        </main>
    );
}