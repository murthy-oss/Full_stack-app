import { Router,Request,Response } from "express";

 

 const helloRouter =Router();

 //define router path

 helloRouter.get("/", ( req: Request, res: Response)=> {
    res.json({"data": "Server is Live!!!!"})
 });

 export default helloRouter;