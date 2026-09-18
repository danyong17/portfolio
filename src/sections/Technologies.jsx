import { FaWordpress } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { SiBricks } from "react-icons/si";
import { SiOxygen } from "react-icons/si";
import { FaElementor } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiWpengine } from "react-icons/si";

export const Technologies = () => {
    return (
        <section>
            <div className="relative py-22">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12">
                        <div className="space-y-7 md:col-span-7 col-span-12">
                            <div>
                                <span className="inline-flex rounded-full bg-pea text-white px-4 py-2">
                                    Technologies
                                </span>
                            </div>
                            <div>
                                <div className="space-y-3">
                                    <h2 className="text-white text-4xl md:w-93 w-full">
                                        Tools & Technologies I Work With
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 grid xl:grid-cols-9 md:grid-cols-5 xs:grid-cols-3 grid-cols-2 mt-15 gap-4 text-center font-semibold">
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaWordpress className="text-3xl text-mist" />
                                <span className="text-mist">WordPress</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <SiWoocommerce className="text-3xl text-mist" />
                                <span className="text-mist">Woocommerce</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaWordpressSimple className="text-3xl text-mist" />
                                <span className="text-mist">ACF</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <SiBricks className="text-3xl text-mist" />
                                <span className="text-mist">Bricks</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <SiOxygen className="text-3xl text-mist" />
                                <span className="text-mist">Oxygen</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaElementor className="text-3xl text-mist" />
                                <span className="text-mist">Elementor</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaPhp className="text-3xl text-mist" />
                                <span className="text-mist">PHP</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <IoLogoJavascript className="text-3xl tet-m,ist" />
                                <span className="text-mist">JavaScript</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaHtml5 className="text-3xl text-mist" />
                                <span className="text-mist">HTML5</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaCss3 className="text-3xl text-mist" />
                                <span className="text-mist">CSS3</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaSass className="text-3xl text-mist" />
                                <span className="text-mist">SASS</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaGithub className="text-3xl tex-mist" />
                                <span className="text-mist">Git</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <VscCode className="text-3xl text-mist" />
                                <span className="text-mist">VS Code</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <FaBootstrap className="text-3xl text-mist" />
                                <span className="text-mist">Bootstrap</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <RiTailwindCssFill className="text-3xl text-mist" />
                                <span className="text-mist">Tailwind</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <RiReactjsFill className="text-3xl tet-mist" />
                                <span className="text-mist">ReactJS</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <SiVite className="text-3xl text-mist" />
                                <span className="text-mist">Vite</span>
                            </div>
                            <div className="flex flex-col gap-2 items-center px-4 py-5 border-1 border-pea/30 rounded-2xl bg-black/20">
                                <SiWpengine className="text-3xl text-mist" />
                                <span className="text-mist">WP Engine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
