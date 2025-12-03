import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInAction } from "@/app/actions/signin-action";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const result = await signInAction({
          email: credentials?.email as string,
          password: credentials?.password as string,
        });

        if (result?.success && result.data) {
          return {
            id: String(result.data.user.id),
            email: result.data.user.email,
            firstName: result.data.user.firstName,
            accessToken: result.data.accessToken,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = request.nextUrl;
      const isAuthPage = pathname === "/login" || pathname === "/signup";

      // If on auth pages and logged in, redirect to home
      if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/", request.nextUrl.origin));
      }

      // If not on auth pages and not logged in, redirect to login
      if (!isAuthPage && !isLoggedIn) {
        return Response.redirect(new URL("/login", request.nextUrl.origin));
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email!;
        token.firstName = user.firstName;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.firstName = token.firstName;
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
