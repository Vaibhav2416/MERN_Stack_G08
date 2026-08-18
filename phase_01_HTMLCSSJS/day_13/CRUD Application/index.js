// User Registration Form
// CRUD
// Name, Email, Age ==> Json-server => POST Request
// Show Data        ==> Get request on json
// Delete Data      ==> Delete request
// Update Data      ==> Put request

const API_URL = "http://localhost:3000/users";

let editingId = null;


let handleSubmit = async (event) => {

    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let obj = {
        name: name.value,
        email: email.value,
        age: age.value
    };


    // POST
    if (editingId === null) {

        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        alert("User Registered Successfully");

    }


    // PUT
    else {

        await fetch(`${API_URL}/${editingId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(obj)

        });

        alert("User Updated Successfully");

        editingId = null;

    }


    name.value = "";
    email.value = "";
    age.value = "";

    getData();
};


// GET

let getData = async () => {

    let resp = await fetch(API_URL, {
        method: "GET"
    });

    let data = await resp.json();

    displayData(data);
};

getData();


let container = document.getElementById("container");

let displayData = (data) => {

    console.log("Display function data", data);

    container.innerHTML = "";

    data.forEach(element => {

        container.innerHTML += `
            <div>
                <h2>${element.name}</h2>

                <p>${element.email}</p>

                <p>${element.age}</p>

                <button
                    onclick="handleDelete('${element.id}')">
                    Delete
                </button>

                <button
                    onclick="editUser('${element.id}')">
                    Update
                </button>
            </div>
        `;

    });
};


// DELETE

let handleDelete = async (userId) => {

    await fetch(`${API_URL}/${userId}`, {
        method: "DELETE"
    });

    getData();
};


// EDIT

let editUser = async (userId) => {

    let resp = await fetch(`${API_URL}/${userId}`);

    let user = await resp.json();


    // Put existing data into form

    document.getElementById("name").value =
        user.name;

    document.getElementById("email").value =
        user.email;

    document.getElementById("age").value =
        user.age;


    // Store ID

    editingId = userId;
};