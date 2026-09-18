import { IoMdDownload } from "react-icons/io";

export const BorderButton = ({
    className = "",
    size = "default",
    href = "#",
    children,
}) => {
    const baseClasses =
        "relative flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none ring-2 ring-white hover:bg-mallard hover:ring-mallard transition duration-200";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    return (
        <a href={href} className={classes}>
            <span className="relative flex items-center justify-center gap-2 cursor-pointer">
                {children}
                <IoMdDownload />
            </span>
        </a>
    );
};
