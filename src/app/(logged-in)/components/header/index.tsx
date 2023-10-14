"use client";

import Link from "next/link";
import Button from "../../../components/Button";
import classes from "./header.module.css";
import { signOut } from "next-auth/react";

export default function Header() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.companyName}>
                Mini<span className={classes.span}>Billing</span>
            </Link>
            <Button onClick={() => signOut()}>Logout</Button>
        </header>
    );
}
