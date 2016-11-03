# [to-callback][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by [rfpify][] and probably used in it.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i to-callback --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const toCallback = require('to-callback')
```

## API

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [pify](https://www.npmjs.com/package/pify): Promisify a callback-style function | [homepage](https://github.com/sindresorhus/pify "Promisify a callback-style function")
- [rfpify](https://www.npmjs.com/package/rfpify): Promisify a result-first callback-style function. | [homepage](https://github.com/samverschueren/rfpify#readme "Promisify a result-first callback-style function.")
- [to-promise](https://www.npmjs.com/package/to-promise): Convert to promise. | [homepage](https://github.com/joshrtay/to-promise#readme "Convert to promise.")
- [try-catch-callback](https://www.npmjs.com/package/try-catch-callback): try/catch block with a callback, used in [try-catch-core][]. Use it when you… [more](https://github.com/hybridables/try-catch-callback#readme) | [homepage](https://github.com/hybridables/try-catch-callback#readme "try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees. If you care use [try-catch-core][].")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/to-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

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

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[rfpify]: https://github.com/samverschueren/rfpify
[try-catch-core]: https://github.com/hybridables/try-catch-core