var EventEmitter = require('events').EventEmitter
var channel = new EventEmitter()
channel.on('join', function(name) {
  console.log("Welcome " + name)
})
channel.emit('join', 'Tom')
channel.emit('join', 'Lucy')
channel.emit('join', 'John')
