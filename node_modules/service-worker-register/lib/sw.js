'use strict';
class FrameServiceWorker {

  static register(name, options) {
    return new FrameServiceWorker(options).register(name);
  }

  constructor(options = {}) {
    const t = options.hash || Date.now();
    this.options = Object.assign({}, {
      scope: '/',
      manifestUrl: '/public/sw-mapping.json?t=' + t
    }, options);
  }

  fetch(url, options) {
    return fetch(url, Object.assign({
      method: 'GET',
      mode: 'no-cors',
      cache: 'default'
    }, options));
  }

  fetchServiceWorkerManifest(manifestUrl) {
    return this.fetch(manifestUrl || this.options.manifestUrl).then(res => {
      return res.json();
    }).catch(err => {
      this.report({
        msg: `fetch manifest error:${err.toString()}`
      });
      return null;
    });
  }

  getServiceWorkerUrl(name, manifest) {
    name = /\.js/.test(name) ? name : `${name}.js`;
    const prefix = manifest.config && manifest.config.prefix;
    const babel = prefix ? `${prefix}-${name}` : name;
    return manifest[babel] || babel;
  }

  registerByManifest(name, manifest) {
    if (manifest) {
      const swUrl = this.getServiceWorkerUrl(name, manifest);
      return navigator.serviceWorker.register(swUrl, this.options);
    }
  }

  isEnable() {
    return !(typeof EASY_ENV_IS_DEV === 'boolean' && EASY_ENV_IS_DEV === true) && navigator.serviceWorker;
  }

  register(name) {
    if (this.isEnable()) {
      try {
        const manifest = SERVICE_WORKER_MANIFEST;
        this.registerByManifest(name, manifest);
      } catch (e) {
        if(/is not defined/.test(e.toString())) {
          return this.fetchServiceWorkerManifest().then(manifest => {
            this.registerByManifest(name, manifest);
          });
        }
      }
    } else {
      this.report({
        msg: 'the browser is not support service worker'
      });
    }
  }

  report(info) {
    const msg = Object.assign({}, {
      url: location.href,
      useAgent: navigator.userAgent.toString()
    }, info);
    return this.options.report && this.options.report(msg);
  }
}

export default FrameServiceWorker;