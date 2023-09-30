'use strict';

module.exports = {
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
        type: Sequelize.TINYINT(1),
        allowNull:false
      },

    })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('apartments');
    
  }
};
