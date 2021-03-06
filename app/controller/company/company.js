
module.exports = app => {

  return class CompanyController extends app.Controller {

    async getAll() {
      const ctx = this.ctx;
      let search = ctx.query['search[value]'];
      let user = await ctx.service.company.company.getData(search, ctx.query.start, ctx.query.length);
      let count = await ctx.service.company.company.getCount(search);

      ctx.body = {success: 1, "recordsFiltered": count, "recordsTotal": count, data: user};

    }

    async add() {
      const ctx = this.ctx;
      let result = await ctx.service.company.company.add(ctx.request.body);
      if (result) {
        ctx.body = {success: 1}; 
      }
      else {
        ctx.body = {success: 0};
      }
    }

  };
};