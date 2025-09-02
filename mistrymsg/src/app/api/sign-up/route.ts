import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import UserModel from "@/models/User.model";


import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { is } from "zod/locales";


export async function POST(request: Request) {
    try {
        await dbConnect();
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            return new Response(JSON.stringify({
                success: false,
                message: "Username, email and password are required",
            }), { status: 400 });
        }

        // check that if username is present and verified
        const existingUserVerifiedByUsername = await UserModel.findOne({ username, isVerified: true });
        if (existingUserVerifiedByUsername) {
            return new Response(JSON.stringify({
                success: false,
                message: "Username already taken",
            }), { status: 400 });
        }
        // check that if email is present
        const existingUserByEmail = await UserModel.findOne({ email });

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return new Response(JSON.stringify({
                    success: false,
                    message: "Email already registered",
                }), { status: 400 });
            } else {
                // If the user exists but is not verified, we can choose to resend the verification email or allow them to update their details.
                // For simplicity, let's just inform them to verify their email.

                const hashedPassword = await bcrypt.hash(password, 10);
                const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();  // 6-digit code(otp)
                const verifyCodeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

                existingUserByEmail.username = username; // Allow updating username
                existingUserByEmail.password = hashedPassword; // Update password
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = verifyCodeExpiry;
                existingUserByEmail.messages = [];


                await existingUserByEmail.save();

                // Send verification email
                const emailResponse = await sendVerificationEmail(email, username, verifyCode);
                if (!emailResponse.success) {
                    return new Response(JSON.stringify({
                        success: false,
                        message: "Failed to send verification email",
                        error: emailResponse.error,
                    }), { status: 500 });
                }

                return new Response(JSON.stringify({
                    success: true,
                    message: "User details updated. A new verification email sent to your registered email, please verify first.",
                    data: String(existingUserByEmail._id),
                }), { status: 200 });
            }

        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();  // 6-digit code(otp)
            const verifyCodeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry,
                isVerified: false,
                isAcceptingMessages: true,
                messages: [],
            });

            const saveduser = await newUser.save();

            // Send verification email only after user creation
            const emailResponse = await sendVerificationEmail(email, username, verifyCode);
            if (!emailResponse.success) {
                return new Response(JSON.stringify({
                    success: false,
                    message: "Failed to send verification email",
                    error: emailResponse.error,
                }), { status: 500 });
            }

            return new Response(JSON.stringify({
                success: true,
                message: "User registered successfully. A verification email sent to your provided email, please verify it.",
                data: String(saveduser._id),
            }), { status: 201 });
        }

    } catch (error) {
        console.error("Error in sign-up route:", error);
        return Response.json({
            success: false,
            message: "Error Registering user",
            error: (error as Error).message,
        }, { status: 500 });
    }
}
