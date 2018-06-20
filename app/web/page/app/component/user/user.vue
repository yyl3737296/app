<template>
  <div class="card">
    <Modal id="myModal" ref="modal" :options="modal">
      <form role="form" style="padding: 2px 15px;">
        <div class="form-group">
          <label>基本信息</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input class="form-control" id="exampleInputEmail1" type="text" placeholder="企业登录名">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-building"></i></span>
            </div>
            <input class="form-control" id="exampleInputEmail" type="email" placeholder="企业名称">
          </div> 
        </div>
        <div class="form-group">
          <label>密码</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-lock"></i></span>
            </div>
            <input class="form-control" id="exampleInputPassword1" type="password" placeholder="密码">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-lock"></i></span>
            </div>
            <input class="form-control" id="exampleInputPassword" type="password" placeholder="重新輸入密码">
          </div>
        </div>
        <div class="form-group">
          <label>电话</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-phone"></i></span>
            </div>
            <input class="form-control" type="text" data-mask="" data-inputmask='"mask": "(999) 999-9999"'>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">所在区域</label>
            <div class="row">
              <div class="col-3">
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
              <div class="col-4">
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
              <div class="col-5">
                <select class="form-control">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                  <option>option 5</option>
                </select>
              </div>
            </div>
          </div>
      </form>
    </Modal>
    <div class="card-header">
      <h3 class="card-title">企业管理</h3>
    </div>
    <div class="card-body">
      <button @click="add()" type="button" class="btn btn-info float-left"><i class="fa fa-plus"></i> 新增</button>
    </div>
    <div class="card-body">
      <DataTable ref="DataTable" id="user_table" :options="tabledata">
      </DataTable>
    </div>
  </div>
</template>
<style>

</style>
<script type="text/babel">
export default {
  data(){
    return {
      modal: {
        title: '新增'
      },
      tabledata: {
        url:'/getCompany',
        head:[
          '企业名称',
          '联系电话',
          '所在区域'
        ],
        columns: [
            {"data" : "name"},
            {"data" : "tel"},
            {"data" : "username"}
        ]
      }
    }
  },
  computed: {
    
  },
  methods: {
    add() {
      this.$refs.modal.show();
    }
  },
  mounted() {
  }
};
</script>
