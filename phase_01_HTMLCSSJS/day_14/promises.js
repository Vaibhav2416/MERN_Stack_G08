// Synchronous Javascript
// Code will get executed line by line

console.log("start")

// let fetchData=async()=>{
//     try {
//         let response=await fetch("https://dummyjson.com/products") // getting data from api
//         let json_products=await response.json()
//         console.log(json_products)// 2 min
//     } catch (error) {
//         alert("Error from network")
//         console.log("Error here",error)
//     }
// }
// fetchData()
// pending, success, failure

// let resp=fetch("https://dummyjson.com/products")
//             .then((response)=>{
//                 return response.json()
//             }).then((json_products)=>console.log(json_products))

// let resp=fetch("https://dummyjson.com/products")
//             .then((response)=>{
//                 return response.json()
//             }).then((json_products)=>{
//                 console.log(json_products)
//                 return fetch("https://dummyjson.com/recipes")
//             }).then((resp)=>{
//                 return resp.json()
//             }).then((json_recipes)=>{
//                 return console.log("Recipes ", json_recipes)
//             }).catch((error)=>console.log(error))
// If we use multiple then statement to handle multiple promises 
// then it is promise chaining.


// One eccomerce page
// User details ==> Order Details

// promise => It is javascript object
//          which will give completion
//         or rejection of any operation

// promise => pending, success,reject
// aync await
// .then method
// console.log("hello")

// Construct your own promise

let ownPromise=new Promise((resolve,reject)=>{
    let status=false
    if(status){
        resolve("Promise is completed")
    }else{
        reject("Promise is rejected")
    }
})

ownPromise.then((resp)=>console.log(resp))
        .catch((error)=>console.log(error))
        
console.log("end")