const sequelize = require("../bin/dbConnection")

const Teacher = require("./definitions/Teacher");
const Student = require("./definitions/Student");
const Marks = require("./definitions/Marks");
const models ={Teacher,Student,Marks};
const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };