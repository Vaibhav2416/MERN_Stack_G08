const express=require("express")
const app=express()
const {studentRoutes}=require("./Routes/students.routes")
const {connection}=require("./config/db")

app.use(express.json())
app.use("/",studentRoutes)
// http://localhost:8000/students
app.listen(8000,async()=>{
    try {
        await connection
        console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
})