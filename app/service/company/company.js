const Service = require('egg').Service;
class LoginService extends Service {

  async getAll() {
    const ctx = this.ctx;
    const user = await ctx.model.User.find({},{'password':0});

    return user;
  }

}
module.exports = LoginService;