const route = require("express").Router()
const {login,logout,resetPassword}=require("../controllers/authController")
route.post("/login",login);
route.delete("/logout",logout);
route.put("/resetPassword",resetPassword);

module.exports=route