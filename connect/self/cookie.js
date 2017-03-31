const connect = require('connect')
const cookieParser = require('cookie-parser')

var app = connect()
  .use(cookieParser())
  .use(function(req, res) {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.setHeader('Set-Cookie', 'foo=bar')
    res.setHeader('Set-Cookie', 'tobi=ferret; Expires=Tue, 08 Jun 2021 10:18:14 GMT')
    // curl http://localhost:3000 --head
    res.end('hello\n')
  }).listen(3000)

// curl http://localhost:3000 -H "Cookie: foo=bar, bar=baz"
