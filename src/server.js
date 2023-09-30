const express = require("express")
const { sequelize } = require('./database')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    sequelize.authenticate().then(()=>{
        console.log("Conectado ao banco de dados com sucesso")
    }).catch(()=>{
        console.log("Erro ao conectar no banco de dados")
    })
})