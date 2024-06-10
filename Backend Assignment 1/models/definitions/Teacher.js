const {Model , DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Teacher extends Model {}

Teacher.init({
    TeacherID : {
        primaryKey: true,
        type : DataTypes.STRING(255),
    },

    TeacherName : {
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
    tableName: "Teacher",
    sequelize,
});

module.exports = Teacher;