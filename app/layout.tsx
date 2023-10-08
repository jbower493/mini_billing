import { prisma } from "@/prisma/db";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    guest,
    user,
}: {
    children: React.ReactNode;
    guest: React.ReactNode;
    user: React.ReactNode;
}) {
    const loggedInUser = await prisma.user.findFirst({
        where: {
            email: "jamie@jamie.coms",
        },
    });

    return (
        <html lang="en">
            <body>
                {children}
                {loggedInUser ? user : guest}
            </body>
        </html>
    );
}
