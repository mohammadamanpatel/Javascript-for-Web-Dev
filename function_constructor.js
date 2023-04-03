// Function Constructor
function phone(a,b,c){
    this.nameofphone = a
    this.price = b
    this.stroge = c
  } 
  let a = new phone("samsung galaxy s21",125000,"8gb")
  console.log(a)
  
let x={
    a:phone
}
x.a("iphone 14",200000,"128gb");
console.log(x)

//this can be used in normal functions and in anonymous function but thet are not applicable in arrow function 

let product = function(x,y,z){
    this.name = x;
    this.price = y
    this.stroge = z
}
let b = new product("ipad",120000,"256gb")
console.log(b)