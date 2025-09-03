
import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            _id?: string;
            username?: string;
            email: string;
            isVerified: boolean;
            isAcceptingMessages?: boolean;
        } & DefaultSession['user'];
    }

    interface User {
        _id: string;
        username: string;
        email: string;
        isVerified: boolean;
        isAcceptingMessages: boolean;
    }

    interface JWT {
        _id?: string;
        username?: string;
        email?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
    }
}