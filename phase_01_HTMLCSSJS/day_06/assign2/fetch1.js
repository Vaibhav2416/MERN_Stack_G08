
let container=document.getElementById("container")

// api ---> interface that connects two systems

// fetch('api',[methods])

let response=fetch("https://dummyjson.com/products")
            .then(function(res){
                    return res.json()
            }).then(function(data){
                // data.products --> array
                for(let item of data.products){
            container.innerHTML+=`
                <div>
                <img src="${item.images[0]}" alt="">
                <h2>${item.title}</h2>
                <p>Brand:${}</p>
                <p>Price:${}</p>
                </div>
                    `
                }  
            })
// asyn function
// you will get raw format data here, and that we need 
// to convert in javascript objects

let obj={"id":1,"name":"Tshirt"}
