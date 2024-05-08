//Method : push , pop , shift , unshift , indexOf, includes
// Map, filter , find , flat ,flatMap

let arrw=[1,2,4,5,6,7];
console.log("array= ",arrw) 

console.log("arrw.push(9) ",arrw.push(9)) //inserts at last index of array
console.log("array after push = ",arrw) 

console.log("arrw.pop() ",arrw.pop()) // deletes value from last index and returns value
console.log("array after pop = ",arrw) 

console.log("arrw.shift() ",arrw.shift()) //
console.log("array after shift = ",arrw)

console.log("arrw.unshift() ",arrw.unshift(10)) //
console.log("array after unshift = ",arrw)

console.log("arrw.indexof() ",arrw.indexOf(4)) //
console.log("array after indexof = ",arrw)

console.log("arrw.includes() ",arrw.includes(4)) //
console.log("array after includes = ",arrw)

let newarr=arrw.map(num=>num/2)
console.log("old array after map = ",arrw)
console.log("new array after map = ",newarr)

let newa=arrw.filter(num=>num%2===0)
console.log("old array after filter = ",arrw)
console.log("new array after filter = ",newa)

let newar=arrw.find(num=>num%2===0)
console.log("old array after find = ",arrw)
console.log("new array after find = ",newar)

let nea=[1,2,[3,4,[5,6]]]
let flatarr=nea.flat();
console.log("old array after flat = ",nea)
console.log("new array after flat = ",flatarr)
console.log("new array after 2 times flat = ",flatarr.flat())


let fmarr = nea.flatMap(num => [num * 2]); 
console.log("old array after flatmap = ",nea)
console.log("new array after flatmap = ",fmarr)
