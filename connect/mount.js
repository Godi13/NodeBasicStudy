const connect = require('connect')

connect()
  .use('/admin', restrict)
  .use('/admin', admin)
  .use(hello)
  .listen(3000)

function restrict(req, res, next) {
  var authorization = req.headers.authorization
  if (!authorization) return next(new Error('Unauthorized'))

  var parts = authorization.split(' ')
  var scheme = parts[0]
  var auth = new Buffer(parts[1], 'base64').toString().split(':')
  var user = auth[0]
  var pass = auth[1]

  authenticateWithDatabase(user, pass, function(err) {
    if (err) return next(err)

    next()
  })
}

function admin(req, res, next) {
  switch(req.url) {
    case '/':
      res.end('try /users')
      break
    case '/users':
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(['tobi', 'loki', 'jane']))
      break
  }
}

function hello(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello world')
}