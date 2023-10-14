import { getServerSession } from "next-auth/next";
import SessionProvider from "./SessionProvider";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import classes from "./loggedIn.module.css";

export default function ({ children }: { children: React.ReactNode }) {
    // const session = await getServerSession();

    return (
        <div className={classes.loggedIn}>
            <Header />
            <Sidebar />
            {/* Adding this SessionProvider causes a "session" fetch request to happen on every page load */}
            {/* <SessionProvider session={session}>{children}</SessionProvider> */}
            <main className={classes.main}>{children}</main>
        </div>
    );
}
