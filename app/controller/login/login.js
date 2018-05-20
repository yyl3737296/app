const LocalStrategy = require('passport-local').Strategy;
module.exports = app => {
  /*app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    console.log(username+'===+========'+password);
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    ctx.body = 'adsfasdf'
    //app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    console.log('asdfasdfadsfasdfasdf');
  });
  app.passport.serializeUser(async (ctx, user) => {});
  app.passport.deserializeUser(async (ctx, user) => {});*/

  return class LoginController extends app.Controller {

    async index() {
      const ctx = this.ctx;
      const { username, password } = ctx.request.body;
      /*const user = yield ctx.service.user.find({ username, password });
      if (!user) ctx.throw(403);
      ctx.session = { user };*/
      //刷新cookie里的值防止同浏览器切换用户使用的cookie一样
      ctx.rotateCsrfSecret();
      let jwt = require('jsonwebtoken');  
        let token = jwt.sign({  
            user_id:1,  
            user_name: '张三'  
          }, 'asdfasdf', {  
            expiresIn: '60s' //时间根据自己定，具体可参考jsonwebtoken插件官方说明  
          });  
        ctx.session = {
          key: 'User_SESS',
          maxAge: 24 * 3600 * 1000, // 1 天
          httpOnly: true,
          encrypt: true,
        }
this.ctx.cookies.set('token', token, {maxAge:60*1000,httpOnly:false,overwrite:true,signed:false}) 
      ctx.body = await ctx.service.login.find();//await ctx.model.User.find();
      /*if ( username == 'admin' && password == 'admin' ) {
        ctx.body = {success: 1,session:'10'};
      }
      else {
        ctx.body = {success: 0};
      }*/
    }
    async logout() {
      const ctx = this.ctx;
      ctx.session = null;
      ctx.body = {success: 1};
    }

  };
};