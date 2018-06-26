<template>
    <div class="modal fade" ref="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
       <div class="modal-dialog">
           <div class="modal-content">
               <div class="modal-header">
                    <h4 class="modal-title">{{options.title}}</h4>
                    <button type="button" class="btn btn-tool" data-dismiss="modal" aria-hidden="true">
                        <i style="font-size: 22px;" class="fa fa-times"></i>
                    </button>
               </div>
               <div class="modal-body">
                 <slot ref="aaa"></slot>
               </div>
               <div class="modal-footer">
                   <button type="button" class="btn btn-default" data-dismiss="modal">{{options.ok||'取消'}}</button>
                   <button type="button" class="btn btn-primary" @click="ok()">{{options.canel||'确定'}}</button>
               </div>
           </div><!-- /.modal-content -->
       </div><!-- /.modal -->
    </div>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    props:['options'],
    methods: {
        show() {
            $(this.$refs.modal).modal("show");
        },
        ok() {
          if (this.options.$ok) {
            this.options.$ok();
          }
          $(this.$refs.modal).modal("hide");
        }
    },
    mounted() {
    }
  }
</script>
