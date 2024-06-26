const joi=require("joi")
let objs=[]
const loginSchema=joi.object().keys({
    username: joi.string().email(),
    password:joi.string().min(6).max(18).required()
});

const obj ={
    login: async(req,res)=>{
        try{
        const validate = await loginSchema.validateAsync(req.query)
        // console.log(validate)
        if(validate)
        {
            objs.push(req.query)
        }
        // console.log("PASSWORD=",req.query.password)
        // console.log("objs=",objs)
        return res.send({

            message:"login API",
            data: validate
        })
    } catch(error){
        return res.send({
            message:error.message
        })
    }},
    logout:async(req,res)=>{
        try
        {
            const validate=await loginSchema.validateAsync(req.query)
            if(validate)
            {
                console.log("BEFOREE REMOVALLL ",objs)
                for(x=0;x<objs.length;x++)
                {
                    if(objs[x].username==req.body.username)
                    {
                        objs.splice(x, 1); // Remove the element at index x
                        console.log("removeeed")
                        fl=1
                    }
                }
                console.log("after removeeee ",objs)
            }
            return res.send({
            message:"logout API",
            data: validate
        })
    } catch(error){
            return res.send({
                message:error.message
            })
        }
    },
    resetPassword:async(req,res)=>{
        try{
            var fl=0;
            const validateee=await loginSchema.validateAsync(req.body)
            if(validateee)
            {

                console.log("password=",req.body.password)
                for(x=0;x<objs.length;x++)
                {
                    console.log("objs=",objs[x])
                    console.log("objs.username=",objs[x].username)
                    console.log("objs.password=",objs[x].password)
                    if(objs[x].username==req.body.username)
                    {
                        objs[x].username=req.body.username;
                        objs[x].password=req.body.password;
                        console.log("heheh")
                        fl=1
                    }
                }
                if(fl==1){      
                    console.log("AFTER CHANGE ",objs)
                }
                    }
        return res.send({
            message:"resetPassword API",
            data:validateee,
            //how to print  if(fl==1) over here
        })}
        catch(error){
            return res.send({
                message:error.message
            })
        }
    },
}
module.exports=obj;