const express = require('express');
// const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 8080;

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config');

const Room = require('./Room');
const singleRoom = new Room('default');

// express setting
app.use(express.static('../../build'));

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/../client/index.html'));
// });

// env:development hot-reload setting
if (process.env.NODE_ENV) {
  config.entry.app.unshift(
    'webpack-hot-middleware/client?reload=true&timeout=1000'
  );
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

io.on('connection', socket => {
  console.log(`connection : ${socket.id}`);

  singleRoom.joinUser(socket.id);

  // === test code =======
  setTimeout(() => {
    socket.emit('ServerLoad', 'M7lc1UVf-VE');
  }, 3000);
  socket.on('ClientPlayableVideoStatus', () => {
    socket.emit('ServerPlay');
  });
  // ====================

  socket.on('message', function(msg) {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`disconnect : ${socket.id}`);
    singleRoom.withdrawalUser(socket.id);
  });
});

http.listen(PORT, function() {
  console.log('server listening. Port:' + PORT);
});
