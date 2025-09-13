// apps/portal/src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.password === "demo") {
          return {
            id: "user-1",
            name: "FiscPlan User",
            email: credentials.email || "user@example.com",
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
});

export { handler as GET, handler as POST };
