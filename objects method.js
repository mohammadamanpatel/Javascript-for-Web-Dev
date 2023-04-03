let emp = {name:"aman",gender:"male",id:232}
console.log(emp)
let keys = Object.keys(emp)
console.log(keys)
let values = Object.values(emp)
console.log(values)
let entries = Object.entries(emp)
console.log(entries)

//is seal fn me update kar sakte but add nhi kar sakte 

Object.seal(emp)
emp.id = 200
emp.roll = 32
console.log(emp)

// is freeze fn me na update kar sakte na add kar sakte

Object.freeze(emp)
emp.id = 200
emp.roll = 32
console.log(emp)

let a = Object.assign({},emp)
console.log("whole object is copied in a")
console.log(a)

 a = Object.assign({roll:34},emp)
console.log("whole a object is copied in a with a new key value pair")
console.log(a)