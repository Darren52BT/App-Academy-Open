const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);
/*
GET /people : Number 1

POST /people/:personId/likes : Number  2

DELETE /people/:personId : Number 3

GET /people/best-dressed/comments : Number 4

GET /people/people/:name/lookup : Number 5
*/




/*create own router*/

const colorsRouter = require("./routes/color")

app.use("/colors", colorsRouter)



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
