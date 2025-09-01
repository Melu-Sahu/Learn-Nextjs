import {z} from "zod";


export const acceptMessageValidation = z.boolean();

export const acceptMessageSchema = z.object({
    isAcceptingMessages: acceptMessageValidation,
});

export type AcceptMessageInput = z.infer<typeof acceptMessageSchema>;