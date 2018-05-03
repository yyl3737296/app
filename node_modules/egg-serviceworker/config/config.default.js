'use strict';
const path = require('path');

module.exports = app => {
  const config = {};
  /**
   * egg-serviceworker default config
   * @member Config#serviceworker
   * @property {String} dir - service worker file directory
   * @property {JSON} mapping - service worker file url mapping https://github.com/hubcarl/service-worker-precache-webpack-plugin
   */
  config.serviceworker = {
    dir: path.join(app.baseDir, 'public'),
    mapping: path.join(app.baseDir, 'public/sw-mapping.json'),
  };

  return config;
};
