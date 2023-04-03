const arr = ['spiderman','ghostrider','ironman']
const brr = ['batman','wonderwomen','superman']
const obj = {
    spiderman : "swingging",
    thor : "thunder",
    ghostrider:"fire",
    powers:function(){
     console.log(`power of a hero is ${this.spiderman} `)
    }
}
Object.prototype.Amaan = function (){
    console.log("aman says hi")
}
console.log(arr.Amaan())
console.log(obj.Amaan())

//if i want only for array

Array.prototype.Aman = function(){
    console.log("Amaan says hi")
}
console.log(arr.Aman())

//inheritance

const sigma = {
    patrik_batman:"sigma_male1",
    thomas_shelby:"sigma_male2"
}
const sigma_quality = {
    disipline:"high",
    areTheyareLazy : false,
    __proto__:sigma
}
console.log(sigma_quality.thomas_shelby)
const myself = {
    name:"Aman",
    gender:"male",
    age:20
}
Object.setPrototypeOf(sigma_quality,myself)  //inheriting myself object qualities in sigma_quality object
console.log(sigma_quality.name)

//prototypes on strings

String.prototype.totrimSpace = function(){
    console.log(`now the true length is ${this.trim().length}`)
}
"Aman       ".totrimSpace()
"faizan     ".totrimSpace()