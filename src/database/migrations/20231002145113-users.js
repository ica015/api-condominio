'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('users', {
      id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      rg:{
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      access_tag:{
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      has_pet:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      access_level:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }

    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    
  }
};
