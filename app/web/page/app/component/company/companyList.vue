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
    var _this = this;
    return {
      modal: {
        title: '新增'
      },
      tabledata: {
        url:'/company/list',
        head:[
          '企业名称',
          '联系电话',
          '登录名',
          ''
        ],
        columns: [
            {"data" : "name"},
            {"data" : "tel"},
            {"data" : "username"},
            {
              "data" : null,
              "width" : 127
            }
        ],
        columnDefs:[{
            targets: -1,
            render: function (data, type, row, meta) {

                return `<button title="详情" type="button" class="btn btn-tool">
                          <i class="fa fa-paper-plane-o" style="font-size: 22px;color:#28a745"></i>
                        </button>
                        <button title="编辑" type="button" class="btn btn-tool">
                          <i class="fa fa-pencil" style="font-size: 22px;color:#007bff"></i>
                        </button>
                        <button title="删除" type="button" class="btn btn-tool">
                          <i class="fa fa-trash-o" style="font-size: 22px;color:#bd2130"></i>
                        </button>`;
            }
        }]
      }
    }
  },
  computed: {
    
  },
  components: {
    companyAdd
  },
  methods: {
    delete() {
      alert(2);
    },
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
