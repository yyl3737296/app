<template>
  <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">

        <div class="form-group has-feedback">
          <input v-model="username" name="username" type="text" class="form-control" placeholder="Username">
        </div>
        <div class="form-group has-feedback">
          <input v-model="password" name="password" type="password" class="form-control" placeholder="Password">
        </div>
        <div class="row">
            <button @click="login()" type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          <!-- /.col -->
        </div>

      <!-- /.social-auth-links -->

     <!--  <p class="mb-1">
       <a href="#">I forgot my password</a>
     </p>
     <p class="mb-0">
       <a href="register.html" class="text-center">Register a new membership</a>
     </p> -->
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
  export default {
    components: {

    },
    data(){
      return {
        username:'',
        password:''
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') c = c.substring(1);
              if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
          }
          return "";
      },
      login() {
        var _cookie = this.getCookie('csrfToken');
        this.$http.create({
          headers: {'X-Custom-Header-123123123123123': 'foobar'}
        })
        let data = {
          'x-csrf-token': _cookie,
          'username': this.username,
          'password': this.password
        };
        this.$http.post('/login', data).then(res=> {
          console.log('res', res);
          
        }).then(err=> {

        });
      },
      loadPage(){
      }
    },
    mounted() {
    }
  }
</script>

