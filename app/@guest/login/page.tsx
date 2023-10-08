import { tempSessionTokens } from "@/middleware";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/db";

export default async function () {
    async function login(formData: FormData) {
        "use server";

        const email = formData.get("email")?.toString() || "";

        await prisma.user.create({ data: { email, password: "password" } });
        revalidatePath("/");

        // if (tempSessionTokens.includes(email)) {
        //     cookies().set("mb_access_token", email);
        //     return redirect("/dashboard");
        // }

        // return redirect("/");
    }

    const users = await prisma.user.findMany();

    return (
        <div>
            <h1>Login page</h1>
            <form action={login}>
                <input placeholder="Email" type="text" name="email" />
                <input placeholder="Password" type="password" name="password" />
                <input type="submit" value="Login" />
            </form>
            <ul>
                {users.map(({ email }) => (
                    <li>{email}</li>
                ))}
            </ul>
        </div>
    );
}
