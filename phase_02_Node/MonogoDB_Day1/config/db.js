const mongoose=require("mongoose")
// mongoose helps to connect nodejs with mongodb and
// it also helps to provide validation without much code
require("dotenv").config()

const connection= mongoose.connect(process.env.MONGO_URL)

module.exports={connection}