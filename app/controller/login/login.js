module.exports = app => {

  return class LoginController extends app.Controller {

    async index() {
      const ctx = this.ctx;
      const { username, password } = ctx.request.body;
      if ( username == 'admin' && password == 'admin' ) {
        ctx.body = {success: 1,session:'10'};
      }
      else {
        ctx.body = {success: 0};
      }
    }

  };
};