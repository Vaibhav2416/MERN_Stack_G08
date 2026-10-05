const express=require("express")
const app=express() //connecting express with application
const fs=require("fs")
app.use(express.json()) // this will tell express explicitly
// that client is sending json data

app.get("/",(req,res)=>{
  res.send("Welcome to Homepage")  
})
app.get("/users",(req,res)=>{
    // we will create one file from which we will fetch users data
    const data=fs.readFileSync("db.json","utf-8") // readfile
    const js_objects=JSON.parse(data)
    res.send(js_objects)
})
app.post("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8") // readfile
    const js_objects=JSON.parse(data)
    console.log(js_objects)
    const newUser={...req.body,id:js_objects.users.length+1} // {"id":3,"name":"Manish","email":"manish@gmail.com"}
    
    // Checking user exists or not
    const check_user=js_objects.users.some((el)=>el.email==newUser.email)
    // el==> [{"id":"1","email":"aman@gmail.com"}]
    // check_user will return true or false
    if(check_user){
        res.send("User Already Exists")
    }
    else{
         js_objects.users.push(newUser)// accessing users key from js_objects
        fs.writeFileSync("db.json",JSON.stringify(js_objects))
        res.send("User saved successfully")
    }
   
})

// Getting single user
app.get("/users/:id",(req,res)=>{
    // parameters ==> {"id":1,"subid":4}
    const userId=req.params.id // users/:4 ==> 4 
    // when we get userId from client then we need to match that id with database
    // id and fetch relevent user from db
    const data=fs.readFileSync("db.json","utf-8") // readfile
    const js_objects=JSON.parse(data)

    const find_user=js_objects.users.find((el)=>el.id==userId)// finding user 
    // who will match with client's entered id 

    if(find_user){
        res.send(find_user) // providing all details of userId 4 here 
    }
    else{
        res.send("User does not exists")
    }
    // res.send("Single User Fetched")
})

// Deleting single user
app.delete("/users/:id",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8") // readfile
    const js_objects=JSON.parse(data)
    const userId=req.params.id
    const updated_data=js_objects.users.filter((el)=>el.id!=userId)
    js_objects.users=updated_data
    fs.writeFileSync("db.json",JSON.stringify(js_objects))
    res.send("User deleted successfully")
})
app.put("/users/:id",(req,res)=>{
   const data=fs.readFileSync("db.json","utf-8") // readfile
   const js_objects=JSON.parse(data)
   const userId=req.params.id
   const find_user=js_objects.users.find((el)=>el.id==userId) // 4 th id data here
   find_user.email=req.body.email
   find_user.name=req.body.name
   fs.writeFileSync("db.json",JSON.stringify(js_objects))
   res.send("User updated successfully")
})
app.listen(8000,()=>{
    console.log("Server started in http://localhost:8000")
})