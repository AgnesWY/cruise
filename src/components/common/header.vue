<template>
  <header>
    <div class="header-wrap">
      <img src="@/assets/img/logo.svg" class="logo">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户头像<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="icon-id-card"></i>Profile</el-dropdown-item>
          <el-dropdown-item><i class="icon-sign-in"></i>Sign Out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>   
    
  </header>
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 80px;
  background: #fff;
  box-shadow: 0px 5px 2px #ccc;
  .logo {
    width: 120px;
    height:40px;
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
}
</style>
