const net = require('net')

var server = net.createServer(function(socket) {
  socket.once('data', function(data) {
    socket.write(data)
  })
})

server.listen(8888)

//telnet 127.0.0.1 8888
