const newName=require("./day1");
let name="AFAQ";
const updateName=function(nName)
{
    name= nName
};
newName(updateName,name);
console.log(name);