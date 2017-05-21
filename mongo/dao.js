const express = require('express')
const app = express()
const db = require('./model/db')

app.get('/insert', (req, res) => {
  db.insertOne('test', {'test': 3}, (err, result) => {
    if (err) {
      res.send('插入失败')
      return
    }
    res.send('插入成功')
  })
})

app.listen(3000)
