import mongoose from "mongoose";

let isConnected = false; // track connection status 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    try { 
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_post",
            // useNewUrlParser: true, 
            // useUnifiedTopoloogy: true,
        }); 
        isConnected = true; 
        
        console.log("Mongodb is connected to", connection.host); 
    } 
        
    catch (error) { 
        console.log(error);
    }
}