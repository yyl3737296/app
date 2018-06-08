<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">用户管理</h3>
    </div>
    <div class="card-body">
      <Datatable id="user_table" :data="tabledata">
      </Datatable>
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
          'a',
          'b',
          'c',
          'd',
          'e'
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
  }
};
</script>
