<template>
	<el-row class="db-info">
		<!-- 图片部分 -->
		<el-col :span="3" >
			<div class="img-part">
				<img :src="imgSource" class="os-img" />
			</div>

		</el-col>
		<!-- 信息部分 -->
		<el-col :span="21" class="info-part">
			<!-- 信息展示 -->
			<el-row class="info-shows">
				<el-col :span="9">
					<i class="icon-desktop"></i>
					<span>{{agentsItem.name}}</span>
				</el-col>
				<el-col :span="2">
					<div>{{agentsItem.status}}</div>
				</el-col>
				<el-col :span="6">
					<i class="icon-info"></i>
					<span>{{agentsItem.ip}}</span>
				</el-col>
				<el-col :span="7">
					<i class="icon-folder"></i>
					<span>{{agentsItem.location}}</span>
				</el-col>
			</el-row>
			<!-- 操作 -->
			<el-row class="info-operate">
				<el-col :span="22">
					<i class="icon-plus"></i>
					<i class="icon-trash"></i>
				</el-col>
				<el-col :span="2">
					<i class="icon-deny"></i>
				</el-col>
				
			</el-row>
		</el-col>

		<!-- 模态框 -->

	
	</el-row>
</template>

<script>
export default {
	name: 'db-info',
	props:{
        agentsItem:{
			type: Object,
	        default: function(){
	          return {
	          	"name": "bjstdmngbdr01.thoughtworks.com",
				"os": "windows",
				"status": "idle",
				"type": "physical",
				"ip": "192.168.1.102",
				"location": "/var/lib/cruise-agent",
				"resources": [
				"Firefox",
				"Safari",
				"Ubuntu",
				"Chrome"
				],
				"id": 1
	          }
	        }
		}
	},
	data: function() {
      return {
        imgSource:"@/assets/img/os_icons/"+this.agentsItem.os+".png"
      }
    },
}
</script>


<style lang="less">
.db-info{
	width:100%;
	height:150px;
	background-color:white;
	margin:10px 0;
	.img-part{
	    position: absolute;
	    width: 150px;
	    height: 150px;
	}
	.os-img{
	    position: absolute;
	    width: 80px;
	    height: 80px;
	    top: 50%;
	    margin-top: -40px;
	    left: 50%;
	    margin-left: -40px;
	}
	.info-part{
		height: 150px;
		width:400px;

	}

	.info-shows{
		background-color:blue;

	}

}

</style>