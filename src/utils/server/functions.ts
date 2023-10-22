import { prisma } from "@/prisma/db";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
    const sessionId = cookies().get("mb_session")?.value;

    if (!sessionId) {
        return null;
    }

    const currentSession = await prisma.session.findUnique({
        where: {
            id: Number(sessionId),
        },
    });

    if (!currentSession?.admin_id) {
        return null;
    }

    const loggedInUser = await prisma.admin.findUnique({
        where: { id: currentSession.admin_id },
    });

    return loggedInUser;
}
