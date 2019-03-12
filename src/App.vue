<template>
  <div id="app" class="wrapper">
    <my-header></my-header>
    <div class="container">
      <sidebar></sidebar>
      <router-view/>
    </div>

    <el-row>
      <el-col :md="6" :lg="4">
        <div class="sidebar">
          <sidebar></sidebar>
        </div>
      </el-col>
      <el-col :md="18" :lg="20">
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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
  font-size: 14px;
  color: #666;
  background: #ececec;

}
.container{
  max-width: 1200px;

}
</style>
