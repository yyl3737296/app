module.exports = app => {

  return class LoginController extends app.Controller {

    async index() {
      const ctx = this.ctx;
      const { username, password } = ctx.request.body;
      /*const user = yield ctx.service.user.find({ username, password });
      if (!user) ctx.throw(403);
      ctx.session = { user };*/
      //刷新cookie里的值防止同浏览器切换用户使用的cookie一样
      ctx.rotateCsrfSecret();
      ctx.body = await ctx.service.login.find();//await ctx.model.User.find();
      /*if ( username == 'admin' && password == 'admin' ) {
        ctx.body = {success: 1,session:'10'};
      }
      else {
        ctx.body = {success: 0};
      }*/
    }

  };
};