const express = require('express')
const mongodb = require('mongodb')
const app = new express()
const MongoClient = require('mongodb').MongoClient

app.get('/', (req, res) => {
  const url = 'mongodb://localhost:27017/test'
  MongoClient.connect(url, (err, db) => {
    if (err) {
      res.send('数据库链接失败')
      return
    }
    db.collection('test').insertOne({
      "name": "Tom",
      "age": parseInt(Math.random() * 100 + 10)
    }, (err, result) => {
      if (err) {
        res.send("插入失败")
        return
      }
      res.send(result)
      db.close()
    })
  })
})

app.listen(3000)
