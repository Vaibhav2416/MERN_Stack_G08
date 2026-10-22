const express=require("express")
const app=express()

// Middleware => 
// Middleware is a function which runs between request and
// resposnse
// client(req) ===> middleware [validates req] ==> response
// client(req) ===> middleware [not validates req] ==> send back to client 
// student  ===> Security guard ke pass ==> he/she can enter in college

app.use(express.json())
// express can't decide which data is coming from client, it 
// confuses between json data, text data, file data, etc, so
// we need to mention that incoming data will be json data only
const validateData=(req,res,next)=>{
    const {email,password}=req.body
    console.log(email,password)
    if(!email.includes("@") || !email.endsWith(".com")){
        res.status(400).send("Input credentials are not valid")
    }
    else{
         console.log("Validation Middleware is running")
         next() 
    }
    // it will allow to pass request to next middleware// if next
    // middleware is not present then it is passed to next route
}
const authData=(req,res,next)=>{
    console.log("Auth wala middleware is running")
    next()
}
// app.use(authData) // order 1 // Auth wala middleware 
// app.use(validateData) // order 2 // validation wala middleware
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})

// client ==>req=>middleware=>next()=> req will pass to "/"
app.get("/profile",validateData,authData,(req,res)=>{
    res.send("Welcome to my proifile page")
})

app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000")
})