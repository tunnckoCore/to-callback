# [to-callback][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by [rfpify][] and probably used in it.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Table of Contents
- [Install](#install)
- [What is this for?](#what-is-this-for)
- [Why it exists?](#why-it-exists)
- [How to promisify "result-first" functions](#how-to-promisify-result-first-functions)
- [Usage](#usage)
- [API](#api)
  * [toCallback](#tocallback)
- [Related](#related)
- [Contributing](#contributing)

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i to-callback --save
```

## What is this for?
Some APIs do not use an error-first callback approach, which is convention in NodeJS land. This library converts those APIs with _"result-first"_ callback to have _"error-first"_ callback.

**[back to top](#readme)**

## Why it exists?
Inspiration for this was [rfpify][] and especially the wanted _feature [issue#3](https://github.com/sindresorhus/pify/issues/31)_ at [pify][] library. The [@SamVerschueren](https://github.com/SamVerschueren) take on that forks the original [pify][] code base and andjust the needed changes. But I'm curious why? Isn't it easier to convert simply _"result-first"_ to _"error-first"_ and than just pass to original pify.

So that's what this package does. :)

I hope to merge it into [rfpify][] or directly to [pify][] so we can [resolve the issue#3](https://github.com/sindresorhus/pify/issues/31).

**[back to top](#readme)**

## How to promisify "result-first" functions
This is **example** how [rfpify][] can look like in future

```js
var pify = require('pify')
module.exports = (fn, opts) => pify(toCallback(fn), opts)
```

then we can **promisify _"result-first"_** functions:

```js
const rfpify = require('rfpify')
const EventEmitter3 = require('eventemitter3')
const emitter = new EventEmitter3()

// classic "result-first" case
emitter.on('foo', (a, b) => {
  console.log(a, b) // => 33, 55
})

// good idea is to `bind` the given function
const onPromisified = rfpify(emitter.on.bind(emitter))

onPromisified('foo')
  .then((res) => {
    console.log(res[0], res[1])
    // twice
    // => 33, 55
  })
  .catch(console.error) // => Error if something fails

emitter.emit('foo', 33, 55)
emitter.emit('foo', 33, 55)
```

**[back to top](#readme)**

## Usage
> For more use-cases see the [tests](./test.js)

```js
const toCallback = require('to-callback')
```

## API

### [toCallback](index.js#L50)
> Gets a `fn` function, that has _"result-first"_ callback and return same function, but with _"error-first"_ callback, like is the convention at node.js land. Such APIs that has _"result-first"_ callbacks are for example the eventemitter's (streams too) `.on` method, which should have two arguments `eventName` and _"result-first"_ callback, that gets as many arguments as `.emit` sends.

**Params**

* `<fn>` **{Function}**: function that has _"result-first"_ callback    
* `returns` **{Function}**: function with same arguments, but instead of _"result-first"_ callback it has _"error-first"_ callback  

**Example**

```js
var EventEmitter3 = require('eventemitter3')
var toCallback = require('to-callback')
var emitter = new EventEmitter3()

// classic "result-first" case
emitter.on('foo', function (a, b) {
  console.log(a, b) // => 1, 2
})

var onWithCallback = toCallback(emitter.on.bind(emitter))

// node.js's "error-first" style
onWithCallback('foo', function (err, a, b) {
  console.log(err, a, b) // => null, 1, 2
})

emitter.emit('foo', 1, 2)
```

**[back to top](#readme)**

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [pify](https://www.npmjs.com/package/pify): Promisify a callback-style function | [homepage](https://github.com/sindresorhus/pify "Promisify a callback-style function")
- [rfpify](https://www.npmjs.com/package/rfpify): Promisify a result-first callback-style function. | [homepage](https://github.com/samverschueren/rfpify#readme "Promisify a result-first callback-style function.")
- [to-promise](https://www.npmjs.com/package/to-promise): Convert to promise. | [homepage](https://github.com/joshrtay/to-promise#readme "Convert to promise.")
- [try-catch-callback](https://www.npmjs.com/package/try-catch-callback): try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't… [more](https://github.com/hybridables/try-catch-callback#readme) | [homepage](https://github.com/hybridables/try-catch-callback#readme "try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees. If you care use [try-catch-core][].")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/to-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[rfpify]: https://github.com/samverschueren/rfpify
[try-catch-core]: https://github.com/hybridables/try-catch-core

[npmjs-url]: https://www.npmjs.com/package/to-callback
[npmjs-img]: https://img.shields.io/npm/v/to-callback.svg?label=to-callback

[license-url]: https://github.com/tunnckoCore/to-callback/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/to-callback.svg

[downloads-url]: https://www.npmjs.com/package/to-callback
[downloads-img]: https://img.shields.io/npm/dm/to-callback.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/to-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/to-callback.svg

[travis-url]: https://travis-ci.org/tunnckoCore/to-callback
[travis-img]: https://img.shields.io/travis/tunnckoCore/to-callback/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/to-callback
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/to-callback.svg

[david-url]: https://david-dm.org/tunnckoCore/to-callback
[david-img]: https://img.shields.io/david/tunnckoCore/to-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[pify]: https://github.com/sindresorhus/pify