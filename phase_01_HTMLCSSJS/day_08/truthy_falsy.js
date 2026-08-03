// // undefined, null, Nan, 0, "" , false --> This are falsy values

// // let a=false; 

// // console.log(Boolean(a))
// // 1 --> true
// // 0 --> false

// // console.log(true+6) // 7
// // console.log(false+5) // 5 --> 

// // Type Conversion

// // Implicit Type Conversion

// // console.log("5"+5) // automatic detected by js
// // console.log("7"-2) // 7 will be converted into number
// // console.log("3"*2) 

// // Explicit type conversion

// let num=10;
// let strNumber=String(num)
// console.log(typeof(num))
// console.log(typeof(strNumber))

// let str="123" // string
// // let number=Number(str) // number
// let number=+(str) // number
// console.log("Type of number",typeof(number))// alternative

// let s="true" // string
// console.log(typeof(Boolean(s))) // boolean

// let curr='400 Rs.' // string
// console.log(parseInt(curr)) // 400 

// let c='Rs. 400' // string
// console.log(parseInt(c)) // Nan 


// let alp=Boolean("123abc") // true
// let ab=Boolean(undefined) // false



// let a = false;
// let b = 0;
// let c = null;
// // if one of value from expression is true then you will get that

// let z = a || b || c;  //null

// console.log(z)
// if all values are falsy in || statement then 
// you will get last falsy value

// let a = false;
// let b = 'Vivek';
// let c = 'Rishi';


// let z = a || b || c;


// console.log(z);

// let defaultUser = "Vivek";
// let user = "Akash"
// console.log(defaultUser || user)

// let a = 'Prachi';
// let b = 'Vivek';
// let c = 'Rishi';
// // if all values are true then && will return last value
// let z = a && b && c; // Rishi

// // isAuthenticated && isAdmin && showUIPage
// console.log(z);

// 
// undefined or null
// let user="Hello";
// console.log(user ?? "The value is not defined");

// img src="" , alt=""


// let obj={
//     name:"Aman",
//     age:20,
//     address:"Shimla"
// }

// for(let key in obj){
//     console.log("Keys here ",key) // name age
//     console.log("Values ",obj[key]) // Aman 20
// }
// console.log(key)

const subjects = ['javascript', 'html', 'css'];


for (let subject of subjects) {
  console.log(subject); 
}





