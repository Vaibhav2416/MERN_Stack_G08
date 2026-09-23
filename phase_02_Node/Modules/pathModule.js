
// const app=require("./college/app") 
// suppose you are submitting this to github
// and someone with mac or linux operating 
// system uses this path
// ./college => .\college

const path=require("path")

// const filePath=require("/Program Files/Common Files/System")

// windows, macos

const filePath=path.join("Programm Files","Common Files","System","students.txt")
console.log(filePath) // Programm Files\Common Files\System\students.txt

const fileName=path.basename(filePath)
console.log(fileName) // students.txt

const directoryName=path.dirname(filePath)
console.log(directoryName) // Programm Files\Common Files\System\