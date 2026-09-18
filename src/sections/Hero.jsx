import { Button } from "@/components/Button";
import { BorderButton } from "@/components/BorderButton";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex align-center overflow-hidden items-center">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.png"
                    alt="Hero"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/ to-black/50"></div>
            </div>

            <div>
                {[...Array(30)].map((_, i) => (
                    <div
                        className="absolute w-1.5 h-1.5 opacity-90"
                        style={{
                            backgroundColor: "#255f38",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container px-4 mx-auto relative z-5">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-flex item-center gap-2 px-4 py-2 rounded-full bg-black/90 text-mist">
                                <span className="flex gap-1 items-center">
                                    <span className="bg-mallard w-2 h-2 rounded-full inline-block mr-1"></span>
                                    <span>Web Developer</span>
                                </span>
                            </span>
                        </div>
                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-white text-5xl">
                                Mostly Coffee, Partly Code, Driven by Syntax
                            </h1>
                            <p className="text-mist">
                                Hi, I'm Daniel Maddela, also known as Danyong -
                                a web developer specialised in WordPress and
                                front end. I build fast and responsive websites.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <Button
                                size="lg"
                                href="mailto:danyongaseo@gmail.com"
                            >
                                Contact me
                            </Button>
                            <BorderButton href="/Daniel_Maddela_Resume.pdf">
                                Download CV
                            </BorderButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
