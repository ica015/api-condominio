// require('dotenv/config')
import express from "express"
import { database } from './database'
import {router} from "./routes"

const app = express()
const PORT = process.env.PORT || 3000

app.use(router);

app.listen(PORT, ()=>{
    database.authenticate().then(()=>{
        console.log("Conectado ao banco de dados com sucesso")
    }).catch(()=>{
        console.log("Erro ao conectar no banco de dados")
    })
})

app.get('/',(req, res)=>{
    
    console.log("teste");
    res.send("Funcionou novamente - ")
})