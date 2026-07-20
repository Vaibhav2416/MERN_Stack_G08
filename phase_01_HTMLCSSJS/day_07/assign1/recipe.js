let cardContainer=document.getElementById("cardsContainer")

let fetchData=async(value="")=>{
    let response=await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
    // await will wait till response comes
    let data=await response.json()
    let arr=data.recipes  //[{pizza1},{pizza 2}]
    // [{recipe 1},{recipe 2},{pizza1},{pizza 2}]
    cardContainer.innerHTML=""
    arr.forEach((element,i) => {
        // console.log(element.name)
        // d-0 , d-1, d-3
        cardContainer.innerHTML+=`
            <div id="d-${i}">
                <img src="${element.image}">
                <h3>${element.name}</h3>
                <p>Time: ${element.prepTimeMinutes} Minutes</p>
                <button onclick="handleDelete(${i})">Delete</button>
            </div>
        `
    });
}
fetchData() // recipes

function handleDelete(divId){
    // alert(`trigered ${divId}`)
    let div=document.getElementById(`d-${divId}`)
    div.remove()
}

function searchRecipe(){
    // alert("Search")
    let inp=document.getElementById("inp").value //pizza
    fetchData(inp) // fetchData(pizza)
    // input tag will remain same here
    document.getElementById("inp").value=""
}





// Difference between normal functions and arrow functions
// how hoisting behaves in both?