const http = require('http')

const server = http.createServer((req, res) => {
  const userurl = req.url
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

  if (userurl.substr(0, 9) === '/student/') {
    const studentId = userurl.substr(9)
    if (/^\d{10}$/.test(studentId)) {
      res.end(`学生的Id为${studentId}`)
    } else {
      res.end(`学生Id的位数不对`)
    }
  } else if (userurl.substr(0, 9) === '/teacher/') {
    const teacherId = userurl.substr(9)
    if (/^\d{6}$/.test(teacherId)) {
      res.end(`老师的Id为${teacherId}`)
    } else {
      res.end(`老师Id的位数不对`)
    }
  } else {
    res.end('url请输入 /student/10位数 或者 /teacher/6位数')
  }
}).listen(3000, 'localhost')
