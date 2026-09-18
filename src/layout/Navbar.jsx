import { Button } from "../components/Button";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    // { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-10">
            <nav className="container mx-auto px-6 flex item-center justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight">
                    Dy
                </a>

                {/* { Desktop Nav } */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="px-2 py-1 flex items-center gap-2">
                        <div className="glass px-3 py-1 rounded-full flex gap-2 bg-opacity-50">
                            {navLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    key={index}
                                    className="px-4 py-2 hover:text-white text-sm"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu */}
                <button
                    className="md:hidden p-2 text-mist"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? (
                        <FaXmark size={24} />
                    ) : (
                        <FaBars size={24} />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass animate-fade-in">
                    <div className="container py-6 px-6 max-auto flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="text-lg text-mist hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}

                        <Button>Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    );
};
