// sql ==> id int(30)
const mongoose=require("mongoose")
// we will define schema of any table
const studentSchema=new mongoose.Schema({
    "name":{type:String,required:true},
    "email":{type:String,required:true},
    "age":{type:Number,required:true}
})
// now we need to link this schema with any table/collection
const Student=mongoose.model("Students",studentSchema)
module.exports={Student}