import { UUID } from "crypto";
import {database} from '../database'
import { DataTypes, Model, Optional } from "sequelize";

export interface User {
  id:UUID,
  name: string,
  email: string,
  cpf:bigint,
  rg:string,
  password:string,
  active:boolean,
  accessTag:string,
  hasPet:boolean
  accessLevel:string
}

export interface UserCreationAttributes extends Optional<User, 'id'>{}

export interface UserInstance extends Model<User, UserCreationAttributes>, User{}

export const User = database.define<UserInstance, User>('User',{
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },      
  email: {
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:true,
    }
  },
  cpf: {
    type: DataTypes.BIGINT,
    allowNull:false,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  active:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  accessTag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hasPet: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  accessLevel: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id: {
//       type: DataTypes.UIID,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     name:{
//       type: DataTypes.STRING,
//       allowNull: false,
//     },      
//     email: {
//       type: DataTypes.STRING,
//       allowNull:false,
//       validate:{
//         isEmail:true,
//       }
//     },
//     cpf: {
//       type: DataTypes.BIGINT,
//       allowNull:false,
//     },
//     rg: {
//       type: DataTypes.STRING,
//       allowNull:false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull:false,
//     },
//     active:{
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     accessTag: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     hasPet: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     accessLevel: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'User',
//     timestamps: true,
//     updatedAt: 'updateTimestamp'
//   });
//   return User;
// };