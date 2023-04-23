const calculate = (a,b,operation)=>{
  return operation(a,b)
}

/// first method     
// const x = calculate(4,5,(num1,num2)=>{
//     return num1*num2;
// })
// console.log(x)

//second method
// const x = calculate(4,5,function(num1,num2){
//    return num1*num2
// })
// console.log(x);

//third method
const x = calculate(4,5,multiply)
console.log(x)
function multiply(num1,num2)
{
    return num1*num2
}

//now some predefined callback fns

// 1) find function
let arr = [1,2,22,0,-2,-6]
function test(element){
    return element<0
}
let find = arr.find(test)
console.log(find);

// 2) findIndex

let findIndex = arr.findIndex(test)
console.log(findIndex); 

//3) forEach(its a iterative method which iterates on every element)

arr.forEach(function (e,i){
   console.log(e,i);
})

//another method of forEach

arr.forEach((e,i)=>{
   console.log(e,i);
})