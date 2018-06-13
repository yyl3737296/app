
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
  const { router, controller } = app;
  router.post('/login', controller.login.login.login);
  router.post('/logout', controller.login.login.logout);
  router.get('/', controller.login.login.index);

  router.get('/app/api/article/list', controller.app.app.list);
  router.get('/app/api/article/:id', controller.app.app.detail);
  router.get('/app(/.+)?', controller.app.app.index);
  router.get('/getCompany', controller.company.company.getAll);
};
