const {Model , DataTypes} = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Marks extends Model {}

Marks.init({
    grades : {
        primaryKey: true,
        type : DataTypes.STRING(255),
    },
},
{
    timestamps: true,
    paranoid: true,
    tableName: "Marks",
    sequelize,
});

module.exports = Marks;