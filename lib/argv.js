var argv = require('yargs')
  .usage('Usage: echo "ciao" | seashells')
  .help('help')
  .alias('help', 'h')
  .option('host', {
    alias: 'h',
    demand: false,
    describe: 'custom host (default seashells.io)',
    type: 'string'
  })
  .option('port', {
    alias: 'p',
    demand: false,
    describe: 'custom port (default 1337)',
    type: 'number'
  })
  .option('delay', {
    alias: 'd',
    demand: false,
    describe: 'seconds of delay before having the stdout shown',
    type: 'number'
  })

  .example('echo "hello" | seashells')
  .example('echo "ciao" | seashells --host myHost.io --port 1337')
  .example('htop | seashells --delay 5')
  .epilogue('@Author: Rocco Musolino - github.com/roccomuso/seashells - @Copyright 2017')
  .argv

module.exports = argv
