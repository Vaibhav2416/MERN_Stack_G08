# Express.js RESTful API & Local JSON Database Guide

A step-by-step guide to building a RESTful API using Node.js, Express.js, and a local `db.json` file for persistence.

---

## 📋 Table of Contents
1. [Project Initialization](#1-project-initialization)
2. [Installing Dependencies](#2-installing-dependencies)
3. [Configuring package.json](#3-configuring-packagejson)
4. [Setting Up the Local Database](#4-setting-up-the-local-database)
5. [Creating the Express Server](#5-creating-the-express-server)
6. [Building API Routes](#6-building-api-routes)
7. [Testing Endpoints with Thunder Client](#7-testing-endpoints-with-thunder-client)
8. [API Reference Summary](#8-api-reference-summary)

---

## 1. Project Initialization

Create a new directory for your project, enter it, and initialize a new Node.js project.

```bash
mkdir express-crud-api
cd express-crud-api
npm init -y
```

> `npm init -y` creates a default `package.json` file that tracks your project's dependencies and scripts.

---

## 2. Installing Dependencies

Install **Express** for building the API and **Nodemon** as a development dependency for hot reloading.

```bash
# Install Express framework
npm install express

# Install Nodemon for automatic server restarts on file save
npm install nodemon
```

---

## 3. Configuring package.json

Open `package.json` and add a `start` script inside the `"scripts"` section:

```json
{
  "name": "express-crud-api",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^3.0.1"
  }
}
```

---

## 4. Setting Up the Local Database

Create a file named `db.json` in your project root directory and add initial sample data:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Aman",
      "email": "aman@example.com"
    },
    {
      "id": 2,
      "name": "Kartik",
      "email": "kartik@example.com"
    }
  ]
}
```

---

## 5. Creating the Express Server

Create a `server.js` file and set up the base Express application structure:

```javascript
const express = require("express");
const fs = require("fs");
const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
    res.send("Welcome to homepage");
});

// Start listening on port 8080
app.listen(8080, () => {
    console.log("Server is running at http://localhost:8080");
});
```

### Starting the Server
Run the application in your terminal using your npm start script:

```bash
npm run start
```

---

## 6. Building API Routes

Add the CRUD operations to `server.js`.

### A. Get All Users (`GET /users`)
Reads the `db.json` file and returns the list of users.

```javascript
app.get("/users", (req, res) => {
    const data = fs.readFileSync("db.json", "utf-8");
    const users = JSON.parse(data);
    res.send(users);
});
```

### B. Add New User (`POST /users`)
Validates that the user's email is unique before saving the new user record.

```javascript
app.post("/users", (req, res) => {
    const data = fs.readFileSync("db.json", "utf-8");
    const users_array = JSON.parse(data);
    
    // Check if email already exists
    const check_user = users_array.users.some((el) => el.email === req.body.email);
    
    if (check_user) {
        res.send("User Already Exists");
    } else {
        const newUser = { ...req.body, id: users_array.users.length + 1 };
        users_array.users.push(newUser);
        fs.writeFileSync("db.json", JSON.stringify(users_array));
        res.send("User Added Successfully, Please check db.json");
    }
});
```

### C. Get Single User by ID (`GET /users/:id`)
Extracts the route parameter `id` and finds the matching user record.

```javascript
app.get("/users/:id", (req, res) => {
    const userId = +req.params.id; // Unary plus (+) converts string to number
    const data = fs.readFileSync("db.json", "utf-8");
    const users_array = JSON.parse(data);
    
    const find_user = users_array.users.find((el) => el.id === userId);
    
    if (find_user) {
        res.send(find_user);
    } else {
        res.send("User Does not Exists in database");
    }
});
```

### D. Update User (`PUT /users/:id`)
Finds an existing user by ID and updates their profile details.

```javascript
app.put("/users/:id", (req, res) => {
    const userId = +req.params.id; 
    const data = fs.readFileSync("db.json", "utf-8");
    const users_array = JSON.parse(data);
    
    const find_user = users_array.users.find((el) => el.id === userId);
    
    if (find_user) {
        find_user.name = req.body.name;
        find_user.email = req.body.email;
        fs.writeFileSync("db.json", JSON.stringify(users_array));
        res.send("User Updated Successfully");
    } else {
        res.send("User Does Not Exists");
    }
});
```

### E. Delete User (`DELETE /users/:id`)
Filters out the matching user ID and updates `db.json`.

```javascript
app.delete("/users/:id", (req, res) => {
    const userId = +req.params.id;
    const data = fs.readFileSync("db.json", "utf-8");
    const users_array = JSON.parse(data);
    
    const deleted_data = users_array.users.filter((el) => el.id !== userId);
    users_array.users = deleted_data;
    
    fs.writeFileSync("db.json", JSON.stringify(users_array));
    res.send("User Deleted Successfully");
});
```

---

## 7. Testing Endpoints with Thunder Client

Install the **Thunder Client** extension in VS Code to test your API routes.

### 1. Test Welcome Route
* **Method:** `GET`
* **URL:** `http://localhost:8080/`
* Click **Send** → Expected Output: `"Welcome to homepage"`

### 2. Test Get All Users
* **Method:** `GET`
* **URL:** `http://localhost:8080/users`
* Click **Send** → Expected Output: JSON array containing initial users.

### 3. Test Add New User
* **Method:** `POST`
* **URL:** `http://localhost:8080/users`
* Go to the **Body** tab → Select **JSON**:
  ```json
  {
    "name": "Rahul",
    "email": "rahul@example.com"
  }
  ```
* Click **Send** → Expected Output: `"User Added Successfully, Please check db.json"`

### 4. Test Get Single User
* **Method:** `GET`
* **URL:** `http://localhost:8080/users/1`
* Click **Send** → Expected Output: User object corresponding to `id: 1`.

### 5. Test Update User
* **Method:** `PUT`
* **URL:** `http://localhost:8080/users/1`
* Go to the **Body** tab → Select **JSON**:
  ```json
  {
    "name": "Aman Verma",
    "email": "aman.verma@example.com"
  }
  ```
* Click **Send** → Expected Output: `"User Updated Successfully"`

### 6. Test Delete User
* **Method:** `DELETE`
* **URL:** `http://localhost:8080/users/1`
* Click **Send** → Expected Output: `"User Deleted Successfully"`

---

## 8. API Reference Summary

| Method | Route | Description | Request Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Root Welcome Message | None |
| **GET** | `/users` | Fetch all users from database | None |
| **GET** | `/users/:id` | Fetch single user by numeric ID | None |
| **POST** | `/users` | Add a new user record | `{"name": "...", "email": "..."}` |
| **PUT** | `/users/:id` | Update user details by ID | `{"name": "...", "email": "..."}` |
| **DELETE**| `/users/:id` | Delete user record by ID | None |