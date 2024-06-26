// const {Model , DataTypes} = require("sequelize");
// const sequelize = require("../../bin/dbConnection");

// class UserHasTask extends Model {}
// UserHasTask.init(
//     {
//       userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         // references: {
//         //   model: 'users',
//         //   key: 'userId',
//         // },
//         onDelete: 'CASCADE',
//         primaryKey: true
//       },
//     //   taskId: {
//     //     type: DataTypes.INTEGER,
//     //     allowNull: false,
//     //     references: {
//     //       model: 'Tasks',
//     //       key: 'id',
//     //     },
//     //     onDelete: 'CASCADE',
//     //     primaryKey: true
//     //   },
//       assignmentDate: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: DataTypes.NOW,
//       },
//       completionStatus: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//         defaultValue: false,
//       },
//       completionDate: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//       role: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     },
//     {
//       sequelize,
//       modelName: 'UserHasTask',
//       tableName: 'UserHasTask',
//       timestamps: false,
//     }
//   );
  
//   module.exports = UserHasTask;