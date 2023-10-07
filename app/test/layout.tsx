import { cookies } from "next/headers";

async function Layout({
    dashboard,
    login,
}: {
    dashboard: React.ReactNode;
    login: React.ReactNode;
}) {
    const cookieStore = cookies();

    const isLoggedIn = cookieStore.get("mb_access_token")?.value === "true";

    console.log(cookies().getAll());

    return <>{isLoggedIn ? dashboard : login}</>;
}

export default Layout;
