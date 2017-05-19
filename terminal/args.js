var args = process.argv.slice(2)
console.log(args)

// node args.js hello world
// node args.js "tobi is a ferret"

args.forEach(arg => {
  switch (arg) {
    case '-h':
    case '--help':
      printHelp()
      break
  }
})

function printHelp() {
  console.log(' usage:')
  console.log(' $ AwesomeProgram <options> <file-to-awesomeify>')
  console.log(' example:')
  console.log(' $ AwesomeProgram --make-awesome not-yet.awesome')
}
