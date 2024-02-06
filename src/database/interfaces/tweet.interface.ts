import { Document } from "mongoose";


export interface ITweetInterface extends Document{
    tweetid:String,
    content:String,
    createdAt:String,
    adminId:String,
}