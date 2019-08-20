const path = require("path");
const http = require("http");
const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath));


io.on('connection',(socket)=>{

    console.log("new User connected...");
    socket.on('disconnect',()=>{
        console.log("user disconnected");
    })

});



app.get("/", (req, res) => {
  res.send(publicPath + "index.html");
});

server.listen(port, err => {
  if (err) throw err;

  console.log(`server started at port ${port}`);
});
