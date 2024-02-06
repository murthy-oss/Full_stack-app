import { Request, Response } from "express";
import { getUserRepo, createUserRepo, updateUserRepo, deleteUserRepo } from "../repositories/user.repository";
import { IUserInterface } from "../database/interfaces/user.interface";

// get controller funtion
export const getUserController = async (req: Request, res: Response) => {
    const userId = req.params.userId as String;
    try {
        const user = await getUserRepo(userId);
        if (user) {
            res.status(200).json({ "data": user });
        }
        else {
            res.status(500).json({ "error": "User Not Found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}

//create controller
export const createUserController = async (req: Request, res: Response) => {
    const user: IUserInterface = req.body;
    try {
        const success = await createUserRepo(user);
        if (success) {
            res.status(200).json({ "data": user });
        }
        else {
            res.status(500).json({ "error": "User Not created" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}

//update controller
export const updateUserController = async (req: Request, res: Response) => {
    const updateduser: IUserInterface = req.body;
    try {
        const success = await updateUserRepo(updateduser.uid ,updateduser);
        if (success) {
            res.status(200).json({ "data": "user updated" });
        }
        else {
            res.status(500).json({ "error": "User Not updated" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}
//delete controller
export const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.userId as String;
    try {
        const success = await deleteUserRepo(userId);
        if (success) {
            res.status(200).json({ "data" : "user deleted" });
        }
        else {
            res.status(500).json({ "error": "User Not deleted" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error });
    }
}