// This is a Chat Server by socket io 

const sockio = require('socket.io')(5000,{
cors:{
    origin :'*'
}
});
const users={};


sockio.on('connection',socket=>{

    socket.on('new-user-joined',name=>{
        console.log("new user :",name);
        users[socket.id]=name;
socket.broadcast.emit('user-joined',name);
    });

socket.on('sendMsg',message=>{
socket.broadcast.emit('recive',{message:message,name:users[socket.id]});
});

});