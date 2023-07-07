import { NextAuthOptions, getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // NextAuth sets a default `maxAge` of 30 days (which is 60 * 60 * 24 * 30), but that is a very large
    // value, and hence, for now, setting the `maxAge` to 2 minutes (i.e. 60 * 60).
    maxAge: 2 * 60,
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {},
}

export const getAuthSession = () => getServerSession(authOptions)
