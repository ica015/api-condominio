'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('apartments', {
      id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_owner:{
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'users',

          },
          key: 'id'
        },
        allowNull: false,
      },
      id_resident:{
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        allowNull: true,
      },
      number:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      active:{
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('apartments');
    
  }
};
