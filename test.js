/*!
 * to-callback <https://github.com/tunnckoCore/to-callback>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var toCallback = require('./index')
var EventEmitter3 = require('eventemitter3')
var emitter = new EventEmitter3()

test('should throw TypeError if last argument not a function', function (done) {
  function fixture () {
    toCallback(emitter.on)(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect last argument to be function/)
  done()
})

test('should throw if last argument not a function', function (done) {
  function fixture () {
    toCallback(emitter.on)(123, function () {})
  }
  test.throws(fixture, Error)
  test.throws(fixture, /expect error-first callback/)
  done()
})

test('should convert result-first to error-first callback', function (done) {
  var onCallback = toCallback(emitter.on.bind(emitter))
  onCallback('foo', function errFirstCb (err, aa, bb) {
    test.strictEqual(err, null)
    test.strictEqual(aa, 123)
    test.strictEqual(bb, 444)
    done()
  })
  emitter.emit('foo', 123, 444)
})

test('should get err if result-first API throws', function (done) {
  function resfirst (val, resultFirstCb) {
    if (val !== 22) throw new Error('some err')
    resultFirstCb(val)
  }
  var errfirst = toCallback(resfirst)
  errfirst(11, function (err) {
    test.strictEqual(err && err.message, 'some err')
    errfirst(22, function (err, res) {
      test.strictEqual(err, null)
      test.strictEqual(res, 22)
      done()
    })
  })
})
