import mongoose from "mongoose";

const userschema =new Schema({

    username:{
        type:string
    }
})





export const user =mongoose.model("user", userschema)