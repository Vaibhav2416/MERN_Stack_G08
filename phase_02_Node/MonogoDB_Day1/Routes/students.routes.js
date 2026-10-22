const {createStudent,getStudents,getSingleStudent}=require("../controllers/studentController")

const express=require("express")
const studentRoutes=express.Router()
// express.Router allows you to write routes
// outside of server.js file
studentRoutes.post("/students",createStudent)
studentRoutes.get("/students",getStudents)
studentRoutes.get("/students/:id",getSingleStudent)
// we are connecting post request with 
// students routes and createStudent function
module.exports={studentRoutes}