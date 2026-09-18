import { FaArrowRight } from "react-icons/fa";

export const Projects = () => {
    return (
        <section>
            <div className="relative py-22">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12">
                        <div className="space-y-7 md:col-span-7 col-span-12">
                            <div>
                                <span className="inline-flex rounded-full bg-mist text-black px-4 py-2">
                                    Featured Projects
                                </span>
                            </div>
                            <div>
                                <div className="space-y-3">
                                    <h2 className="text-white text-4xl">
                                        Some of My Recent Works
                                        <span className="text-xs hidden ml-2 text-mist">
                                            (Under a company)
                                        </span>
                                    </h2>
                                    <p>
                                        A few examples of projects I've crafted
                                        with performance, accessibility and user
                                        experience in mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 mt-15">
                        <div className="flex flex-col border-solid border-1 border-metal rounded-xl">
                            <div className="relative aspect-video bg-metal bg-[url('/dunhamshaw.webp')] bg-contain bg-center bg-no-repeat"></div>
                            <div className="px-5 py-6 flex flex-col gap-2 h-full">
                                <div className="text-pea text-sm tracking-wide uppercase font-semibold">
                                    WordPress
                                </div>
                                <div className="text-white text-lg">
                                    Corporate Website
                                </div>
                                <p>
                                    Custom-coded solutions that combine striking
                                    design with lightweight architecture,
                                    lightning-fast load times, and built-in SEO.
                                </p>
                                <a
                                    className="text-sm mt-2 flex justify-between items-center hover:text-pea transition-all duration-200 ease-out"
                                    href="https://dunhamshaw.com.au/"
                                    target="_blank"
                                >
                                    <span>View Case Study</span>
                                    <FaArrowRight className="text-pea text-lg" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col border-solid border-1 border-metal rounded-xl">
                            <div className="relative aspect-video bg-metal bg-[url('/fleetcrew.webp')] bg-contain bg-center bg-no-repeat"></div>
                            <div className="px-5 py-6 flex flex-col gap-2 h-full">
                                <div className="text-pea text-sm tracking-wide uppercase font-semibold">
                                    Woocommerce
                                </div>
                                <div className="text-white text-lg">
                                    Request a Quote
                                </div>
                                <p>
                                    Developed a WooCommerce vehicle hire website
                                    replacing checkout with custom quote
                                    workflows for tailored rental bookings.
                                </p>
                                <a
                                    className="text-sm mt-2 flex justify-between items-center hover:text-pea transition-all duration-200 ease-out"
                                    href="https://www.fleetcrew.com.au/"
                                    target="_blank"
                                >
                                    <span>View Case Study</span>
                                    <FaArrowRight className="text-pea text-lg" />
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col border-solid border-1 border-metal rounded-xl">
                            <div className="relative aspect-video bg-metal bg-[url('/migrant.webp')] bg-contain bg-center bg-no-repeat"></div>
                            <div className="px-5 py-6 flex flex-col gap-2">
                                <div className="text-pea text-sm tracking-wide uppercase font-semibold">
                                    Bricks Builder
                                </div>
                                <div className="text-white text-lg">
                                    Corporate Website
                                </div>
                                <p>
                                    Engineered high-performance, modular core
                                    systems using Bricks Builder to deliver
                                    responsive, pixel-perfect sites with
                                    lightning-fast user experiences.
                                </p>
                                <a
                                    className="text-sm mt-2 flex justify-between items-center hover:text-pea transition-all duration-200 ease-out"
                                    href="https://migrantslegal.com.au/"
                                    target="_blank"
                                >
                                    <span>View Case Study</span>
                                    <FaArrowRight className="text-pea text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
