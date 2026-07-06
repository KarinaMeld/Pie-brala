import {navLinks} from "../../constants";
import gsap from "gsap";
import {useEffect} from "react";

const Navigation = () => {

    useEffect(() => {
        const navScrollDown = gsap.timeline({
            scrollTrigger: {
                trigger: "#nav",
                start: "bottom top",
                scrub: 1
            },
        })

        navScrollDown.fromTo ("nav", {backgroundColor: "black"}, {
            backgroundColor: "#00000070",
            backgroundFilter: "blur(10px)",
            duration: 1.5,
            ease: "power1.inOut"
        });
    })

    return (
        <nav className="fixed top-0 h-20 w-full z-100">
            <div className="flex flex-row justify-between items-center container mx-auto" id="nav">
                <a href="/" className="flex flex-row items-center gap-5">
                    <img src="/logo.jpg" alt="logo" className="w-20 h-20" />
                    <p>Pie brāļa</p>
                </a>
                <ul className="flex flex-col md:flex-row items-center gap-10">
                    {navLinks.map ((link) => (
                        <li key={link.id}>
                            <a href={link.id} className="hover:opacity-75">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navigation
