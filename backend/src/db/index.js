import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectdb = async ()=>{
    try {
    const connectionInstance = await mongoose.connect(`${process.env.mongodb_uri}/${db_name}`)
    console.log(`\n mongo db connected !! db host :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error",error);
        process.exit(1)
    }
}

export default connectdb
