import NextAuth from "next-auth"
import GoogleProfile from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProfile({
      clientId: process.env.GOOGLE_ID as string || '',
      clientSecret: process.env.GOOGLE_SECRET as string || '',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
  }
}
export default NextAuth(authOptions)