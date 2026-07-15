
// https://dummyjson.com/recipes

// fetch('https://dummyjson.com/recipes').then(())

// async await
// console.log("hey")
let cardContainer=document.getElementById("cardsContainer")

// let arr=[
//     {"id":1,"name":"Aman","Address":"Shimla"},
//     {"id":2,"name":"Neha","Address":"Shimla"},
//     {"id":3,"name":"Kartik","Address":"Shimla"},
//     {"id":4,"name":"Aman","Address":"Shimla"},
// ]
// // // arr=[1,2,3,4,5]
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i])
// // }


// // foreach

// arr.forEach((el)=>{
//     console.log(el)
//     // console.log(index)
// })
let url='https://dummyjson.com/recipes'
let fetchData=async()=>{
    let response=await fetch(url)
    let data=await response.json()
    
    let arr=data.recipes
    console.log(arr)
    arr.forEach((element,i) => {
        // console.log(element.name)

        cardContainer.innerHTML+=`
            <div id="d-${i}">
                <img src="${element.image}">
                <h3>${element.name}</h3>
                <p>Time: ${element.prepTimeMinutes}</p>
                <button>Delete</button>
            </div>
        `
    });
}
// fetchData()

// Difference between normal functions and arrow functions
// how hoisting behaves in both?