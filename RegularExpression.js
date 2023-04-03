let pattern = 'khan'
let flag = 'gi'
// gi,will,modifier will do insensitive search 
const regEx = new RegExp(pattern,flag)
console.log(regEx)
let stringName = "King Khan"
let result = regEx.test(stringName)
console.log(result)
let result2 = stringName.match(regEx)
console.log(result2)

const regEx2 = /Khan/gi
console.log(regEx2)

let str = "king khan is ShahRukh khan"
let replaceKhan = str.replace(regEx2,"KHAN")
console.log(replaceKhan)

let url = "http://codewithharray.com/harry%20bhai"
let replacePercent20 = url.replace(/%\d\d/,"_")
console.log(replacePercent20)