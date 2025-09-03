import { resend } from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmail';
import { IApiResponse } from '@/types/ApiResponse';


export const sendVerificationEmail = async (emialTo: string, username: string, otp: string): Promise<IApiResponse> => {

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: emialTo,
            subject: '!!Verify your email for MistryMsg!!',
            react: VerificationEmail({
                userName: username,
                otp,
            }),
        });

        return {
            success: true, 
            message: "Verification email sent successfully",
        };


    } catch (error) {
        console.error("Error sending verification email:", error);
        return {
            success: false,
            message: "Failed to send verification email",
            error: (error as Error).message,
        };
    }

}
