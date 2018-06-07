const LocalStrategy = require('passport-local').Strategy;
module.exports = app => {

  return class LoginController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.renderClient('index/index.js');
    }
    async login() {
      const ctx = this.ctx;
      const { username, password } = JSON.parse(ctx.helper.sjson(ctx.request.body));

      let user = await ctx.service.login.login(username, password);

      if (!user) {
        ctx.body = {success: 0};
        return;
      }
      
      ctx.rotateCsrfSecret();

      let jwt = require('jsonwebtoken');  
      let token = jwt.sign({
        user_id: user._id,
        user_name: user.name
      }, 'aaronyang', { expiresIn: '1200s' });

      ctx.cookies.set('token_client', token, {
        httpOnly: false,
        overwrite: false
      });

      ctx.body = {success: 1, name: user.name};

    }
    async logout() {
      const ctx = this.ctx;
      ctx.cookies.set('token_client', null) 
      ctx.body = {success: 1};
    }

  };
};