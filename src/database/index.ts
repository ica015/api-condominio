import { Sequelize } from "sequelize"
require('dotenv/config')

export const database = new Sequelize({
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    define:{
        underscored: true
    }
  })
