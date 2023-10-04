'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('events', {
      id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING ,
        allowNull: false,
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      cost:{
        type: Sequelize.DECIMAL(10,2),
        allowNull:false
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
    await queryInterface.dropTable('events');
    
  }
};
