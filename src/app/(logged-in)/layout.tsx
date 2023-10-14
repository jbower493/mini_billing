import Header from "./components/header";
import Sidebar from "./components/sidebar";
import classes from "./loggedIn.module.css";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className={classes.loggedIn}>
            <Header />
            <Sidebar />
            <main className={classes.main}>{children}</main>
        </div>
    );
}
