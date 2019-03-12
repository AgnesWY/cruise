<template>
  <header>
    sdd
  
  </header>
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="less" scoped>
header {
  background: #fff;
  line-height: 40px;
  .logo {
    float: right;
    padding-right: 8px;
    img {
      vertical-align: middle;
      height: 25px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .profile {
    float: right;
    .dl-logout {
      color: #475669;
      text-decoration: none;
      outline: none;
      &:hover {
        color: #475669;
        text-decoration: none;
      }
    }
  }
  .dl-approval {
    margin-right: 40px;
    .el-badge__content {
      position: absolute;
      top: 2em;
    }
  }
}
</style>
