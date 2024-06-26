const route = require("express").Router()
const {createUser,deleteUser,editUser,getUser,getAllUser, updateUser}=require("../controllers/userController")
route.post("/create",createUser);
route.delete("/delete",deleteUser);
route.get("/edit",editUser);
route.get("/get",getUser);
route.get("/getAllUsers",getAllUser);
route.post("/update",updateUser)
module.exports=route