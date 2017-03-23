const http = require('http')
const parse = require('url').parse
const join = require('path').join
const fs = require('fs')

const root = __dirname

// const server = http.createServer((req, res) => {
//   const url = parse(req.url)
//   const path = join(root, url.pathname)
//   const stream = fs.createReadStream(path)
//   stream.on('data', (chunk) => res.write(chunk))
//   stream.on('end', () => res.end())
// })

const server = http.createServer((req, res) => {
  const url = parse(req.url)
  const path = join(root, url.pathname)
  const stream = fs.createReadStream(path)
  stream.pipe(res)    //res.end()会在stream.pipe()内部调用
  stream.on('error', (err) => {
    res.statusCode = 500
    res.end('internal Server Error')
  })
})

server.listen(3000)
//curl http://localhost:3000/stream.js -i
