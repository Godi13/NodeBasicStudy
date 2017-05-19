const express = require('express')
const utility = require('utility')

var app = express()

app.get('/', (req, res) => {
  var q = req.query.q
  var md5Value = utility.md5(q)
  res.send(md5Value)
})

app.listen(3000, () => console.log('app is listening at port 3000'))
