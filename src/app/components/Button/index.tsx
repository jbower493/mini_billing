"use client";

import classes from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}

export default function Button({
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
