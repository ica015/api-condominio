import { Request, Response } from "express";

import { User } from "../models/user";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { UserService } from "../services/UserService";

export const UsersControllers = {
    index: async (req:Request, res:Response)=>{
        const [page, perPage ] = getPaginationParams(req.query)
        
        try{
            const paginatedUsers = await UserService.findAllPaginated(page, perPage)    

            return res.json(paginatedUsers)
        } catch (err) {
            if (err instanceof Error) {
              return res.status(400).json({ message: err.message })
            }
          }
    },
    sotre: async (req:Request, res: Response)=>{
        const { name, email,cpf,rg,password,active,accessTag,hasPet, accessLevel} = req.body

        try {
            const userExists = await UserService.findByCPF(cpf)
            if(userExists){
                throw new Error("CPF já cadatrado!")
            }

            const user = await UserService.create({
                name, 
                email,
                cpf,
                rg,
                password,
                active,
                accessTag,
                hasPet,
                accessLevel
            })
            return res.status(201).json(user)

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
              }
        }
    },
    update: async (req: Request, res:Response)=>{
        const { id }  = req.body
        const { name, email, cpf, rg, active, accessTag, hasPet, accessLevel } = req.body

        try {
            const updateUser = await UserService.update(id, {
                name, 
                email,
                cpf,
                rg,
                active,
                accessTag,
                hasPet,
                accessLevel
            })

            return res.json(updateUser)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
              }
        }
    }
}
