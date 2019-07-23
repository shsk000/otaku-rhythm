import createSocket from './lib/createSocket';
import PlayerController from './Controller/PlayerController';
import Player from './Player/Player';

const socketio = createSocket();

// playerController test code
const c = new PlayerController();
console.log(c);

// player test code
const p = new Player();
p.load('test');

$(function() {
  $('#message_form').submit(function() {
    socketio.emit('message', $('#input_msg').val());
    $('#input_msg').val('');
    return false;
  });
  socketio.on('message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});
