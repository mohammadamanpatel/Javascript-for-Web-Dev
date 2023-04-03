function param()
{
    let a = Array.from(arguments)
    arr = a.map(e=>e)
    console.log(arr)
}
param(1,2,3,4,5)
function param2(...args)
{
   a = args.map(e=>e)
   console.log(a)
}
param2(2,4,6,7)


// ------------X-------------

a = ["Aman","Rehan","Abuzar","Nabil"] 
b = ["Huzaif",...a,"Raees"]               //Spread Operator
console.log(b) 

//---------X---------

a = "Pw Skills"
console.log([...a])                     //Spread Operator

//--------X---------

a = (...args)=>{
   return args
} 

console.log(["Spiderman","Venom"])