import { Request, Response } from "express";
import { getTweetRepo, createTweetRepo, updateTweetRepo, deleteTweetRepo, getAllTweetsRepo } from "../repositories/tweet.repository";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { deleteUserWithTweetIdRepo, updateUserWithTweetIdRepo } from "../repositories/user.repository";
// get controller funtion
export const getTweetController = async (req: Request, res: Response) => {
<<<<<<< HEAD
    const tweetId = req.params.tweetId  as String ;

=======
    const tweetId = req.params.tweetId as String;
    //console.log(req.params);
>>>>>>> 0957e6c1a18432f3143c03d71d5d86dd19c2a9d2
    try {
        console.log('tweetId'+tweetId);

        const tweet = await getTweetRepo(tweetId);
       // console.log('tweet'+tweetId);
        if (tweet) {
            res.status(200).json({ "data": tweet });
        }
        else {
            res.status(404).json({ "error": tweet });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}

//create controller
export const createTweetController = async (req: Request, res: Response) => {
    const tweet: ITweetInterface = req.body;
    try {
        const success = await createTweetRepo(tweet);
        if (success) {
            const userUpdate=await updateUserWithTweetIdRepo(tweet.adminId,tweet.tweetid);
            if(userUpdate){
                res.status(200).json({ "data": tweet });
            }
            else{
                res.status(500).json({ "error": "user Not updated" });
            }
           
        }
        else {
            res.status(500).json({ "error": "Tweet Not created" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}

//update controller
export const updateTweetController = async (req: Request, res: Response) => {
    const updatedtweet: ITweetInterface = req.body;
    try {
        const success = await updateTweetRepo(updatedtweet.tweetid ,updatedtweet);
        if (success) {
            res.status(200).json({ "data": "tweet updated" });
        }
        else {
            res.status(500).json({ "error": "Tweet Not updated" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}
//delete controller
export const deleteTweetController = async (req: Request, res: Response) => {
    const tweetId = req.params.tweetId as String;
    const tweet: ITweetInterface = req.body;
    try {
        console.log("tweetId1"+tweetId);
        const success = await deleteTweetRepo(tweetId);
        if (success) {

            const userDelete=await deleteUserWithTweetIdRepo(tweet.adminId,tweet.tweetid);
            
            if(userDelete){
                res.status(200).json({ "data" : "tweet deleted" });
            }
            else{
                res.status(500).json({ "error": "Tweet Not deleted in users" });
            }
        }
        else {
            res.status(500).json({ "error": "Tweet Not deleted" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}
export const getAllTweetController = async (req: Request, res: Response) => {
    // const tweetId = req.params.userId as String;
    //console.log(req.params);
    try {
        const tweets = await getAllTweetsRepo();
        //console.log(tweet);
        if (tweets) {
            res.status(200).json({ "data": tweets });
        }
        else {
            res.status(500).json({ "error": "Tweets Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}
