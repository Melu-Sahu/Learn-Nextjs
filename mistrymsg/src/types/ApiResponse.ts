import { IMessage } from "@/models/User.model";


export interface IApiResponse {
    success: boolean;
    message: string;
    data?: string;
    isAcceptingMessages?: boolean;
    messages?: IMessage[];
    error?: string;
}