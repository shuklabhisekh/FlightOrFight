const express = require ("express")
const cors = require("cors")
const connect = require("./config/db")
const app = express()
app.use(express.json())

// Controller for flight
const flightController = require("./controller/flightController")
// Controller for airport
const airportController = require("./controller/airportController")

let port = process.env.PORT || 5500;
app.use(cors());

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
