import { Document } from "mongoose";


export interface IUserInterface extends Document{
    uid:String,
    tweets:String,
    firstName:String,
    lastName:String,
    email:String,
    createdAt:String,
}