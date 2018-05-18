
/*module.exports = app => {
  const { router, controller } = app;
  const ctx = this.ctx;
  //app.post('/login', app.controller.login.login.index);
  app.post('/login', app.passport.authenticate('local', { successRedirect: '/app' }));
  
  app.get('/', app.controller.home.home.index);
  app.get('/login', app.controller.home.home.index);

  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  var isAuthenticated = (req,res,next) => { 
    if (req.isAuthenticated()) return next();
    router.redirect('/', '/app');
    //ctx.redirect('/');
  }

  app.get('/app(/.+)?', isAuthenticated, app.controller.app.app.index);
};
*/

module.exports = app => {
  app.post('/login', app.controller.login.login.index);
  app.get('/', app.controller.home.home.index);

  app.get('/app/api/article/list', app.controller.app.app.list);
  app.get('/app/api/article/:id', app.controller.app.app.detail);
  app.get('/app(/.+)?', app.controller.app.app.index);
};
