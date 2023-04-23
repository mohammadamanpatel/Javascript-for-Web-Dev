function createPromise(){
    return new Promise(function exe(resolve,reject){   //pehle ye back me execution iska start hoga
        setTimeout(()=>{
         console.log("we are inside setTimeout")
         resolve(100)
        },3000)
    })
}
console.log("start") //fir ye to jab hi ho jayega
// async function Fn(){
//     let x = await createPromise()  //last me syn me execution start hoga but in async execution happens 
                                      //synchronously   
//     console.log(x)
// }
console.log("end"); //ye bhi jabhi ho jayega
// Fn();

//we can bind aynx in try,catch
try{
    async function Fn(){
       console.log("inside async");
       const x =  await createPromise()
       const x1 =  await createPromise()
       console.log(x);
       console.log(x1);
    }
    Fn()
}
catch(error){ //agar promise me reject hua to catch chalega aur reject me ka parameter error me show hoga
              //console.log me
     console.log("handled",error)
}