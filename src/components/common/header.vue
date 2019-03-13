<template>
  <header>
    <el-row class="container">
      <el-col>
        <img src="@/assets/img/logo.svg" class="logo">
        <el-dropdown class="profile">
          <span class="el-dropdown-link">
            用户头像<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item><i class="icon-id-card"></i>Profile</el-dropdown-item>
            <el-dropdown-item><i class="icon-sign-in"></i>Sign Out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
      
  </header>
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="less" scoped>
header {
  .container{
    max-width:1200px;
    margin:0 auto;
  }
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: 0px 5px 2px #ccc;
  .logo {
    width: 120px;
    height: 40px;
    display: block;
    margin: 0 auto;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .profile {
    position: absolute;
    right: 0;
    height: 30px;
    top: 50%;
  }
}
</style>
