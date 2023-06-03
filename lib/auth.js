import NextAuth from 'next-auth'
import DiscordProvider from "next-auth/providers/discord";
import { NextAuthOptions } from "next-auth";


export const authOptions = {
    providers: [
        DiscordProvider({
          clientId: "1112122123050307705",
          clientSecret: "xkq89sWWAi6Cx8-D64MF5hDiHg04hPWE",
        })
      ],
    secret: "P7GvG6el15hGDOSm3f7bXHpSegzV+dsVwWdwxoLIBKM=",
}


export default NextAuth(authOptions)