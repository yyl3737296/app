module.exports = app => {

  return class LoginController extends app.Controller {

    * index() {
      const { ctx } = this;
      console.log('asdfasdfasdfasdfasdf');
      //await ctx.renderClient('index/index.js', Model.getPage(1, 10));
    }

  };
};