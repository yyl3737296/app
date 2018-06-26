<template>
  <Modal ref="modal" :options="modal">
    <form role="form" style="padding: 2px 15px;">
      <div class="form-group">
        <label>基本信息</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-user"></i></span>
          </div>
          <input v-model="company.username" class="form-control" type="text" placeholder="企业登录名">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-building"></i></span>
          </div>
          <input v-model="company.name" class="form-control" type="text" placeholder="企业名称">
        </div> 
      </div>
      <div class="form-group">
        <label>密码</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-lock"></i></span>
          </div>
          <input v-model="company.password" class="form-control" type="password" placeholder="密码">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-lock"></i></span>
          </div>
          <input v-model="company.password1" class="form-control" type="password" placeholder="重新輸入密码">
        </div>
      </div>
      <div class="form-group">
        <label>电话</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-phone"></i></span>
          </div>
          <input v-model="company.tel" class="form-control" type="text">
        </div>
      </div>
      <!-- <div class="form-group">
        <label for="exampleInputPassword1">所在区域</label>
        <div class="row">
          <div class="col-3">
            <select class="form-control">
              <option>北京</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
          <div class="col-4">
            <select class="form-control">
              <option>北京</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
          <div class="col-5">
            <select class="form-control">
              <option>北京</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
      </div> -->
    </form>
  </Modal>
</template>
<style>

</style>
<script type="text/babel">
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
export default {
  data(){
    return {
      modal: {
        title: '新增',
        $ok: this.submit
      },
      company: {
        name: '',
        username: '',
        password: '',
        tel:''
      }
    }
  },
  methods: {
    init() {
      this.company = {
        name: 'a',
        username: 'a',
        password: 'a',
        tel:'15991766597'
      }
    },
    submit() {
      this.company.password = md5(Base64.encode(this.company.password));
      this.$http.post('/company/add', this.company).then(res=> {
        if ( res.data.success == 1 ) {
          this.$parent.reload();
        }
      });
    },
    show() {
      this.$refs.modal.show();
    }
  }
};

</script>
