const route=require("express").Router()
const {attendance,result,courseMaterial}=require("../controllers/studentController")
route.get("/grades",result)
route.get("/attendance",attendance)
route.get("/courseMaterial",courseMaterial)
module.exports=route