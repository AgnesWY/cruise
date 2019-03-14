<template>
	<div class="sidebar">
		<!-- 侧边栏部分 导航栏 -->
		<el-row class="side-router">
			<el-menu
		      default-active="2"
		      background-color="#2D4054"
		      text-color="#ccc"
		      active-text-color="#00B4CF">
		       <el-menu-item index="1">
		        <i class="icon icon-dashboard"></i>
		        <span slot="title">DASHBOARD</span>
		      </el-menu-item>
		      <el-menu-item index="2">
		        <i class="icon icon-sitemap"></i>
		        <span slot="title">AGENT</span>
		      </el-menu-item>
		      <el-menu-item index="3">
		        <i class="icon icon-boat"></i>
		        <span slot="title">MY CRUISE</span>
		      </el-menu-item>
		      <el-menu-item index="4">
		        <i class="icon icon-life-bouy"></i>
		        <span slot="title">HELP</span>
		      </el-menu-item>
		    </el-menu>
		</el-row>
		<!-- 侧边栏下部分 历史记录 -->
		<el-row class="side-history">
			<el-col class="history-title">History</el-col>
			<el-col class="history-content">
				<ul>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
					<li><a href="#">bjstdmngbdr01.thoughtworks.com</a></li>
				</ul>
			</el-col>
		</el-row>
		
			
	</div>
    
</template>

<script>
  export default {
    name: "sidebar",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
.sidebar{
	width:246px;
	min-height:340px;
	background-color:#2D4054;

	.side-router{
		min-height:342px;
		.el-menu{
		    border-right: none;
		}
		.el-menu-item{
			height:45px;
			line-height:45px;
		}
		.icon{
			margin-right:5px;
		}
	}

	.side-history{
		min-height:342px;
		padding:10px;
		.history-title{
			font-size:24px;
			color:#ccc;
		}
		.history-content{
			font-size:12px;
			
			li{
				width: 196px;
				line-height:20px;
				margin-left:-24px;
			    overflow: hidden;
			    text-overflow: ellipsis;
				a{
					color:#999;
					text-decoration:none;
					
				}
				a:hover{
					color:#00B4CF;
				}
			}
		}

	}
	

}
  
</style>
