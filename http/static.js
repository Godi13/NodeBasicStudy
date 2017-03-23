const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const root = __dirname

const server = http.createServer((req, res) => {
  const url = parse(req.url)
  const path = join(root, url.pathname)
  fs.stat(path, (err, stat) => {  //检查文件是否存在
    if (err) {
      if ('ENOENT' == err.code) {
        res.statusCode == 404
        res.end('Not Found')
      } else {
        res.statusCode = 500
        res.end('internal Server Error')
      }
    } else {
      res.setHeader('Content-Length', stat.size)
      const stream = fs.createReadStream(path)
      stream.pipe(res)    //res.end()会在stream.pipe()内部调用
      stream.on('error', (err) => {
        res.statusCode = 500
        res.end('internal Server Error')
      })
    }
  })
})

server.listen(3000)
//curl http://localhost:3000/static.js -i
