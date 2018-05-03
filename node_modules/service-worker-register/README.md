# service-worker-register

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/service-worker-register.svg?style=flat-square
[npm-url]: https://npmjs.org/package/service-worker-register
[travis-image]: https://img.shields.io/travis/hubcarl/service-worker-register.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/service-worker-register
[codecov-image]: https://codecov.io/gh/hubcarl/service-worker-register/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/hubcarl/service-worker-register
[david-image]: https://img.shields.io/david/hubcarl/service-worker-register.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/service-worker-register
[snyk-image]: https://snyk.io/test/npm/service-worker-register/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/service-worker-register
[download-image]: https://img.shields.io/npm/dm/service-worker-register.svg?style=flat-square
[download-url]: https://npmjs.org/package/service-worker-register

service worker register by webpack service worker manifest [service-worker-precache-webpack-plugin](https://github.com/hubcarl/service-worker-precache-webpack-plugin)


## Install

```bash
npm i service-worker-register --save
```

## Usage

```js
const serviceWorkerRegister = require('service-worker-register');
// The service-worker.js name will get really url address by sw-mapping.json file
serviceWorkerRegister.register('service-worker.js');
```

## Configuration

`serviceWorkerRegister.register(filename, options)`:

- `options.scope`: {String} default: `/` - service worker scope
- `options.manifestUrl`: {String} default: `/public/sw-mapping.json` - service worker filename mapping file
- `options.report`: {Function} optional - service worker register error report interface 

## Function

The plugin depend on [service-worker-precache-webpack-plugin](https://github.com/hubcarl/service-worker-precache-webpack-plugin)

- `webpack-manifest-resource-plugin` inject `sw-mapping.json` file content to global var `SERVICE_WORKER_MANIFEST` 


```
// sw-manifest.js
{
  "config": {
    "localPublicPath": "/public/",
    "publicPath": "/public/"
  },
  "service-worker.js": "service-worker.4434ddf3js"
}
```

- if `SERVICE_WORKER_MANIFEST` is be inject, use this configuration directly, otherwise launch the network based on `options.manifestUrl` URL 


## License

[MIT](LICENSE)
