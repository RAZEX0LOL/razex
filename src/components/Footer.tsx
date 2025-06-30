export function Footer() {
    return (
        <footer className="w-full bg-white/90 backdrop-blur py-5 mt-12 shadow-inner border-t">
            <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} razex.com — Rasul Khattaev
            </div>
        </footer>
    );
}