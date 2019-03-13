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
    }
  }
</script>

<style>
@import "./assets/style/fonts.css";
.wrapper {
  font-family: "Avenir", Helvetica,"Arial", "sans-serif";
  font-size: 14px;
  color: #666;
  background: #ececec;

}
.container{
  max-width:1200px;
  margin:0 auto;
}
</style>
