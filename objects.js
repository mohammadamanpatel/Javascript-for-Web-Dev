let obj = {name:"Aman",gender:"Male",age:20};
console.log(obj)
let skill = new Object()
skill.name = "Aman"
skill.rollno = "32"
skill.gender = "Male"
console.log(skill)

function a(x,y,z)
{
    this.id = x
    this.Name = y
    this.rollno = z
}
let x = new a(2324,"aaa",23)
console.log(x)

x.gender = "male"
console.log(x)

x.salary = 0
console.log(x)

delete x.id 
console.log(x)

