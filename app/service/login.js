const Service = require('egg').Service;
class LoginService extends Service {

  async login(name, password) {
    const ctx = this.ctx;
    const user = await ctx.model.User.findOne({'username':name,'password':password},{'password':0,'username':0});

    return user;
  }

  async getPicture(uid) {
  }
}
module.exports = LoginService;