import { Router } from "express";
import { getTweetController, createTweetController, updateTweetController, deleteTweetController, getAllTweetController } from "../controllers/tweet.controller";




const tweetRouter=Router();
tweetRouter.get("/:tweetId", getTweetController);
tweetRouter.get("/get/all", getAllTweetController);
tweetRouter.post("/", createTweetController);
tweetRouter.put("/", updateTweetController);
tweetRouter.delete("/:tweetId", deleteTweetController);



export default tweetRouter;
