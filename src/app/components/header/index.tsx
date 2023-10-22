import Link from "next/link";
import Button from "../Button";
import classes from "./header.module.css";
import { getLoggedInUser } from "@/src/utils/server/functions";
import Logout from "./logout";

export default async function Header() {
    const loggedInUser = await getLoggedInUser();

    return (
        <header className={classes.header}>
            <Link href="/" className={classes.companyName}>
                Mini<span className={classes.span}>Billing</span>
            </Link>
            <div className={classes.user}>
                <p>Welcome, {loggedInUser.firstname}</p>
                <Logout />
            </div>
        </header>
    );
}
