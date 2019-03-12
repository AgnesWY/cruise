<template>
  <div>
    <footer>
      <p class="com-infor-num">
       ©Copyright 2017 ThoughtWorks
      </p>
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
    padding: 15px 0 15px 0;
    .com-infor-num {
      font-size: 12px;
      color: #444;
      text-align: center;
    }
  }
</style>