import { UUID } from "crypto";
import { User, UserCreationAttributes } from "../models/user";

export const UserService = {
    findAllPaginated: async (page:number, perPage:number)=>{
        const offset = (page -1)*perPage

        const {count, rows } = await User.findAndCountAll({
            order:[['name','asc']],
            limit: perPage,
            offset
        });

        return {
            users: rows,
            page,
            perPage,
            total: count
        };
    },
    findByCPF: async (cpF:bigint)=>{
        const user = await User.findOne({
            where: {cpf:cpF}
        })
        return user
    },
    create: async (attributes: UserCreationAttributes)=>{
        const user = await User.create(attributes)
        return user
    },
    update: async (id:UUID, attributes:{
        name: string,
        email: string,
        cpf:bigint,
        rg:string,
        // password:string,
        active:boolean,
        accessTag:string,
        hasPet:boolean
        accessLevel:string
    })=>{
        const [affectedRows, updatedUsers] = await User.update(attributes, {
            where: {id},
            returning: true
        })
        return updatedUsers[0]
    }
}