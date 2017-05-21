const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return
  }
  //stat检测状态
  fs.stat('./testDirectory', (err, data) => {
    if (err) {
      throw err
    }
    //检测路径是不是一个文件夹
    console.log(data.isDirectory())
    res.end()
  })
}).listen(3000)
