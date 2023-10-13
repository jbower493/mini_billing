import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const authOptions: AuthOptions = {
    providers: [
        DiscordProvider({
            // profile(profile, tokens) {
            //     console.log("profile", profile);
            //     console.log("tokens", tokens);
            //     return profile;
            // },
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
        }),
    ],
    session: {
        // Use this option to store session data in my database
        // strategy: "database",
    },
    // callbacks: {
    //     session({
    //         // The session object, which includes the user as stored in the auth provider (Discord etc)
    //         session,
    //         // The user object from my database that has been linked to the auth provider's user profile
    //         user,
    //     }) {
    //         console.log("session", session);
    //         console.log("user", user);
    //         return session;
    //     },
    // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
