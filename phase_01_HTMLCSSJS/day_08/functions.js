// Functions
// If you want to repeat certain snippet of code then you construct
// one method which is called as function 
greetMessage()
function greetMessage(){   // Function Declaration
    console.log("Good Morning")
}
greetMessage() // Function Calling

// function calculateProduct(a,b){ // parameters
//     // console.log(a*b)
//     return a*b
// }
// function calculateSubtraction(a,b){
//     return a-b
// }
// // apifetch ---> function --> return 
// let result=calculateProduct(4,5) + calculateSubtraction(7,3)  // arguments
// console.log(result)


// Function Expressions
// let, const --> TDZ 
// x()
// let x=function(a){
//     return a**2
// }

// console.log(x(5))

// let checkNationality=function(country="India"){ // Default Parameter
//     return `This person has ${country} nationality`
// }
// let res=checkNationality("Japan")
// console.log(res)


// Arrow Functions

let x=(a)=>a%2==0; // no need of return for single line functions
console.log(x(7))

let res=(a,b)=>{
    let c=10
    let num=(a+b)-c
    return num
}
console.log(res(20,5))