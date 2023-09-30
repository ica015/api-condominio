'use strict';

module.export = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('apartments', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active:{
        type: Sequelize.BOOLEAN,
        allowNull:false
      },

    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apartments');
    
  }
};
