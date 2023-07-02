const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http")

server = http.createServer((req, res) =>{
    let reqBody = ""
    console.log(req.method)
    console.log(req.url)
    req.on("data", (data) => {
        reqBody += data
    })
    req.on("end", ()=>{

        if (reqBody.length > 0){
            req.body = parseBody(reqBody)
        }

        sendFormPage(req, res)
    })
})
let port = 5000
server.listen(port, () => console.log("Successfully started the server on port " + port))
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
