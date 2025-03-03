import mongoose from "mongoose";
import envConfig from "./envConfig.js";

// connect to db 
const connectDb = async () => {
  try {
    // connect to db 
    await mongoose.connect(envConfig.mongoUri, {
      dbName: envConfig.dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }

}

// export  connectDb
export default connectDb;