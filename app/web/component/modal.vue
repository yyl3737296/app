<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       <div class="modal-dialog">
           <div class="modal-content">
               <div class="modal-header">
                    <h4 class="modal-title">{{options.title}}</h4>
                    <button type="button" class="btn btn-tool" data-dismiss="modal" aria-hidden="true">
                        <i style="font-size: 22px;" class="fa fa-times"></i>
                    </button>
               </div>
               <div class="modal-body">
                 <slot></slot>
               </div>
               <div class="modal-footer">
                   <button type="button" class="btn btn-default" data-dismiss="modal">{{options.ok||'取消'}}</button>
                   <button type="button" class="btn btn-primary">{{options.canel||'确定'}}</button>
               </div>
           </div><!-- /.modal-content -->
       </div><!-- /.modal -->
    </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    props:['id','options'],
    methods: {
        show() {
            $('#'+this.id).modal("show");
        }
    },
    mounted() {
    }
  }
</script>
