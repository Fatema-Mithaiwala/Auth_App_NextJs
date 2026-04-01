import moongoose from "mongoose";

export async function connectDB() {
    try {
        moongoose.connect(process.env.mongo_url!);
        const connection = moongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDB connected");
        })
        connection.on('error', () => {
            console.log("MongoDB connection error");
            process.exit(1);
        })
    }
    catch (error) {
        console.log("Something went wrong", error);
    }
}