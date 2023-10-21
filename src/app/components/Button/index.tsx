"use client";

import classes from "./Button.module.css";
import ButtonLink from "./Link";

interface ButtonProps {
    children: React.ReactNode;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}

function Button({
    type = "submit",
    children,
    onClick,
    isLoading,
    isDisabled,
}: ButtonProps) {
    return (
        <button className={classes.button} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
