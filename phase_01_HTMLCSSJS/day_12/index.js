// ES6 Features => Ecmascript  6 ==> 2015

// let, const, arrow functions, template literals, destructuring,
// spread , rest operators, default parameters

// Template literals

// before es6 feature => template literal

// let name="Aman"
// let age=28

// console.log("My name is "+name+" And age is "+age)
// // required too many plus signs to call variables
// console.log(`My name is ${name} and age is ${age}`) // after es6


// Destructuring
// Object Destructuring
// let obj={
//     moviename:"Avtaar",
//     rating:4.8
// }
// console.log(obj.moviename) // Avtaar
// let {moviename,rating} = obj
// console.log(rating) // 4.8
// // Array Destructuring
// let arr=[10,20,30]
// let [a,b]=arr
// console.log(a,b) // 10,20


//  Spread Operator (...) 
// The JavaScript spread operator (...) copies all or part 
// of an existing array or object into another array or object.

// let arr1=[10,20,30]  //101
// let arr2=arr1       // 101
// // arr1 and arr2 both shares same memory address
// arr2.push(90)
// console.log(arr1) // [10,20,30,90]
// console.log(arr2) // [10,20,30,90]

// let arr3=[40,50,60] // 101
// let arr4=[...arr3]  // 201
// arr4.push(70)
// console.log(arr3)  // [40,50,60]
// console.log(arr4)  // [40,50,60,70]

// Combining Arrays through spread

// let fruits = ["Apple", "Mango"];
// let vegetables = ["Potato", "Tomato"];
// let food = [...fruits, ...vegetables];

// console.log(food);
// fruits.concat(vegetables)

// let user = {
//     name: "Aman",
//     age: 25
// };
// let newUser = {
//     ...user
// };

// console.log(newUser);

// let user = {
//     name: "Aman",
//     age: 25
// };
// let newUser = {
//     ...user,
//     city:"Shimla"
// };
// console.log(newUser) // {name:"Aman",age:25,city:"Shimla"}


// let todo={
//     title:"Learn React",
//     status:false
// }
// let updatedTodo={
//     ...todo,
//     status:true
// }
// console.log(updatedTodo) //{title:"Learn React",status:true}

// // Order matters in spread operator
// let todo={
//     title:"Learn React",
//     status:false
// }
// let updatedTodo={
//     status:true,
//     ...todo,
// }
// console.log(updatedTodo) //{title:"Learn React",status:false} 


// Rest Operator (...)  // values or properties will pack here

// function calculateSum(a,...num){
//     console.log(a)
//     console.log(num)
// }
// calculateSum(10,20,30,40,50,60)

// spread ==> to unpack values
// rest ==> to pack values

// Default Paramter

function nationality(country="India"){
    console.log(`This person belong to ${country}`)
}
nationality()
nationality("America")