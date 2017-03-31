const net = require('net')

net.createServer(socket => {
  socket.write('Hello World!\r\n')
  socket.end()
}).listen(1337)

console.log('listening on port 1337')

// netcat localhost 1337
// telnet localhost 1337
