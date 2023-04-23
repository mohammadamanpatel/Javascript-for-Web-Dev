fetch("http://type.fit/api/quotes")
.then(function x(response){
    return response.json();
})
.then(function y(value){
    console.log("done",value)
})

//agar koi chiz by default hi promise return karri hoto {...read the below content}



// esa bhi hota hai ki inbuilt ese bhi API'S jo promise return karte hame unhe sirf get karna hai
// to ham usne lenge ab then bhi ek promise return karta hai to use json ki madad se dusre then 
//me uski value ko get karenge  
//ham fetch api ki madad se direct url se data download kar sakte