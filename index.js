console.log('Starting. . .')
const cluster = require('cluster'), path = require('path'), fs = require('fs'), package = require('./package.json'), CFonts = require('cfonts'), Readline = require('readline'), yargs = require('yargs/yargs'), rl = Readline.createInterface(process.stdin, process.stdout)

CFonts.say('KENSHIRO', {
  font: 'simple',
  align: 'center',
  colors: ['yellow']
})
CFonts.say(`Github : https://github.com/KensBot/kenshiro-bot`, {
  font: 'console',
  align: 'center',
  colors: ['blue']
})

var isRunning = false
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  cluster.setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
     })
  })
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
}

start('kens.js')