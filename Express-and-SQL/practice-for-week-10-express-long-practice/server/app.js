const express = require('express');
const path = require('path')
const app = express();
//phase 1
require("express-async-errors")

app.use(express.static(path.join(__dirname, "assets")))

app.use(express.json())

console.log(process.env.SECRET_MESSAGE)
//phase 2
const restLogger = (req, res, next) =>{
  console.log(req.method, req.url)
  res.on("finish", () =>{
    console.log(res.statusCode)
  })
  next();
}
app.use(restLogger)

//not found middleware
const notFound = ( req, res, next) =>{
  let error = new Error("The requested resource couldn't be found")
  error.statusCode = 404
  throw error
}
//we dont see static asset routes because they are being sent as a response before we add this middleware, so its never reached
// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});


// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body); 
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});
//phase 3/5
const {dogRouter, validateDogId} = require("./routes/dogs") 
const dogFoodRouter = require("./routes/dog-foods")
app.use("/dogs", dogRouter )

app.use("/dogs/:dogId/foods", validateDogId, dogFoodRouter)
//connect not found
app.use(notFound)


//phase 4

const errorHandler = (err, req, res, next) =>{
  console.log(err)
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong",
    statusCode : err.statusCode || 500,
    stack : (process.env.NODE_ENV  === "production" ? undefined: err.stack)

  })
}

app.use(errorHandler)


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
