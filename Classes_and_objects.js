class container{
    var1;  
    var2;  
    var3;  
    // constructor(x,y,z){
    //     console.log("constructor is called",x,y,z)
    // }
    constructor(x,y,z){
        console.log("we can keep or we can give values to datamembers in constructor also")
        this.var1 = x
        this.var2 = y
        this.var3 = z
        return {x:23,y:"abc"} //by return a non primitive thing in constructor it will overwrite the another
                              //object which was created previously 
    }
    fun(){
       console.log("we can also access the data members in any function")
       //fun function has a access on this
       console.log("this is a class member function",this)
    }
}
let obj = new container("Aman","developer",343) //new keyword creates a empty plain object
console.log(obj)
obj.fun()

