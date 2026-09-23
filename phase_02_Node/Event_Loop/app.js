// Event Loop

// console.log("start")
// function a(){
//     console.log("Executing function")
// }
// a()
// console.log("end")


// console.log("start")
// setTimeout(()=>{
//     console.log("executing after 2 seconds...")
// },2000)
// console.log("End")

// Event Loop is a mechanism which constantly checks whether 
// call stack is empty or not, if it is empty then its task is to move all callbacks
// in callstack from queue

// console.log("start")
// btn.addEventListner("click",function(){
//     console.log("button is clicked")
// })
// console.log("end")



console.log("start")
fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()
}).then((data)=>console.log(data))
setTimeout(()=>{
    console.log("Executing after 3 seconds")
},3000)
console.log("End")