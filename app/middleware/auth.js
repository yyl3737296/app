module.exports = () => {
  const jwt = require('jsonwebtoken');

  return async function (ctx, next) {

    const getCookie = (name) => {
      let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if (ctx.request.header.cookie) {
        if(arr=ctx.request.header.cookie.match(reg)) {
          return unescape(arr[2]);
        }
        else {
          return null;
        }
      }
      else {
        return null;
      }
      
    }

    let _token = getCookie('token_client');

    if(ctx.path=='/'||ctx.path=='/login'){
      if (ctx.path =='/' && _token) {
        ctx.redirect('/app');
        return;
      }
      await next();
      return;
    }

    _token = ctx.request.header['authorization'] || _token;
    
    if (_token) {
      let decoded;
      //解码token  
      try {  
        decoded = jwt.verify(_token, 'aaronyang');
      } catch (error) {
        //console.log(error.name + '========================================');
        /*if (error.name == 'TokenExpiredError') {
          ctx.cookies.set('token', null) 
          ctx.redirect('/');
          return;
        } else {
          ctx.cookies.set('token', null) 
          ctx.redirect('/');
          return;
        }*/
        //await next();
        //return;
        ctx.cookies.set('token_client', null) 
        ctx.redirect('/');
        return;
      }

      let token = jwt.sign({
        user_id: decoded.user_id,
        user_name: decoded.user_name
      }, 'aaronyang', { expiresIn: '1200s' });

      ctx.cookies.set('token_client', token, {
        httpOnly: false,
        overwrite: false
      });
      await next();
    } else {
      ctx.redirect('/');
    }  
  }  
};