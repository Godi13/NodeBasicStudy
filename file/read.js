const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
  fs.readFile('./test.txt', (err, data) => {
    if (err) {
      throw err
    }
    res.end(data)
  })
}).listen(3000)
