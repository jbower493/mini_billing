import Link from "next/link";
import classes from "../Button.module.css";

interface ButtonLinkProps {
    children: React.ReactNode;
    href: string;
    className: string;
}

export default function ButtonLink({
    children,
    href,
    className,
}: ButtonLinkProps) {
    return (
        <Link
            className={`${classes.button}${className ? " " + className : ""}`}
            href={href}
        >
            {children}
        </Link>
    );
}
