const Service = require('egg').Service;
class LoginService extends Service {

  async getData(search, start, limit) {
    const ctx = this.ctx;
    const user = await ctx.model.User.find(
        {
            "name": new RegExp(search),
            "type": 1
        },
        {
            'password': 0
        }
    ).skip(start).limit(limit);

    return user;
  }

  async getCount(search) {
    const ctx = this.ctx;
    const count = await ctx.model.User.find({
        "name": new RegExp(search),
        "type": 1
    }).count();

    return count;
  }

}
module.exports = LoginService;