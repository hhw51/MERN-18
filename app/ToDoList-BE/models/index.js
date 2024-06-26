const sequelize = require("../bin/dbConnection")

const users = require("./definitions/users");
const task = require("./definitions/task");
const sessions = require("./definitions/sessions");
// const UserHasTask = require("./definitions/UserHasTask")
users.hasMany(task,{foreignKey:"userID"})
task.belongsTo(users,{foreignKey:"userID"})
users.hasOne(sessions,{
    foreignKey:"userID"
})
sessions.belongsTo(users,{
    foreignKey:"userID"
})
const models ={users,task,sessions};
const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };