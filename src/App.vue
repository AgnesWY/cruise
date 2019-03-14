<template>
  <div id="app" class="wrapper">
    <my-header></my-header>
    <el-row class="container">
      <el-col :span="6">
        <div class="sidebar">
          <sidebar></sidebar>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="content">
          <router-view/>
        </div>
      </el-col>
    </el-row>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './components/common/header.vue';
  import sidebar from './components/common/sidebar.vue';
  import myFooter from './components/common/footer.vue';
  export default {
    name: 'App',
    components: {
      myHeader,
      myFooter,
      sidebar
    },
    methods:{
      orderPicStatus(){
        var that = this;
        // this.$http.post('/dladmin/ordercomment/evaluateOrderCommentPicStatus.html',reqData, {emulateJSON:true}).then( ({data,ok,statusText}) => {
        //     if(ok){
        //       if(data.data)
        //       {
        //         that.searchList(1);

        //       }
        //      that.$message.success(data.msg);

        //     }else { 
        //        that.$message.error('系统错误，请稍后再试');
        //     }
        // })
         this.$http.get('http://localhost:3001/agents').then(({data,ok,statusText}) => {
            if(data.status || !data.data) {
              console.log(data)
            }else {
              that.$message.error('请求失败，请稍后再试');
            }
          });


      }
    },
    created:function(){
      // this.orderPicStatus()
    }
  }
</script>

<style>
@import "./assets/style/fonts.css";
.wrapper {
  font-family: "Avenir", Helvetica,"Arial", "sans-serif";
  font-size: 14px;
  color: #666;
  background: #F3F3F3;

}
.container{
  max-width:1200px;
  margin:0 auto;
}
</style>
