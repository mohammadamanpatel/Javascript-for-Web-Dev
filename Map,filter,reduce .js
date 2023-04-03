// A = [1,2,3,4,5]
// A.forEach(function(element,index,A){
//     console.log(element,index,A)
// })
// console.log("By using arrow function\n")
// A.forEach((element,index,A) =>{
//     console.log(element,index,A)
// })

// console.log("by using map")
// A.map(function(element,index,A){
//     console.log(element,index,A)
// })
// console.log("\n")
// A.map((element,index,A)=>{
//     console.log(element,index,A)
// })

S = ["Aman","shahrukh khan","salman khan","Aamir khan"]
S.map((element)=>{
    console.log(element.toUpperCase())
})

let hero = S.filter((element)=>{
    return element.endsWith('khan')
})
console.log(hero)
// reduce method in js
let gamescore = [225,233,543,111,10]
const sumOfgamescore = gamescore.reduce((prev,curr)=>curr+prev,0)
//every method in js
console.log(sumOfgamescore)
const checktype = gamescore.every((i)=> typeof i === "number")
console.log(checktype)
//find in js
const maxi = gamescore.find((element)=>element>200)
console.log(maxi)
//find ek greedy method hai means jo bhi value isko condition ke according sabse 
//pehle dikhegi ye usi ko show kar dega