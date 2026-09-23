
const http=require("http") 
// http module will allow you to provide path and methods over server

const server=http.createServer((req,res)=>{
    // res.write("This is write method")
    // res.write("This is second line")
    // res.end("Welcome to First Server Application")
    // res.write("This is after res end")

    if(req.url=="/"){
        res.end("Welcome to Home Page")
    }
    else if(req.url=="/about"){
        res.end("Welcome to about Page")
    }
    else if(req.url=="/products"){
        res.end("Welcome to product page")
    }
    else if(req.url=="/cart"){
        res.end("Welcome to cart page")
    }

})

server.listen(8000,()=>{
   console.log("Server started http://localhost:8000/") 
})

