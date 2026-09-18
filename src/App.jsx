import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Technologies } from "@/sections/Technologies";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

function App() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Technologies />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;
