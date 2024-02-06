import { Router } from "express";
import { getTweetController, createTweetController, updateTweetController, deleteTweetController } from "../controllers/tweet.controller";




const tweetRouter=Router();
tweetRouter.get("/:userId", getTweetController);
tweetRouter.post("/", createTweetController);
tweetRouter.put("/", updateTweetController);
tweetRouter.delete("/:userId", deleteTweetController);



export default tweetRouter;
