const { Sequelize } = require('sequelize')

module.exports = {
    sequelize: new Sequelize('condominio', 'cond', 'cond1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    define:{
        underscored: true
    }
  })

}