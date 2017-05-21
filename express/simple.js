const express = require('express')

const app = express()

app.use(express.static("./"))

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/haha', (req, res) => {
  res.send('hahahaha')
})

app.get(/^\/student\/([\d]{10})$/, (req, res) => {
  res.send("学生信息，学号" + req.params[0])
})

app.get("/teacher/:gonghao", (req, res) => {
  res.send("老师信息，工号" + req.params.gonghao)
})

app.get("/person/:id", (req, res) => {
  var id = req.params["id"]
  var reg = /^[\d]{6}$/
  if (reg.test(id)) {
    res.send(id)
  } else {
    res.send("请检查格式")
  }
})

app.get("/:username/:oid", (req, res) => {
  var username = req.params["username"]
  var oid = req.params["oid"]
  res.write(username)
  res.end(oid)
})

app.listen(3000)
