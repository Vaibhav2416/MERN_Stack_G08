const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRET_KEY="PASSKEY"
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
    // if password match => generate token
    const token=jwt.sign({"email":email},SECRET_KEY,{"expiresIn":"1hr"})
    // secret key ==> put stamp on token that It comes from verified source
    res.send({
        "message":"User logged in successfully",
        "token":token
    })
    // jwt.sign(payload,secret_key,expiry time)
})

const authMiddleware=(req,res,next)=>{
    const headers_data=req.headers.authorization
    // {"authorization":"Bearer token_sasavadvadvv"}
    //["Bearer","token"]
    const token=headers_data.split(" ")[1] // token
    console.log(token)
    const decoded=jwt.verify(token,SECRET_KEY)
    if(decoded){
        req.body.user=decoded
        next()
    }else{
        res.send("Invalid Token")
    }
}

app.get("/profile",authMiddleware,(req,res)=>{
    try {
        res.send({"message":"Profile Page","user":req.body})
    } catch (error) {
        res.send("Invalid token",error)
    }
})
// /account => welcome to account page
app.get("/account",authMiddleware,(req,res)=>{
   try {
     res.send("Welcome to account page")
   } catch (error) {
    res.send("Invalid token")
   }
})
app.listen(8000,()=>{
    console.log("Server is running in http://localhost:8000/")
})