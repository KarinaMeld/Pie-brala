import navLinks from "../../constants/index.ts";

const Navigation = () => {
    return (
        <nav className="bg-black text-white fixed top-0 w-full z-100 flex flex-row justify-between items-center md:px-100">
            <a href="/" className="flex flex-row items-center gap-10">
                <img src="/logo.jpg" alt="logo" className="w-20 h-20" />
                <p>Pie brāļa</p>
            </a>
            <ul className="flex flex-col md:flex-row items-center gap-10">
                {navLinks.map ((link) => (
                    <li key={link.id}>
                        <a href={link.id}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation
