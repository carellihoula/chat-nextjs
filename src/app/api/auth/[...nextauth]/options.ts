import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const options = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      profile(profile) {
        console.log("Profile Github: ", profile);

        let userRole = "Github User";
        return {
          ...profile,
          id: profile.id.toString(),
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Username",
          type: "text",
          placeholder: "type your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "type your password",
        },
        _id: {
          label: "_id",
          type: "text",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        // Add logic here to look up the user from the credentials supplied
        try {
          connectDB();

          const foundUser: any = await User.findOne({
            email: credentials?.email,
          })
            .select("+password")
            .lean()
            .exec();
          if (!foundUser) {
            return null;
          }
          const match = await bcrypt.compare(
            credentials?.password ?? "",
            (foundUser as any).password
          );
          if (!match) {
            throw new Error("Wrong password");
          }
          delete foundUser?.password;
          console.log(foundUser);
          return foundUser;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    newUser: "/ChatSpace",
  },
};
