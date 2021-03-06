//使用方法
// node list.js add xxxxx
// node list.js list

const fs = require('fs')
const path = require('path')
const args = process.argv.splice(2)
const command = args.shift()
const taskDescription = args.join(' ')
const file = path.join(process.cwd(), '/tasks.json')

const loadOrInitializeTaskArray = (file, cb) => {
  fs.exists(file, (exists) => {
    let tasks = []
    if (exists) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err
        var data = data.toString()
        var tasks = JSON.parse(data || '[]')
        cb(tasks)
      })
    } else {
      cb([])
    }
  })
}

const listTasks = (file) => {
  loadOrInitializeTaskArray(file, (tasks) => {
    for (var i in tasks) {
      console.log(tasks[i])
    }
  })
}

const storeTasks = (file, tasks) => {
  fs.writeFile(file, JSON.stringify(tasks), 'utf8', (err) => {
    if (err) throw err
    console.log('Saved.')
  })
}

const addTask = (file, taskDescription) => {
  loadOrInitializeTaskArray(file, (tasks) => {
    tasks.push(taskDescription)
    storeTasks(file, tasks)
  })
}

switch (command) {
  case 'list':
    listTasks(file)
    break
  case 'add':
    addTask(file, taskDescription)
    break
  default:
    console.log('Usage: ' + process.argv[0] + ' list|add [taskDescription]')
}
