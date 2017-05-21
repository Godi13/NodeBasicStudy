const http = require('http')
const formidable = require('formidable')

const server = http.createServer((req, res) => {
  if (req.url === "/postdata" && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm()
    form.uploadDir = "./"
    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('success')
    })
  }
}).listen(8888)
