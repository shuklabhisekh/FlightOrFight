const express = require ("express")

const connect = require("./config/db")
const app = express()
app.use(express.json())

const flightController = require("./controller/flightController")


let port = process.env.PORT || 5500;

app.use("/flight", flightController)

app.listen(port, async(req,res)=>{
    try {
        await connect()
        console.log(`working on ${port}`)
    } catch (error) {
        console.log(error)
    }
})
