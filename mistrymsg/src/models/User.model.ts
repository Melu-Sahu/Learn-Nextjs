import mongoose, {Schema, Document} from "mongoose";


export interface IMessage extends Document {
    content: string;
    createdAt : Date;
}

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: IMessage[];
    createdAt: Date;
    updatedAt: Date;
}

const MessageSchema: Schema<IMessage> = new Schema(
    {
        content: {type: String, required: true},
        createdAt: {type: Date, required: true, default: Date.now},
    },
    {timestamps: true}
);

const UserSchema: Schema = new Schema(
    {
        username: {type: String, required: [true, "Username is Required"], unique: true, trim: true},
        email: {type: String, required: [true, "Email is Required"], unique: [true, "Email Alreay Exists"], trim: true, lowercase: true, match  : [/\S+@\S+\.\S+/, "is invalid"]},
        password: {type: String, required: [true, "Password is required"]},
        verifyCode: {type: String, required: true},
        verifyCodeExpiry: {type: Date, required: true},
        isVerified: {type: Boolean, default: false},
        isAcceptingMessages: {type: Boolean, default: true},
        messages: {type: [MessageSchema], default: []},
    },
    {timestamps: true}
);

const UserModel = (mongoose.models.User as mongoose.Model<IUser>)  || mongoose.model<IUser>("User", UserSchema);
export default UserModel;