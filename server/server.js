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


   
    
    //listen to new msg from client
    socket.on('createMsg',(newMsg)=>{
        console.log('createMsg',newMsg);
        io.emit('newMsg',{
            from: newMsg.from,
            text: newMsg.text,
            createdAt:new Date().getTime()
        })
    });

     //send new msg from server to client
    socket.emit('newMsg',{
        from: "Prajwal",
        text: "Hello ,anybody there??",
        createdAt: new Date().getTime()
    });
    
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
