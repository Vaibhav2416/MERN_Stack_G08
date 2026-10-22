const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
let user={}  // temporary database
app.post("/register",async(req,res)=>{
    const {email,password}=req.body
    user={
        useremail:email,
        userpassword:await bcrypt.hash(password,10)
    }
    // bcrypt.hash(original_password,salt rounds)
    // salt_rounds = 10 ==> Your password is strong complex
    //                1 ==> your password is less complex
    res.send(`${JSON.stringify(user)} is registered successfully`)
})

//  == => lhs == rhs 
// 123 == "123" ==> true
// 123 ==="123" ==> false
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    // email:aman@gmail.com, password:123
    if(email != user.useremail){
        res.send("User email does not exists")
    }
    const check_password=await bcrypt.compare(password,user.userpassword)
    if(!check_password){
        res.send("Password does not match")
    }
    else{
        res.send("User logged in successfully")
    }
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})