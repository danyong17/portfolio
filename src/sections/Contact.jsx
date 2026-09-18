import { Button } from "@/components/Button";
import { BorderButton } from "@/components/BorderButton";

export const Contact = () => {
    return (
        <section>
            <div className="relative pb-22 md:pt-22">
                <div className="container mx-auto px-4">
                    <div className="bg-[linear-gradient(180deg,rgba(15,34,21,.72),rgba(8,22,13,.7))] border-solid border-1 border-metal rounded-lg p-5 lg:p-15 md:p-10 text-mist">
                        <div className="grid lg:grid-cols-12 gap-x-4 gap-y-10 md:gap-y-7">
                            <div className="col-span-12">
                                <div>
                                    <span className="inline-flex rounded-full bg-metal text-white px-4 py-2">
                                        Get in touch
                                    </span>
                                </div>
                            </div>
                            <div className="md:col-span-8 col-span-12">
                                <div className="space-y-7">
                                    <div className="space-y-3 lg:w-100">
                                        <h2 className="text-white text-4xl">
                                            Have a Project in Mind?
                                        </h2>
                                        <p>
                                            I'm open to full-time opportunities.
                                            Let's build something great
                                            together.
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
                            <div className="md:col-span-4 col-span-12 grid gap-3">
                                <div>
                                    <span className="block text-pea font-semibold">
                                        Email
                                    </span>
                                    <a
                                        className=" block"
                                        href="mailto:danyongaseo@gmail.com"
                                    >
                                        danyongaseo@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <span className="block text-pea font-semibold">
                                        Location
                                    </span>
                                    <span className=" block">Philippines</span>
                                </div>
                                <div>
                                    <span className="block text-pea font-semibold">
                                        Availability
                                    </span>
                                    <span className=" block">
                                        Open for a new role
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
