var Chat = function(socket) {
  this.socket = socket
}

Chat.prototype.sendMessage = function(room, text) {
  var message = {
    room,
    text
  }
  this.socket.emit('message', message)
}

Chat.prototype.changeRoom = function(room) {
  this.socket.emit('join', {
    newRoom: room
  })
}

Chat.prototype.processCommand = function(command) {
  var words = command.split(' ')
  var command = word[0].substring(1, word[0].length).toLowerCase()
  var message = false
  switch(command) {
    case 'join':
      words.shift()
      var room = words.join(' ')
      this.changeRoom(roon)
      break
    case 'nick':
      words.shift()
      var name = words.join(' ')
      this.socket.emit('nameAttempt', name)
      break
    default:
      message = 'Unrecognized command.'
      break
  }
  return message
}
