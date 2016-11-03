/*!
 * to-callback <https://github.com/tunnckoCore/to-callback>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var tryCatch = require('try-catch-callback')

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
