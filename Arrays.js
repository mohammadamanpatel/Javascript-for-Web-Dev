let a = [1,2,3,4];
console.log("These are the elements of array",a) 
// apan sidha nayi chiz dekhega abhi
let b = [1,2,3,4,5,"Aman","Huzaif"];
b.push(23);
console.log(b)
b.pop()
console.log(b)
//aage se delete ya push karne ke liye in functions ka use kare
b.shift()
console.log(b)
b.unshift(100)
console.log(b)
let c = b.concat(a) 
console.log(a,",",b,",",c)
c = c.join(",")
console.log(c)
console.log(a.indexOf(3))

// a.reverse();
// console.log(a)

a = a.slice(1,3)
console.log(a)

//koi element agar insert karna hai bich se to splice ka use kar sakte

let arr = [1,2,3,4,5,6]
arr.splice(2,0,45)
console.log(arr)

 arr.splice(5,0,50)
console.log(arr)
