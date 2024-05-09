function f1(p1,p2)
{
    console.log(p1,p2);
}
f1(2,3);
var f2 = function(p1,p2)
{
    console.log(p1,p2);
}
f2(2,3);
var f3 = (p1,p2)=>
{
    console.log(p1,p2);
}
f3(2,3);

((params)=>{
    console.log(params);
})
("args"); //IIFE Immediatrely invoked function

const fun1 =(params)=>{
    console.log("initial print ",params);
    params=3;
    console.log("INSIDE FUNTION",params);
}

let params=2;
fun1(params);
console.log("after changeee: ",params)

const newName=function(a,name){
    console.log("NAME BEFORE CHANGE ",name)
    a("HARIS");
}

module.exports=newName;

const arr = [1,"one", true,null,undefined,{},[]]
console.log(arr)


//Method : PushManager, pop , shift , unshift , indexOf, includes
// Map, filter , find , flat ,flatMap

arr[8]="NewValue";
console.log(arr)

const [a,b]=arr; //array destructuring
console.log(a,b)
const [x,...y]=arr; //rest operator
console.log(a,b)


//rest spread operator

//objects
const obj1={
    name:"HARIS",
    age:22,
    courses:["MERN","DS","CS"]
}
const obj2={
    name:"HARIS",
    age:22,
    courses:["MERN","DS","CS"]
}
obj1["gender"]="MALE";
console.log(obj1)
arr=[obj1,obj2]
console.log(Object.entries(obj2))
// console.log(arr[1][1]);
// int fun()
// {
//      return 1+2; 
// }
    // int a=fun1()
// function F1(p){
//     console.log(p);
//     p(3);
// }
// function up(newParams){
//     F1(newParams)
// }
// let a=3;
// console.log("Before updation : ", a)
// up((a))
// console.log("After updation : ", a)
