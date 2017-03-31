const connect = require('connect')
const bodyParser = require('body-parser')

var app = connect()
  .use(bodyParser())
  .use(function(req, res) {
    console.log(req.body)
    console.log(req.files)
    res.end(req.body.username)
  }).listen(3000)

// curl -d '{"username":"Godi13"}' -H "Content-Type: application/json" http://localhost:3000

// curl -d username=Godi13 http://localhost:3000

// curl -F image=@SON.jpeg -F name=Godi13 http://localhost:3000
