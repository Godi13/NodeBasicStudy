const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  var queryObj = url.parse(req.url, true).query
  var name = queryObj.name
  var age = queryObj.age
  var sex = queryObj.sex
  console.log(name);
  console.log(age);
  console.log(sex);
  res.end(`${name} ${age} ${sex}`)
}).listen(8888)
