const express=require("express")
const cors=require("cors")
const { userRoute } = require("./routes/userRoute.route")
const { connection } = require("./db")
const { menRoute } = require("./routes/products/menRoute.route")
const { womenRoute } = require("./routes/products/womenRoute.route")
const { kidsRoute } = require("./routes/products/kidsRoute.route")
const app=express()
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/users",userRoute)
app.use("/men",menRoute)
app.use("/women",womenRoute)
app.use("/kids",kidsRoute)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`server run at ${process.env.port}` )
    } catch (error) {
        console.log(error.message)
    }
})



