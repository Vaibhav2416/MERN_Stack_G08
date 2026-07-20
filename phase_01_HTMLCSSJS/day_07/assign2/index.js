
// Array Methods in Js



// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// It will reduce lines of code
// easy to read
// mostly used in react
// let arr=[2,4,5,6,7,8]
// forEach 
// arr.forEach((el,index)=>{
//     console.log(el,index)
// })
// let res=arr.map((el,index)=>{
//     return el
// })
// console.log(res)
// let arr=[2,4,5,6,7,8]
// // map, filter , reduce
// // Higher Order Functions
// // A function which takes another function as an argument

// // callback function --> it is passed to another function

// // map --> it will return an array

// let sq=arr.map((el)=>el**2)
// console.log(sq)

// let products=[
//     {"name":"Iphone-14","price":70000,"qty":4},
//     {"name":"S24-Ultra","price":120000,"qty":2},
//     {"name":"Motorola","price":20000,"qty":3},
// ]

// let prices=products.map((el)=>{
//     return el.price
// })
// console.log("prices ", prices)

// HOF ---> 
// forEach, map, filter, reduce

// filter ---> 
// filter also returns array
// It will be used for extraction of data

let numbers=[2,3,4,5,6,7,8]

let res=numbers.filter((el)=>el%2==0)
console.log(res)

//react --> to delete elements

// reduce

// reduce will return single value 
// after doing some mathematical operation

// let ages=[10,20,40,50]

// let calculateSum=ages.reduce((acc,el)=>{
//     return acc+el
// },4)

// // accumulator --> starting value
// console.log("Sum",calculateSum)


// sort

let num=[4,1,50,30,2]

// num.sort()
// console.log("sorted num",num)

let ascendingNum=[...num].sort((a,b)=>a-b)

// num =[1,2,4,30,50]
let descendingNum=[...num].sort((a,b)=>b-a)
// num=[50,30,4,2,1]
console.log(ascendingNum)
console.log(descendingNum)


let arr1=[1,2,3] 
let arr2=[...arr1] // [1,2,3]
//  arr1 = [1,2,3] => 101
//  arr2 = [1,2,3] => 102
arr2.push(5)
console.log("Array 2",arr2)
console.log("Array 1",arr1)

// node js

// js--> it is built to run on browser
// Node js is javascript runtime environment
// which allows to run js outside of 
// browser


// chrome --> v8 engine
// firefox --> spider monkey
// node --> v8 engine

console.log("Hello World")

// right click on current folder
// and then select integrated terminal 