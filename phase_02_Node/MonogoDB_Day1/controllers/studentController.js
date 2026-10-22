const {Student} =require("../models/studentModel")

// CRUD Application
// Create Student
// Mongoose provide you some methods to perform CRUD
// Create => Student.create() =>INSERT INTO ()
const createStudent=async(req,res)=>{
    try {
        const data=await Student.create(req.body)
        // req.body=> name,email,age
        res.send({
            "message":"Student registered successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
// Student.find() => select * from student
const getStudents=async(req,res)=>{
    try {
        const data=await Student.find()
        res.status(200).send({
            "message":"Data fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}

// get single student
const getSingleStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await Student.findById(id)
        res.send({
            "message":"User fetched successfully",
            data
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={createStudent,getStudents,getSingleStudent}