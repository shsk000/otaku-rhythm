import createSocket from './lib/createSocket';
import PlayerController from './Controller/PlayerController';

const socketio = createSocket();

const p = new PlayerController();
console.log(p);

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
