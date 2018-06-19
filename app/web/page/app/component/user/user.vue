<template>
  <div class="card">
    <Modal id="myModal" ref="modal" :options="modal"></Modal>
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
