var app = require("express")()
var http = require('http').Server(app);
var io = require('socket.io')(http)

var clients = {};

app.get('/', function(req, res){
res.send('server is running');
});

//SocketIO vem aqui

http.listen(3000, function(){
console.log('listening on port 3000');
});

io.on("connection", function (client) {
    console.log('user connected');
});