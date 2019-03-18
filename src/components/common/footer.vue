<template>
  <div>
    <footer>
      <el-row>
        <p class="com-infor-num">
       ©Copyright 2019
      </p>
      </el-row>
      
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'my-footer'
  }
</script>

<style lang="less" scoped>
  footer {
    height: 25px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: solid #ccc 1px;
    .com-infor-num {
      font-size: 12px;
      color: #444;
      text-align: center;
    }
  }
</style>