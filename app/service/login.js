const Service = require('egg').Service;
class LoginService extends Service {

  async find(uid) {
    const ctx = this.ctx;
    const user = await ctx.model.User.find();

    return user;
  }

  async getPicture(uid) {
    const result = await this.ctx.curl(`http://photoserver/uid=${uid}`, { dataType: 'json' });
    return result.data;
  }
}
module.exports = LoginService;