<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">企业管理</h3>
    </div>
    <div class="card-body">
      <DataTable ref="DataTable" id="user_table" :data="tabledata">
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
      tabledata: {
        head:[
          '企业名称',
          '联系电话',
          '所在区域'
        ],
        clo: [
          'name',
          'username'
        ]
      }
    }
  },
  computed: {
    
  },
  methods: {
    logOut() {
    }
  },
  mounted() {
    this.$http.get('/getCompany').then(res=> {
      if ( res.data.success == 1 ) {
        this.tabledata.body = res.data.data;
        this.$refs.DataTable.init();
      }
      
    });
  }
};
</script>
