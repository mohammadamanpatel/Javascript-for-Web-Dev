// let square = (x) =>{
//     return x**2;
// }
// function cube(square,x){
//     return square(x)*x;
// }
// x = cube(square,3)
// console.log(x)

// Thoda Complex

// let one = a =>{
//     let two = b =>{
//         let three = c=>{
//             return a + b + c; 
//         }
//         return three;
//     }
//     return two;
// }
// console.log(one(1)(2)(3))


let A = [2,3,4,5]

let Sumarray = a =>{
    total = 0;
    A.forEach(function(element){
        total+=element
    })
    return total
}
console.log(Sumarray(A))

// printing a string every second

// function hello(){
//     console.log("Aman")
// }
// setInterval(hello,1000)

setInterval(() => {
    console.log("Aman",Math.random())
}, 1000);

// setTimeout(() => {
//     console.log("aman")
// }, 2000);