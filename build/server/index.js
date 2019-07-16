"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;
app.get('/', function (req, res) {
    console.log(req);
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});
http.listen(PORT, function () {
    console.log('server listening. Port:' + PORT);
});
//# sourceMappingURL=index.js.map