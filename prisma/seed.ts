import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    const alice = await prisma.admin.upsert({
        where: { email: "admin@admin.com" },
        update: {},
        create: {
            email: "admin@admin.com",
            password: "password",
            firstname: "Bob",
            lastname: "Smith",
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
