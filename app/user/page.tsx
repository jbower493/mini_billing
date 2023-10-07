import { prisma } from "../../prisma/db";

export default async function User() {
    const users = await prisma.user.findMany();
    const admin = await prisma.admin.findMany();

    return (
        <section>
            <div>Hello {users[0].email}!</div>
            <div>Hello {admin[0].email}!</div>
        </section>
    );
}
