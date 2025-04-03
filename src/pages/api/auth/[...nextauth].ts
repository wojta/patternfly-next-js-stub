import NextAuth from "next-auth";
import {
    UsernameProvider,
    GoogleProvider
} from "@app/auth-providers";

const handler = NextAuth({
    providers: [
        UsernameProvider,
        GoogleProvider
    ],
    debug: true,
    events: {
        async signIn(message) {
            console.log(`Auth signIn: ${message}`);
        },
        async signOut(message) {
            console.log(`Auth signOut: ${message}`);
        },
        async createUser(message) {
            console.log(`Auth createUser: ${message}`);
        },
        async linkAccount(message) {
            console.log(`Auth linkAccount: ${message}`);
        },
        async session(message) {
            console.log(`Auth session: ${message}`);
        },
        async updateUser(message) {
            console.log(`Auth Update user: ${message}`);
        },
    },
})

export default handler
