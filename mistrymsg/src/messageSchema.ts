import {z} from "zod";

export const MessageSchema = z.object({
    content: z.string().min(1, "Message content cannot be empty").max(300, "Message content must be at most 300 characters long"),
    senderName: z.string().min(1, "Sender name cannot be empty").max(10, "Sender name must be at most 10 characters long"),
    senderEmail: z.string().email("Invalid sender email address").optional(),
});