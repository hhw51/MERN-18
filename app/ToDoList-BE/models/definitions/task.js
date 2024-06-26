const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");
class task extends Model {}

task.init(
  {
    taskID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
    //    foreign key always in many table , in case of 1-many
    userID: {
        allowNull:false,
        type:DataTypes.STRING(255),
        references:{
            model:users,
            key:"userID"
        },
    },
  },
  {
    timestamps: true,
    paranoid: true,
    tableName: "tasks",
    sequelize,
  }
);

module.exports = task;
