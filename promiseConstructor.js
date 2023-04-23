function createPromise(){
    return new Promise(function exe(resolve,reject){
        setTimeout(function(){
        //   resolve(100)   //at a time ek hi chalega
          reject(100)       // reject ya resolve ke andar ki value as a parameter kaam karegi then,catch ke liye  
          console.log("hello spiderman");
        },3000)
    })
}
let x = new createPromise()
x.then(function fn(parameter1){
    console.log("hello ironman",parameter1)
}).catch(function fn2(parameter2){
    console.log("hello hulk",parameter2);
}).finally(function fn3(){
   console.log("hello ghost rider");
})
//catch callback hell aur inversion of control jesi problems ko resolve karne ke liye use kiya jaata hai
//isse code ki readability increase ho jaati hai

//callback hell means code readibliblity of code difficult hona kyuki fn ke andar fn fir usme fn ese kayi saare
//nested fn ka hona redability ko difficult kar deta hai

//inversion of control means jo asnychronous piece of code usko js nhi likhta wo browser ki taraf se hote hai
//baadme js ko kuch functionalities taaki ese fns chale ab ye function kuch callback to lete hi hai
//ab hame nhi pata ki wo ansynchronous piece of code kese istemaal kar rha hoga wo callback ko ho sakta jitne baar ham calling
//expect karre ho usse zyada baar calling ho rhi ho wo callback ki is problem ko kehete hai inversion of control 


//createpromise fn se ek promise object return hoga
//ab ye promise as a placeholder kaam karega call back se agar comparison kare to means settimeout 
//ka time background me chalega uske baad baaki ke chize hogi execute 