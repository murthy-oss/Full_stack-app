import express, { Express } from "express";
import http from "http"
import cors from "cors"
import bodyParser from "body-parser";
import router from "./routers/routes";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app:Express =express();
const server =http.createServer(app);

//Express configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");


dotenv.config();

// router
app.use("/api/v1",router);

// mongo db  connection

const mongoURL= process.env.MONGO_DB_URL;

if(!mongoURL){
    console.error("Mongo  url is not defined");
    process.exit(1);
}
mongoose.connect(mongoURL,{}).then( ()=>{
    console.log("mongo  is connected");
})
.catch((error)=>{
    console.log(error);
}
);


//start server
try {
    const port: Number= app.get("PORT")
    const baseUrl: String =app.get("BASE_URL");
    server.listen(port, (): void =>{
        console.log("server is listening");
    })
} catch (error) {
    console.log(error);
}



export default server;