import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    user: {type: String, required:true},
    username: {type: String, required: true},
    password: {type: String, required:true},
    email: {type: String, required: true},
    number: {type: Number, required:true},
    createAt: {type: Date, default: Date.now}
});

UserSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 5);
    }
})

const User = mongoose.model("User", UserSchema);

export default User;