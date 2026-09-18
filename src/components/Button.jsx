export const Button = ({
    className = "",
    size = "default",
    href = "#",
    children,
}) => {
    const bassClasses =
        "relative inline-block overflow-hidden rounded-full font-medium focus:outline-none bg-mallard hover:bg-mallard/80";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const classes = `${bassClasses} ${sizeClasses[size]} ${className}`;

    return (
        <a href={href} className={classes}>
            <span className="relative flex items-center justify-center gap-2 cursor-pointer">
                {children}
            </span>
        </a>
    );
};
