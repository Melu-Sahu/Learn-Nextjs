import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mistrymsg";


export default async function dbConnect(): Promise<void> {

    if (connection.isConnected) {
        console.log("Already connected to database");
        return;
    }

    try {
        const  db_string = await mongoose.connect(MONGODB_URI, {});
        console.log(db_string);
    connection.isConnected = db_string.connections[0].readyState;
        console.log("Connected to database");
        
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}


if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}