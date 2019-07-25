const io = require('socket.io');
let singleton = null;

module.exports = http => {
  if (singleton) return singleton;
  if (!http) throw new Error('createIo: invalid params');

  singleton = io(http);

  return singleton;
};
