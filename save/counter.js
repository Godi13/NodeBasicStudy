const http = require('http')
let counter = 0

const server = http.createServer((req, res) => {
  counter++
  res.end('I have been accessed ' + counter + ' times.')
}).listen(3000)
