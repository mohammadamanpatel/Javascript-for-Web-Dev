let a = [2,3,4,5]
let MySet = new Set(a)
console.log(MySet)
MySet.add(6)
console.log(MySet)
console.log(MySet.has(14))
MySet.clear()
console.log(MySet)

//---------X---------

//Find the common elements from SetA and SetB

function CommonElements (SetA,SetB)
{
  console.log(new Set([...SetA].filter(element=> !SetB.has(element))))
}
arr1 = [2,4,5,6,7,8,9]
SetA = new Set(arr1)
arr2 = [2,4,5,6]
SetB = new Set(arr2)
SetC = CommonElements(SetA,SetB)
console.log(SetC)
//maps in js
//map is a ds in js that allows us to store any datatype key with a particular value

let myMap = new Map();
myMap.set('a' , 34)
myMap.set('b' , 56)
myMap.set('c' , 67)
console.log(myMap)
console.log(myMap.get('a'),myMap.get('b'),myMap.get('c'))

//Converting the elements of array in a map

let arr = [
  [1,"aman"],
  [2,"nomaan"],
  [3,"huzaif"],
  [4,"kaioken"],
]
let map = new Map()
let newMap = arr.map((element)=> map.set(element[0],element[1]))
console.log(newMap)
