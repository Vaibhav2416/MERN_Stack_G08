
//  Callback Functions

// A function which is passed as an 
// arguement is called callback function


// function greetMessage(callbck){
//     console.log("Welcome to Chitkara")
//     callbck()
// }

// function callbck(){
//    console.log("Good Morning") 
// }

// greetMessage(callbck)

// blinkit --> payment, order pack,delivery

function makePayment(packOrder){
    console.log("Payment is getting started....")

    setTimeout(function(){
        console.log("Payment is completed")
        packOrder()
    },3000)
}
function packOrder(deliverOrder){
    console.log("Order is getting packed")
    setTimeout(function(){
        console.log("Order is packed")
        deliverOrder()
    },3000)
}
function deliverOrder(openBox){
    console.log("Delivery partner is getting assigned...")

    setTimeout(function(){
        console.log("Order is dispatched")
        openBox()
    },3000)
}
function openBox(){
    console.log("Sending Otp to user..")
    setTimeout(function(){
        console.log("Otp matched")
    })
}
// callback hell or Pyramid of Doom
// makePayment(function(){
//     packOrder(function(){
//         deliverOrder(function(){
//             openBox()
//         })
//     })
// })

// setTimeout(task,4000)

// Promises

// makePayment
//     .then(packOrder)
//     .then(deliverOrder)
//     .then(openBox)


// It gives eventual completion or rejection of any
// order

