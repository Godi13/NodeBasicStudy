var fs = require('fs')
var stream = fs.createReadStream('./resource.json')

fs.readFile('./resource.json', function(err, data) {
  console.log(1, data);
})

stream.on('data', function(chunk) {
  console.log(chunk);
})

stream.on('end', function() {
  console.log('finished');
})
