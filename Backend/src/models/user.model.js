import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    avatar:{
        type:String,
        required: false,
        default:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    },
});

userSchema.methods.comparePassword=async function(password){
  
    return await bcrypt.compare(password,this.password);
};
userSchema.set('toJSON',{
    transform: function(doc, ret) {
        delete ret.password; // Remove password from the JSON output
        delete ret.__v; // Optionally remove version key
        return ret;
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});
const User=mongoose.model("User",userSchema);
export default User;
