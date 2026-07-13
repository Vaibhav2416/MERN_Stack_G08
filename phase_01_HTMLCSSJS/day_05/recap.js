// var, let , const
// Whenever script runs then all variables and functions are moved to the
// top of scope
// name,functions,num --> hoisting

// console.log(name)   // undefined
// console.log(num)   // Reference Error --> Cannot access num before initialisation


// Temporal Dead Zone 
// var name="Aman"

// let num=10  //--> Temporal Dead Zone

// var, let, const



// let, const

// let num=50

// num=100

// const age=18
// age=25   // assignment to constant variable

// sync language ---> code will get execute line by line
// // Because js is single threaded language
// console.log("start")
// console.log("process")
// console.log("end")


console.log("Start")

// fetch(url) ---> time taking process
// Js handover this task to browser for handling
let t=document.getElementById("title")
setTimeout(function(){
 t.innerText="Maa, Mai Aagaya"
},4000)

let counter=0
let hCount=document.getElementById("count")

setInterval(function(){
    counter++
hCount.innerText=counter
},1000)

console.log("End")
