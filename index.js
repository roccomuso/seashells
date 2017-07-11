#!/usr/bin/env node
'use strict'
var argv = require('./lib/argv')
var Netcat = require('netcat').client
var nc = new Netcat()

var opts = {
  host: argv.host || 'seashells.io',
  port: argv.port || 1337,
  delay: argv.delay || null
}

nc.addr(opts.host).port(opts.port).connect().pipe(process.stdout)

if (opts.delay) {
  setTimeout(function () {
    process.stdin.pipe(process.stdout)
    process.stdin.pipe(nc.stream())
  }, opts.delay * 1000)
} else {
  process.stdin.pipe(process.stdout)
  process.stdin.pipe(nc.stream())
}
