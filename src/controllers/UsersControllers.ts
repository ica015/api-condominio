import { Request, Response } from "express";

import { User } from "../models/user";

export const UsersControllers = {
    index: async (req:Request, res:Response)=>{
        const users = await User.findAll({
            order:[['name','asc']]
        });
        return res.json(users);
    },
    // sotre: async (req:Request, res: Response)=>{

    // }
}
