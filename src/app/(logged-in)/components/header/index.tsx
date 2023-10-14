"use client";

import Link from "next/link";
import Button from "../../../components/Button";
import classes from "./header.module.css";

export default function Header() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.companyName}>
                Mini<span className={classes.span}>Billing</span>
            </Link>
            <Button onClick={() => console.log("logging out")}>Logout</Button>
        </header>
    );
}
