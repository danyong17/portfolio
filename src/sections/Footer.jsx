export const Footer = () => {
    return (
        <section>
            <div className="relative py-7 bg-black/20 mt-5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-12 items-center text-sm">
                        <div className="col-span-6">
                            &copy; {new Date().getFullYear()} Daniel Maddela.
                            All rights reserved.
                        </div>
                        <div className="col-span-6">
                            <div className="flex justify-end sm:space-x-8 space-x-4">
                                <a
                                    className="inline-block"
                                    href="www.linkedin.com/in/danyongaseo"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    className="inline-block"
                                    href="mailto:danyongaseo@gmail.com"
                                    rel="noreferrer"
                                >
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
