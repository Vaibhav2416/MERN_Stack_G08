
// let name="aman"
// let age=27
// let address="Shimla"

// let person={
//     name:"Aman",
//     age:27,
//     address:"Shimla",
//     marks:[30,50,70]
// }
// console.log(person)
// console.log(person.address) // accessing thorugh dot method
// console.log(person['age']) // accessing thorugh square brackets


// By using Object constructor method

// let student=new Object()
// student['name']="Yogesh"
// student['dob']='29-07-1998' // add properties in obj
// student['dob']='01-07-1998' // updating value in obj
// console.log(student)

// for(let key in student){
//     console.log('Key',key)
//     console.log('Value',student[key])
// }

// console.log(Object.keys(student)) // ['name','dob'] // array of keys
// console.log(Object.values(student)) // ['Aman',"01-07-1998"]//array of values

// let obj = { model: "Tesla", color: "Red" };
// delete obj.color;
// console.log(obj);

// let obj = { model: "Tesla" };
// console.log("color" in obj); // false
// console.log(obj.hasOwnProperty("model"));// true


// let obj = { name: "Sourav", age: 23 };
// console.log(Object.keys(obj).length);//['name','age'].length ==> 2


// let student = {
//     name: "Rahul",
//     age: 21,
//     address: {
//         city: "Delhi",
//         state: "Delhi",
//         pincode: 110001
//     }
// };

// console.log(student.address.pincode)// 110001
// console.log(student.address['pincode'])// 110001

let student = {
    name: "Rahul",
    age: 21,
    city: "Delhi",
    id:{
        adhar:"5203 xxxx xxxx xxxx",
        pan:"hjpe5670x"
    }
};
// console.log(student.name);
// console.log(student.age);
// console.log(student.city);

let {name:studentname,age,city,id:{adhar,pan}}=student // Destructuring of object
console.log(studentname) // Rahul
console.log(age) // 21
console.log(city) //Delhi
console.log(adhar)
console.log(pan)