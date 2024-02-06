"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweetController = exports.updateTweetController = exports.createTweetController = exports.getTweetController = void 0;
const tweet_repository_1 = require("../repositories/tweet.repository");
const user_repository_1 = require("../repositories/user.repository");
// get controller funtion
const getTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.userId;
    //console.log(req.params);
    try {
        const tweet = yield (0, tweet_repository_1.getTweetRepo)(tweetId);
        //console.log(tweet);
        if (tweet) {
            res.status(200).json({ "data": tweet });
        }
        else {
            res.status(500).json({ "error": "Tweet Not Found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.getTweetController = getTweetController;
//create controller
const createTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.createTweetRepo)(tweet);
        if (success) {
            const userUpdate = yield (0, user_repository_1.updateUserWithTweetIdRepo)(tweet.adminId, tweet.tweetid);
            if (userUpdate) {
                res.status(200).json({ "data": tweet });
            }
            else {
                res.status(500).json({ "error": "user Not updated" });
            }
        }
        else {
            res.status(500).json({ "error": "Tweet Not created" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.createTweetController = createTweetController;
//update controller
const updateTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedtweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.updateTweetRepo)(updatedtweet.tweetid, updatedtweet);
        if (success) {
            res.status(200).json({ "data": "tweet updated" });
        }
        else {
            res.status(500).json({ "error": "Tweet Not updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.updateTweetController = updateTweetController;
//delete controller
const deleteTweetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tweetId = req.params.userId;
    const tweet = req.body;
    try {
        const success = yield (0, tweet_repository_1.deleteTweetRepo)(tweetId);
        if (success) {
            const userDelete = yield (0, user_repository_1.deleteUserWithTweetIdRepo)(tweet.adminId, tweet.tweetid);
            if (userDelete) {
                res.status(200).json({ "data": "tweet deleted" });
            }
            else {
                res.status(500).json({ "error": "Tweet Not deleted in users" });
            }
        }
        else {
            res.status(500).json({ "error": "Tweet Not deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
});
exports.deleteTweetController = deleteTweetController;
