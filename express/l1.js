const express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => console.log('app is listening at port 3000'))
