const fs=require("fs")
// fs module will allow you work on file to 
// do multiple operations like read, create, delete, append.

// File Read Operation
// readFileSync => read file synchronously
// console.log("start")
// const data = fs.readFileSync("./students.txt","utf-8")
// console.log(data)
// // console.log(data.toString()) // if you want to skip utf-8
// console.log("end")

// console.log("start")

// fs.readFile("./students.txt","utf-8",(err,data)=>{
//     if(err){
//         return console.log("Error: ",err)
//     }
//     console.log(data)
// })
// console.log("End")

// File Writing Operation
// const text="Welcome to Aristotal"
// fs.writeFile("./hostel.txt",text,(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("Data Saved")
//     }

// })
// Delete File Operation
// fs.unlink("./hostel.txt",(er)=>{
//     if(er){
//         console.log(er)
//     }
// })

// fs.mkdir("college",(er)=>{
//     if(er){
//         console.log(er)
//     }
//     else{
//         console.log("Folder Created")
//     }
// })
fs.readdir("college",(er,files)=>{
    if(er){
        console.log(er)
    }
    else{
        console.log(files)
    }
})