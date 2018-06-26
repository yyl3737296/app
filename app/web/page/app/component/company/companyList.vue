<template>
  <div class="card">
    <companyAdd ref="modal"></companyAdd>
    <div class="card-header">
      <h3 class="card-title">企业管理</h3>
    </div>
    <div class="card-body">
      <button @click="add()" type="button" class="btn btn-info float-left"><i class="fa fa-plus"></i> 新增</button>
    </div>
    <div class="card-body">
      <DataTable ref="DataTable" :options="tabledata">
      </DataTable>
    </div>
  </div>
</template>
<style>

</style>
<script type="text/babel">
import companyAdd from './companyAdd';
export default {
  data(){
    return {
      modal: {
        title: '新增'
      },
      tabledata: {
        url:'/company/list',
        head:[
          '企业名称',
          '联系电话',
          '登录名'
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
  components: {
    companyAdd
  },
  methods: {
    reload() {
      this.$refs.DataTable.reload();
    },
    add() {
      this.$refs.modal.init();
      this.$refs.modal.show();
    }
  },
  mounted() {
  }
};
</script>
