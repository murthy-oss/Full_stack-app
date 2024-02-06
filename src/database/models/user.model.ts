import mongoose,{Document,Schema} from "mongoose";
import {IUserInterface} from '../interfaces/user.interface'


const userSchema=new Schema<IUserInterface> ({
    uid:{type:String ,required:true},
    tweets:{type:[String] ,default:[]},
    firstName:{type:String ,default:"User"},
    lastName:{type:String ,default:"Name"},
    email:{type:String ,required:true},
     createdAt:{type:String ,required:true},


});
const UserMOdel=mongoose.model<IUserInterface>('UserModel',userSchema);

export default UserMOdel