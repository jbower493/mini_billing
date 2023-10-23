"use server";

import { prisma } from "@/prisma/db";
import { redirect } from "next/navigation";
import { z } from "zod";

function zodErrorExtractor<T>(parsed: z.SafeParseError<T>): string {
    const firstError = parsed.error.errors[0];

    if (!firstError || !firstError.path[0]) return "Something went wrong.";

    return `Error with the ${firstError.path[0]} field. ${firstError.message}.`;
}

export default async function handleAddProduct(formData: FormData) {
    const newProduct = z.object({
        name: z.number(),
    });

    const parsed = newProduct.safeParse({
        name: formData.get("name"),
    });

    if (!parsed.success) {
        const errorMessage =
            zodErrorExtractor<z.infer<typeof newProduct>>(parsed);

        console.log(errorMessage);
        return errorMessage;
    }

    await prisma.product.create({
        data: {
            name: parsed.data.name.toString(),
        },
    });

    // Seems like "redirect" also revalidates the path
    redirect("/products");
}
