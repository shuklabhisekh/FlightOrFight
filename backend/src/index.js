const express = require ("express")

const connect = require("./config/db")
const app = express()
app.use(express.json())

const flightController = require("./controller/flightController")
const airportController = require("./controller/airportController")

let port = process.env.PORT || 5500;

app.use("/flight", flightController)
app.use("/airport",airportController)
app.listen(port, async(req,res)=>{
    try {
        await connect()
        console.log(`working on ${port}`)
    } catch (error) {
        console.log(error)
    }
})
