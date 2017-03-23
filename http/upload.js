const http = require('http')
const formidable = require('formidable')

const show = (res) => {
  const html = ''
             + '<form method="post" action="/" enctype="multipart/form-data">'
             + '<p><input type="text" name="name" /></p>'
             + '<p><input type="file" name="file" /></p>'
             + '<p><input type="submit" name="Upload" /></p>'
             + '</form>'
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Content-Length', Buffer.byteLength(html))
    res.end(html)
}

// const upload = (req, res) => {
//   if (!isFormData(req)) {
//     res.statusCode = 400
//     res.end('Bad Request: expecting multipart/form-data')
//     return
//   }
//   var form = new formidable.IncomingForm()
//   form.on('field', (field, value) => {
//     console.log(field)
//     console.log(value)
//   })
//   form.on('file', (name, file) => {
//     console.log(name)
//     console.log(file)
//   })
//   form.on('end', () => {
//     res.end('upload complete!')
//   })
//   form.parse(req)
// }

const upload = (req, res) => {
  if (!isFormData(req)) {
    res.statusCode = 400
    res.end('Bad Request: expecting multipart/form-data')
    return
  }
  var form = new formidable.IncomingForm()
  form.on('progress', (bytesReceived, bytesExpected) => {
    let percent = Math.floor(bytesReceived / bytesExpected * 100)
    console.log(percent)
  })
  form.parse(req, (err, fields, files) => {
    console.log(fields)
    console.log(files)
    res.end('upload complete!')
  })
}

const isFormData = (req) => {
  const type = req.headers['content-type'] || ''
  return 0 == type.indexOf('multipart/form-data')
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      show(res)
      break
    case 'POST':
      upload(req, res)
      break
  }
})

server.listen(3000)
