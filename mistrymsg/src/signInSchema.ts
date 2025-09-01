import {z} from "zod";
import { emailValidation, passwordValidation, usernameValidation } from "./signUpSchema";

export const signInSchema = z.object({
    identifire : z.union([usernameValidation, emailValidation], "Identifire must be a valid username or email"),
    password: passwordValidation,
});

export type SignInInput = z.infer<typeof signInSchema>;