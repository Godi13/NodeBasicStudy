const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  if (req.url === '/postdata' && req.method.toLowerCase() === "post") {
    let alldata = ''
    req.addListener('data', (chunk) => {
      alldata += chunk
    })

    req.addListener('end', () => {
      var datastring = alldata.toString()
      res.end("success")

      var dataObj = querystring.parse(datastring)
      console.log(dataObj)
    })
  }
}).listen(3000, '127.0.0.1')
