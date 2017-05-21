const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  var filesName = []

  fs.readdir("./", (err, files) => {
    (function iterator(i) {
      if (i === files.length) {
        console.log(filesName)
        return
      }
      fs.stat("./" + files[i], (err, state) => {
        if (state.isDirectory()) {
          filesName.push(files[i])
        }
        iterator(i + 1)
      })
    })(0)
  })

  res.end()
}).listen(3000)
