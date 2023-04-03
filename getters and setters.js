// class car {
//     #rating
//     constructor(x, y, z) {
//         this.name = x;
//         this.price = y;
//     }
//     set setfunction(a) {
//         this.name = a
//     }
//     get getfunction() {
//         console.log(this.name)
//     }
// }
// let obj = new car("audi r8", "2000000", 5);
// console.log(obj)
// obj.setfunction = 'audi a4'
// obj.getfunction

class Complex{
    #real
    #imag
    constructor(x,y)
    {
        this.#real = x
        this.#imag = y
    }
    display()
    {
        console.log(this.#real ,'+', 'i',this.#imag)
    }
    get real(){
        return this.#real
    }
    get imag(){
        return this.#imag
    }
    add(c){
        this.#real+=c.real
        this.#imag+=c.imag
    }
}
let obj1 = new Complex(2,3)
let obj2 = new Complex(4,5)
obj1.add(obj2)
obj1.display()