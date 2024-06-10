const {Model , DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Student extends Model {}

Student.init({
    StudentID : {
        primaryKey: true,
        type : DataTypes.STRING(255),
    },

    StudentName : {
        unique : true,
        allowNull : false,
        type : DataTypes.STRING(34)
    },
    password :{
        allowNull : false,
        type : DataTypes.STRING(1000),
    },
},
{
    timestamps: true,
    paranoid: true,
    tableName: "Student",
    sequelize,
});

module.exports = Student;