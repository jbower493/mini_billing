// I think this works kind of like a not-found file inside parallel routes

import { redirect } from "next/navigation";

export default function () {
    // Redirect any non-authed request that doesn't match a non-authed route to the login page
    redirect("/login");

    return null;
}
