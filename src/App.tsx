import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

import Navigation from './components/Navigation'
import Hero from "./components/Hero.tsx";
import Playground from "./components/Playground.tsx";
import Contacts from "./components/Contacts.tsx";
import Footer from "./components/Footer.tsx";

gsap.registerPlugin (ScrollTrigger, SplitText);

function App() {

    return (
        <div className="flex flex-col">
            <Navigation />
            <Hero />
            <Playground />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
