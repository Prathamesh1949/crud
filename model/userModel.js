import mongoose from 'mongoose';
import moduleName from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    contact_no:{
        type:Number,
        required:true,
    },
});

export default mongoose.model("user", userSchema);