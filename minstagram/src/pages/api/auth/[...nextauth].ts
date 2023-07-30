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
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}
export default NextAuth(authOptions)