"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const tweet_routes_1 = __importDefault(require("./tweet.routes"));
const helloworld_routes_1 = __importDefault(require("./helloworld.routes"));
const router = (0, express_1.Router)();
router.use('/hello', helloworld_routes_1.default);
router.use('/user', user_routes_1.default);
router.use('/tweet', tweet_routes_1.default);
exports.default = router;
