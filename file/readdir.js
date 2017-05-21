const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return
  }
  fs.readdir("./", (err, files) => {
    console.log(files)
    res.end()
  })
}).listen(3000)
