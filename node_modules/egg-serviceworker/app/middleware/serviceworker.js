'use strict';
const path = require('path');
const MAX_AGE = 'public, max-age=2592000'; // 30 days

module.exports = (options, app) => {
  const serviceworkermapping = app.serviceworkermapping;
  return function serviceworker(ctx, next) {
    if (!serviceworkermapping) return next();
    if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return next();
    /* istanbul ignore if */
    if (ctx.path[0] !== '/') return next();
    const content = serviceworkermapping[ctx.path];
    if (!content) return next();
    if (Buffer.isBuffer(content)) {
      ctx.set('cache-control', MAX_AGE);
      ctx.body = content;
      ctx.type = path.extname(ctx.path);
      return;
    }
    return next();
  };
};
