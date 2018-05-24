<template>
  <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
        <div class="form-group has-feedback">
          <input v-model="username" name="username" type="text" class="form-control" placeholder="用户名">
        </div>
        <div class="form-group has-feedback">
          <input @keyup="enterLogin($event)" v-model="password" name="password" type="password" class="form-control" placeholder="密码">
        </div>
        <h3 class="card-title" style="margin-bottom:1rem;font-size:1rem;color:red;">
          {{tip}}
        </h3>
        <div class="row">
            <button @click="login()" type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          <!-- /.col -->
        </div>
    </div>
  </div>
</div>
</template>
<style>
</style>
<script type="text/babel">
  //bootstrap
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  //AdminLTE
  import '../../asset/css/adminlte.min.css';
  import "../../asset/js/adminlte.min";
  import 'font-awesome/css/font-awesome.min.css';

  import md5 from 'js-md5';
  export default {
    components: {

    },
    data(){
      return {
        username:'',
        password:'',
        tip:''
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      enterLogin(ev) {
        ev.keyCode === 13 && this.login();
      },
      login() {
        let Base64 = require('js-base64').Base64;

        let data = {
          'username': this.trim(this.username),
          'password': this.trim(this.password)
        };

        if ( data.username == '' || data.password == '' ) {
          this.tip = '请输入用户名密码！';
          return;
        }

        data.password = md5(Base64.encode(data.password));

        this.$http.post('/login', data).then(res=> {
          if ( res.data.success == 0 ) {
            this.tip = '用户名或密码不正确！';
          }
          else {
            sessionStorage.setItem('username', res.data.name);
            this.tip = '';
            location.href = '/app';
          }
        });
      },
      loadPage(){
      }
    },
    mounted() {
    }
  }
</script>

