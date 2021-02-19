import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import {
  GoogleProvider,
  OpenShiftOAuthProvider,
} from "../../../auth-providers";

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, {
    providers: [GoogleProvider, OpenShiftOAuthProvider],
    session: { jwt: false },
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
      async error(message) {
        console.log(`Auth error: ${message}`);
      },
    },
    callbacks: {
      async session(session, token) {
        console.log("Session callback");
        if (token?.accessToken) {
          // Add property to session, like an access_token from a provider
          session.accessToken = token.accessToken;
        }
        return session;
      },
    },
  });
