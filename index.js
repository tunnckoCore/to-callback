/*!
 * to-callback <https://github.com/tunnckoCore/to-callback>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var tryCatch = require('try-catch-callback')

/**
 * > Gets a `fn` function, that has _"result-first"_
 * callback and return same function, but with _"error-first"_
 * callback, like is the convention at node.js land.
 * Such APIs that has _"result-first"_ callbacks are for example
 * the eventemitter's (streams too) `.on` method, which should
 * have two arguments `eventName` and _"result-first"_ callback,
 * that gets as many arguments as `.emit` sends.
 *
 * **Example**
 *
 * ```js
 * var EventEmitter3 = require('eventemitter3')
 * var toCallback = require('to-callback')
 * var emitter = new EventEmitter3
 *
 * // classic "result-first" case
 * emitter.on('foo', function (a, b) {
 *   console.log(a, b) // => 1, 2
 * })
 *
 * var onWithCallback = toCallback(emitter.on.bind(emitter))
 *
 * // node.js's "error-first" style
 * onWithCallback('foo', function (err, a, b) {
 *   console.log(err, a, b) // => null, 1, 2
 * })
 *
 * emitter.emit('foo', 1, 2)
 * ```
 *
 * @name   toCallback
 * @param  {Function} `<fn>` function that has _"result-first"_ callback
 * @return {Function} function with same arguments, but instead of _"result-first"_
 *                             callback it has _"error-first"_ callback
 * @api public
 */

module.exports = function resultFirst2callback (fn) {
  return function errorFirstFn () {
    var args = [].slice.call(arguments)
    var errFirstCb = args[args.length - 1]

    if (typeof errFirstCb !== 'function') {
      throw new TypeError('to-callback: expect last argument to be function')
    }
    if (errFirstCb.length < 1) {
      throw new Error('to-callback: expect error-first callback')
    }

    function resFirstCb (res) {
      errFirstCb(null, res)
    }

    tryCatch(fn, {
      args: args.slice(0, -1).concat(resFirstCb)
    }, function (err) {
      if (err) errFirstCb(err)
    })
  }
}
