<template>
  <table :id="id" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="item in options.head">{{item}}</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
            
</template>
<style>

</style>
<script type="text/babel">
  export default{
    props:['id','options'],
    methods: {
    },
    mounted() {
      $('#'+this.id).DataTable({
        "paging": true,// 开启分页  
        "pageLength": 10,//每页显示数量  
        "lengthChange": true,//是否允许用户改变表格每页显示的记录数  
        "searching": true,//搜索  
        "ordering": false,//排序 
        "serverSide": true, 
        "processing" : true,
        "info": true,//左下角 从 1 到 5 /共 23 条数据  
        "autoWidth": true,
        // "scrollX": "100%",//表格的宽度  
        // "scrollY": "200px",//表格的高度  
        "scrollXInner": "100%",//表格的内容宽度
        "ajax" : this.options.url,
        "columns" : this.options.columns,
        // "bScrollCollapse":true,//当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false)  
        "language": {  
            "sProcessing": "加载中...",
            "sSearch" : "",
            "sInfoEmpty": "",  
            "sZeroRecords": "没有数据", 
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",  
            "sLengthMenu": "每页显示 _MENU_ 条记录",  
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",  
            "oPaginate": {  
                "sFirst": "首页",  
                "sPrevious": "前一页",  
                "sNext": "后一页",  
                "sLast": "尾页"  
            }  
        },  
      });
    }
  }
</script>
