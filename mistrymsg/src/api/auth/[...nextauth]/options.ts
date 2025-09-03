import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { AdapterUser } from "next-auth/adapters";
import UserModel from "@/models/User.model";
import { email } from "zod";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email : {label: "Email", type: "text", placeholder: "Username"},
                password: {label: "Password", type: "password", placeholder: "Password"},
            },
            async authorize(credentials : any): Promise<any> {
                await dbConnect();
                try {
                    const user = await UserModel.findOne({$or: [{email: credentials?.identifire}, {username: credentials?.identifire}]});
                    if (!user) {
                        throw new Error("No user found with the given email or username");
                    }

                    if(!user.isVerified) {
                        throw new Error("Email not verified. Please verify your email to login.");
                    }

                    const isPasswordValid = await compare(credentials.password, user.password);
                    if (!isPasswordValid) {
                        throw new Error("Invalid password");
                    }

                    return {
                        id: String(user._id),
                        username: user.username,
                        email: user.email,
                        isVerified: user.isVerified,
                        isAcceptingMessages: user.isAcceptingMessages,
                    }; 
                } catch (error:any) {
                    throw new Error(error);
                }
            }
        })
    ],
    pages: {
        signIn: '/sign-in',
    },
    callbacks: {
        async jwt({ token, user }: { token: any; user?: any }) {
            if (user) {
                token._id = String(user._id);
                token.username = user.username;
                token.email = user.email;
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (token) {
                session.user._id = token._id;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessages = token.isAcceptingMessages;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};