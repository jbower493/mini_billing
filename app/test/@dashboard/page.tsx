import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { logout } from "./services/actions";

export default function () {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link href={"/test/services"}>Services</Link>
        </div>
    );
}
