import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navigation from './components/Navigation'
import Hero from "./components/Hero.tsx";
import Menu from "./components/Menu.tsx";
import Playground from "./components/Playground.tsx";
import Contacts from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function App() {
    const bgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to(bgRef.current, {
            yPercent: -23,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });
    });

    return (
        <div className="relative flex flex-col">
            <img
                ref={bgRef}
                src="/tree.jpg"
                alt=""
                aria-hidden="true"
                className="fixed left-0 top-0 w-full h-[130%] -z-10 object-cover object-bottom will-change-transform"
            />
            <Navigation />
            <Hero />
            <Menu />
            <Playground />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App