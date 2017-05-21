const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("form")
})

app.post("/", (req, res) => {
  res.send("success")
})

app.get("/news", (req, res) => {
  res.render("news", {
    "news": ["aaaaa", "bbbbb", "ccccc"]
  })
})

app.listen(3000)
