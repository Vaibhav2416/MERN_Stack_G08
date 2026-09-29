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
    const newUser=req.body
    console.log(newUser)
    res.send("Making Post Request")
})
app.listen(8000,()=>{
    console.log("Server started in http://localhost:8000")
})