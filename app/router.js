
module.exports = app => {
  app.post('/login', app.controller.login.login.index);
  app.get('/', app.controller.home.home.index);

  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);
};
