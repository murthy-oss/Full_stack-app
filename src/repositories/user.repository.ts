import mongoodse from "mongoose";
import {IUserInterface} from "../database/interfaces/user.interface";
import UserMOdel from "../database/models/user.model";

//get function
export const getUserRepo=async(userId:String):Promise<IUserInterface |null>=>{
    try{
        const user=await UserMOdel.findOne({uid:userId});
        return user;
    }
    catch(error){
        console.log(error);
        return null;
    }
};

//delete function
export const deleteUserRepo=async(userId:String):Promise<boolean>=>{
    try{
        const deleted=await UserMOdel.findOneAndDelete({uid:userId});
        if(deleted){
            return true;
        }
        else{
            return false;
        }
    }
    catch(error){
        console.log(error);
        return false;
    }
};

//create function
export const createUserRepo=async(user:IUserInterface):Promise<boolean>=>{
    try{
        await UserMOdel.create(user);
        return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
};

//update function
export const updateUserRepo=async(
    userId:String,
    updatedUser:IUserInterface):Promise<boolean>=>{
    try{
        const result=await UserMOdel.findOneAndUpdate({uid:userId},updatedUser,{new:true});
            if(result){
                return true;
            }
            else{
                return false;
            }
        
    }
    catch(error){
        console.log(error);
        return false;
    }
};

export const updateUserWithTweetIdRepo=async(
    userId:String,
    tweetId:String):Promise<boolean>=>{
    try{
        const result=await UserMOdel.findOneAndUpdate(
            {uid:userId},{$push:{tweets:tweetId}});
            if(result){
                return true;
            }
            else{
                return false;
            }
        
    }
    catch(error){
        console.log(error);
        return false;
    }
};

export const deleteUserWithTweetIdRepo=async(
    userId:String,
    tweetId:String):Promise<boolean>=>{
    try{
        const result=await UserMOdel.findOneAndUpdate(
            {uid:userId},{$pull:{tweets:tweetId}});
            console.log(result);
            if(result){
                return true;
            }
            else{
                return false;
            }
    }
    catch(error){
        console.log(error);
        return false;
    }
};