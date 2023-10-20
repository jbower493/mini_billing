import Link from "next/link";
import classes from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.nav}>
                <div className={classes.navGroup}>
                    <Link className={classes.navItem} href="/services">
                        Services
                    </Link>
                    <Link className={classes.navItem} href="/">
                        Something else
                    </Link>
                    <Link className={classes.navItem} href="/">
                        Another one
                    </Link>
                </div>
                <div className={classes.navGroup}>
                    <Link className={classes.navItem} href="/products">
                        Products
                    </Link>
                </div>
            </nav>
        </aside>
    );
}
