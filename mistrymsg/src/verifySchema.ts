import { z } from "zod";

export const verifyCodeValidation = z.string().length(6, "Verification code must be 6 characters long").regex(/^[0-9]+$/, "Verification code can only contain numbers");

export const verifySchema = z.object({
    verifyCode: verifyCodeValidation,
});

export type VerifyInput = z.infer<typeof verifySchema>;