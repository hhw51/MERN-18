const arr=[1,2,3,4,5]
//rest 
const [a,...b]=arr
console.log("a = ",a,"\nb = " , b)

//spread

const arr2=[...arr]
console.log("arr2 = ",arr2)

const arr3=[1,2,...arr]
console.log("arr3 = ",arr3)


// rest operator in function as argument(parameters)
// spread operator in function as reference
// ..rest=...spread

//rest
function restt(a , ...b){
    console.log("a= ",a)
    console.log("b= ",b)
}
const arrs=[1,2,3,4,5,6,7,8]
restt(...arrs)

//spread
function spreadd(a,b,c)
{
    console.log("a= ",a)
    console.log("b= ",b)
    console.log("c= ",c)

}
spreadd(...arrs)

//foreach : used for arrays
let arr5=[1,2,3,4,5,6,76,87,87]
console.log("arr5= ",arr5)
arr5.forEach((item,index,arr) => {
    arr[index]=arr[index]*2;
});
console.log("arr5= ",arr5)


//map
// let arr6=[1,2,3,4,5,6,76,87,87]
// let arr7=arr6.map((item,index,arr) => {
//     arr[index]=arr[index]*2;
// });
// console.log("arr6= ",arr6)
// console.log("arr7= ",arr7)
