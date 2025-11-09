import { Link, useLocation } from "react-router-dom";

function Footer() {
    const links = [
        { name: "Sobre", href: "#" },
        { name: "Serviços", href: "#" },
    ];

    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isAuthenticated = location.pathname === "/dashboard";


    return (
        <footer
        className={`w-full ${
            isLoginPage ? "bg-secundary-100" : isAuthenticated
          ? "bg-primary-300"
          : "bg-primary-100"
        } `}
        >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Logo */}
            <Link
                to="/"
                className="text-xl font-bold text-secundary-300 sm:text-2xl"
            >
                Listou
            </Link>

            <p className="text-center text-sm text-secundary-300">
                © {new Date().getFullYear()} Listou. Todos os direitos reservados.
            </p>

            {/* Links de Navegação */}
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {links.map((link) => (
                <li key={link.name}>
                    <a
                    href={link.href}
                    className="text-secundary-300 transition hover:opacity-75"
                    >
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
