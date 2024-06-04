const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const users = require("./users");
class sessions extends Model {}

sessions.init(
  {
    sessionID: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    token: {
      allowNull: false,
      type: DataTypes.STRING(1000),
      unique:true
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

module.exports = sessions;
