
import mongoose from "mongoose";
// Check if the environment variable is defined
console.log("MongoDB URL:", process.env.MONGO_URL);

const connectDB=async()=>{
    try{
         // Just use mongoose.connect without deprecated options
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
      console.log(`Error:${error.message}`);
      process.exit(1);
    }
};

export default connectDB;