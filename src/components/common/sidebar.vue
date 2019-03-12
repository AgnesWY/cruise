<template>
	<div>
		<el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	       <el-menu-item index="1">
	        <i class="icon-dashboard"></i>
	        <span slot="title">DASHBOARD</span>
	      </el-menu-item>
	      <el-menu-item index="2">
	        <i class="icon-sitemap"></i>
	        <span slot="title">AGENT</span>
	      </el-menu-item>
	      <el-menu-item index="3" disabled>
	        <i class="icon-boat"></i>
	        <span slot="title">MY CRUISE</span>
	      </el-menu-item>
	      <el-menu-item index="4">
	        <i class="icon-life-bouy"></i>
	        <span slot="title">HELP</span>
	      </el-menu-item>
	    </el-menu>
			
	</div>
    
</template>

<script>
  export default {
    name: "sidebar"
  }
</script>

<style lang="less" scoped>
  
</style>
