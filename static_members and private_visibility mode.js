class car
{
    #rating
    constructor(x,y,z){
    this.name = x;
    this.price = y;
    }
    commonfunction(a){
      this.#rating = a
      console.log(this.#rating)
    }
    //static functions
    static newCar(){
       console.log("bmw")
    }
}
let obj = new car("audi r8","2000000",5);
console.log(obj)
obj.commonfunction('audi a4')
car.newCar()
