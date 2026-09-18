import { FaWordpress } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";

export const About = () => {
    return (
        <section
            className="relative pt-20 pb-35 bg-[radial-gradient(circle_at_70%_20%,rgba(45,108,62,.18),transparent_35%),linear-gradient(180deg,#07110a_0%,#061009_42%,#07140c_100%)] before:content-[''] before:absolute before:left-[-5%] before:w-[110%] before:h-[120px] before:border before:border-solid before:border-[rgba(91,151,100,0.14)] before:border-x-0 before:rounded-[50%_50%_0_0_/_100%_100%_0_0] before:rotate-[-4deg] after:content-[''] after:absolute after:left-[-5%] after:top-[70px] after:w-[110%] after:h-[120px] after:border after:border-solid after:border-[rgba(91,151,100,0.14)] after:border-x-0 after:rounded-[50%_50%_0_0_/_100%_100%_0_0] after:rotate-[6deg]
"
        >
            <div className="container z-1 relative px-4 mx-auto">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="space-y-9">
                        <div className="space-y-7 max-w-xl">
                            <div className="">
                                <span className="inline-flex rounded-full bg-mist text-black px-4 py-2">
                                    About Me
                                </span>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-white text-4xl">
                                    I build solutions <br />
                                    that make an impact.
                                </h2>
                                <p>
                                    With more than 10 years of experience in web
                                    development, I specialise in WordPress theme
                                    development, custom plugins, ACF blocks,
                                    performance optimisation and website
                                    maintenance.
                                </p>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-5 grid-cols-2 gap-4 color-white font-semibold text-sm">
                            <div className="flex flex-col gap-3 bg-black/20 hover:bg-black/30 px-3 py-4 rounded-lg border-solid border-1 border-white/10">
                                <FaWordpress className="text-2xl" />
                                WordPress Development
                            </div>
                            <div className="flex flex-col gap-3 bg-black/20 hover:bg-black/30 px-3 py-4 rounded-lg border-solid border-1 border-white/10">
                                <MdOutlineDashboardCustomize className="text-2xl" />
                                Custom Theme & Plugin
                            </div>
                            <div className="flex flex-col gap-3 bg-black/20 hover:bg-black/30 px-3 py-4 rounded-lg border-solid border-1 border-white/10">
                                <GrOptimize className="text-2xl" />
                                Speed Optimisation
                            </div>
                            <div className="flex flex-col gap-3 bg-black/20 hover:bg-black/30 px-3 py-4 rounded-lg border-solid border-1 border-white/10">
                                <GrHostMaintenance className="text-2xl" />
                                Website Maintenance
                            </div>
                            <div className="flex flex-col gap-3 bg-black/20 hover:bg-black/30 px-3 py-4 rounded-lg border-solid border-1 border-white/10">
                                <GrDocumentPerformance className="text-2xl" />
                                SEO & Performance
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="rounded-full bg-[url('/danyong.png')] md:w-xl w-full h-full bg-contain bg-center bg-no-repeat aspect-[1/1]"></div>
                    </div>
                </div>
            </div>

            {/* <!-- Sound Beat Visualizer at the Bottom --> */}
            <div className="absolute bottom-0 left-0 right-0 h-10 w-full flex items-end justify-between gap-1 pointer-events-none">
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_1.2s_ease-in-out_infinite_alternate]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_0.8s_ease-in-out_infinite_alternate_0.2s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_1.5s_ease-in-out_infinite_alternate_0.4s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_0.7s_ease-in-out_infinite_alternate_0.1s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_1.1s_ease-in-out_infinite_alternate_0.5s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_0.9s_ease-in-out_infinite_alternate_0.3s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_1.4s_ease-in-out_infinite_alternate_0s]"></div>
                <div className="flex-1 bg-olive h-full origin-bottom animate-[beat_0.6s_ease-in-out_infinite_alternate_0.2s]"></div>
            </div>
        </section>
    );
};
