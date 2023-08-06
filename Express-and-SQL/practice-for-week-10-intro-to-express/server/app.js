const express = require("express")


const app = express()

const port = 3000;

app.get("/", (req, res) =>{
    res.send("the server do be kickin")
})
app.listen( port, () => console.log("server do be runnnin on port", port))
