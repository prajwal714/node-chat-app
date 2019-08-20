var socket=io();
    socket.on('connect',function(){
        console.log("connected to server");
    });

    socket.on('disconnect',function(){
        console.log("Disconnected from server");
    });

    //listen to a new mssg from server
    socket.on('newMsg',function(msg)
    {
        console.log("New Message recieved", msg);
    });

    //emit a new msg from client to server
    socket.emit('createMsg',{
        from: "Manvi",
        text: "Yes I am there",
        createdAt: new Date().getTime()
    });

    