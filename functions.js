// function square(a)
// {
//     return a*a;
// }
// let a = square(3)
// console.log(a)

//Function without parameter

// function stringfn()
// {
//     var A = "aman"
//     return A;
// }
// let a = stringfn()
// console.log(a)

//agar kai saare parameters hoto

function parameters()
{
    let a = 0
    for(let i = 0;i<=arguments.length;i++)
    {
        a = a + i;
    }
    return a;
}

let a = parameters(1,2,3,4,5,6)
console.log(a)