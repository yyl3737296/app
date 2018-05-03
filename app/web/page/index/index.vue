<template>
  <div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">

      <form action="/app" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email">
          <span class="fa fa-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
          <span class="fa fa-lock form-control-feedback"></span>
        </div>
        <div class="row">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          <!-- /.col -->
        </div>
      </form>

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
      }
    },
    computed: {
      lists(){
        return this.list;
      }
    },
    methods: {
      fetch(){
      },
      loadPage(){
      }
    },
    mounted() {
    }
  }
</script>

