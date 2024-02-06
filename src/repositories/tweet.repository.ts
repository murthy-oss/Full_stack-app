import mongoodse from "mongoose";
import {ITweetInterface} from "../database/interfaces/tweet.interface";
import TweetMOdel from "../database/models/tweet.model";

//get function
export const getTweetRepo=async(tweetId:String):Promise<ITweetInterface |null>=>{
    try{
        const tweet=await TweetMOdel.findOne({tweetid:tweetId});
        return tweet;
    }
    catch(error){
        console.log(error);
        return null;
    }
};

//delete function
export const deleteTweetRepo=async(tweetId:String):Promise<boolean>=>{
    try{
        const deleted=await TweetMOdel.findOneAndDelete({tweetid:tweetId});
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
export const createTweetRepo=async(tweet:ITweetInterface):Promise<boolean>=>{
    try{
        await TweetMOdel.create(tweet);
        return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
};

//update function
export const updateTweetRepo=async(
    tweetId:String,
    updatedTweet:ITweetInterface):Promise<boolean>=>{
    try{
        const result=await TweetMOdel.findOneAndUpdate({tweetid:tweetId},updatedTweet,{new:true});
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