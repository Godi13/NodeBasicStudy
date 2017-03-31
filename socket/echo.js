const net = require('net')

net.createServer(socket => {
  console.log('socket connected!')
  socket.on('data', data => console.log('"data" event', data))
  socket.on('end', () => console.log('"end" event'))
  socket.on('close', () => console.log('"close" event'))
  // 关于TCP服务器，应该能预期到客户端断开连接却没有干净地关闭socket的情况
  //当按下Ctrl-C杀掉进程，而不是Ctrl-D干净地关闭连接时就会出现这种情况
  // 如果要在socket断开后打扫战场，应该在close时间中完成，而不是在end事件中，因为如果不是干净的关闭连接，不会激发end事件
  socket.on('error', e => console.log('"error" event', e))
  socket.pipe(socket)
}).listen(1337)

// netcat localhost 1337
