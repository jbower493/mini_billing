import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function () {
    async function login(formData: FormData) {
        "use server";

        cookies().set("mb_access_token", "true");
        redirect("/test");
    }

    return (
        <div>
            <form action={login}>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
