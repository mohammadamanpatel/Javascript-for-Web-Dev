globalVar = 34;
function outer() {
    outervar = 56;
    console.log(outervar,globalVar)
    function inner() {
        innervar = 78
        console.log(innervar,outervar,globalVar)
        function Innerinner(){
           InnerinnerVar = 89
           console.log(InnerinnerVar,innervar,outervar,globalVar);
        }
        Innerinner()
    }
    inner()
}
outer()

//ek chota bacch bade ki icecream le sakta but ek bada kisi chote ki icecream nhi le sakta
//aur isi ko lexical scoping kehte hai aur closure keshte hai

let nums = [1,2,3,4,5]
let count = 0;
nums.map(function ArrayLength(element){
    count++;
}) 
console.log(count);

//ham count ki value ko update isi closure property se kar paaye hai