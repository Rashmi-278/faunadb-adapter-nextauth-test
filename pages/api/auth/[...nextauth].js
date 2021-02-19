import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import Adapter from "@next-auth/faunadb-adapter"
import faunadb from "faunadb"


const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),

    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),
    
   
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    
  ],
  adapter: Adapter({faunaClient}),
})
