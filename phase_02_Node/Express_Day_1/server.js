const express=require("express")
const app=express() //connecting express with application

app.get("/",(req,res)=>{
  res.send("Welcome to Homepage")  
})
app.get("/users",(req,res)=>{
    res.send("Welcome to users page")
})
app.listen(8000,()=>{
    console.log("Server started in http://localhost:8000")
})