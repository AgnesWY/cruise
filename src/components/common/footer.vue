<template>
  <div>
    <footer>
      <el-row>
        <p class="com-infor-num">
       ©Copyright 2017 ThoughtWorks
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
    background: #fff;
    .com-infor-num {
      font-size: 12px;
      color: #444;
      text-align: center;
    }
  }
</style>