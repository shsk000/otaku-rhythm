import createSocket from './lib/createSocket';
import PlayerController from './Controller/PlayerController';
// import Player from './Player/Player';

// const socketio = createSocket();

// playerController test code
const c = new PlayerController();
console.log(c);

// player test code
// const p = new Player();
// p.load('M7lc1UVf-VE');

$(function() {
  $('#message_form').submit(function() {
    const value = $(this)
      .find('#input_msg')
      .val();

    c.emitPlayVideo(value);
    return false;
  });
});
