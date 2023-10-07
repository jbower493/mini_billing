"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function logout(formData: FormData) {
    cookies().set("mb_access_token", "false");
    cookies().delete("mb_access_token");
    // TODO: this doesn't seem to cause the page to reload when you DELETE cookie, but it does when you SET a cookie
    // Think it might be because "revalidatePath is not working properly with the parallel routes thing"
    // For now I just have a workaround of setting the cookie to something else before deleting it, as the cookies().set seems to trigger an invalidation
    redirect("/test");
}
