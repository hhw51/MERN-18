const joi=require("joi");
var grades={"Haris":3.42,"Ali":3.11,"Umar":1.92}
const loginSchema=joi.object().keys({
    username: joi.string().pattern(/^[A-Za-z]+$/),
    id: joi.string().pattern(/^\d{4}$/)
});
var attendancee={"Haris":37,"Ali":94,"Umar":75}
var courseMateriall={"Haris":"Chapter 1 HEHE","Ali":"Chapter 2 SST","Umar":"Chapter 3 SCIENCE"}

var gk=Object.keys(grades)
var ak=Object.keys(attendancee)
var ck=Object.keys(courseMateriall)
var gradeValue;
var temp;
const obj={
    attendance:async(req,res)=>{ 
        try{const validate = await loginSchema.validateAsync(req.query)
            if(validate)
            {
                for (let key in attendancee) {
                    if(req.query.username==key) // Outputs: Haris, Ali, Umar
                    {
                        temp=key
                    }
                }
            }
            gradeValue=attendancee[temp]
            return res.send({
                message:"attendance API",
                ez : gradeValue     
            })
        }catch(error){
                return res.send({
                    message:error.message
                })
            }
    },
        result:async(req,res)=>{
        const validate = await loginSchema.validateAsync(req.query)
        try{
        return res.send({
            message:"result API"
        })}catch(error){
            return res.send({
                message:error.message
            })
        }
    },
        courseMaterial:async(req,res)=>{
        const validate = await loginSchema.validateAsync(req.query)

        try{
            return res.send({
                message:"courseMaterial API"
            })}catch(error){
                return res.send({
                    message:error.message
            })
            }
    },

}

module.exports=obj;