const route = require("express").Router()
const {createtask,getAlltask}=require("../controllers/taskController")
route.post("/create",createtask);
route.get("/getAll",getAlltask);
// route.delete("/delete",deleteUser);
// route.get("/edit",editUser);
// route.get("/get",getUser);
// route.post("/update",updateUser)
module.exports=route