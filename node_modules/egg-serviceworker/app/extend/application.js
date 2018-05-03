'use strict';
const fs = require('fs');
const path = require('path');
const SERVICE_WORKER_MAPPING = Symbol('Application#ServiceWorkerMapping');
module.exports = {
  get serviceworkermapping() {
    if (!this[SERVICE_WORKER_MAPPING]) {
      const config = this.config.serviceworker;
      if (fs.existsSync(config.mapping)) {
        const mapping = require(config.mapping);
        this[SERVICE_WORKER_MAPPING] = Object.keys(mapping).reduce((result, key) => {
          const filename = mapping[key];
          if (typeof filename === 'string') {
            const filepath = path.join(config.dir, filename);
            if (fs.existsSync(filepath)) {
              result = result || {};
              result[`/${filename}`] = fs.readFileSync(filepath);
              return result;
            }
          }
          return result;
        }, null);
      }
    }
    return this[SERVICE_WORKER_MAPPING];
  },
};
