import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navigation from './components/Navigation'
import Hero from "./components/Hero.tsx";
import Playground from "./components/Playground.tsx";
import Contacts from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function App() {
    const bgRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(bgRef.current, {
            yPercent: -23,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        });
    });

    return (
        <div className="relative flex flex-col">
            <div
                ref={bgRef}
                className="fixed left-0 top-0 w-full h-[130%] -z-10 bg-cover bg-bottom will-change-transform"
                style={{ backgroundImage: "url('/tree.jpg')" }}
            />
            <Navigation />
            <Hero />
            <Playground />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App