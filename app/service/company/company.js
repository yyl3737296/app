const Service = require('egg').Service;
class CompanyService extends Service {

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
    ).skip(parseInt(start)).limit(parseInt(limit));

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

  async add(obj) {
    const ctx = this.ctx;
    const {name, username, password, tel} = obj;
    const res = await ctx.model.User.create({
        "name": name,
        "username": username,
        "password": password,
        "tel": tel,
        "type": 1
    });

    return res;
  }

}
module.exports = CompanyService;