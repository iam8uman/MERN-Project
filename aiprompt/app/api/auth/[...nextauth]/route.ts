import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET,
)
const handler =  NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers


    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  async signIn({profile}) {
    
  },

  async Session({ session }) {

  }
});


export {handler as GET, handler as POST } ;
