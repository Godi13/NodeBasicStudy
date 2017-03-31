var debug
if (process.env.DEBUG) {
  debug = data => console.error(data)
} else {
  debug = () => {}
}

debug('this is a debug call')
console.log('Hello World!')
debug('this another debug call')

// node debug-mode.js
// DEBUG=1 node debug-mode.js
