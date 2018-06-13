
module.exports = app => {

  return class companyController extends app.Controller {

    async getAll() {
      const ctx = this.ctx;

      let user = await ctx.service.company.company.getAll();

      ctx.body = {success: 1, data: user};

    }

  };
};