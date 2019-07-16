var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

const {
    constants,
    performance,
    performanceObserver
  } = require('perf_hooks');

  function format() {
    d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();
    dd = d.getMilliseconds();
    console.log( hh + ":" + ss + ":" + mm + ":" + dd);
  }

app.use(express.static('./static'))

app.get('/' , function(req, res){
    res.sendFile(__dirname + '/static/index.html');
});

io.on('connection',function(socket){
    socket.on('message',function(msg){
        console.log('message: ' + msg);
        format(new Date(performance.timeOrigin));
        io.emit('message', msg);
    });
});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});