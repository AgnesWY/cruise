<template>
  <div id="app" class="wrapper">
    <my-header></my-header>
    <div class="container">
      <sidebar></sidebar>
      <router-view/>
    </div>
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
  display: grid;
  max-width: 1200px;
}
</style>
