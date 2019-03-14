<template>
	<el-row class="db-info">
		<!-- 图片部分 -->
		<el-col :span="4" class="img-part">
			<div class="img-wrap">
				<img v-if="agentsItem.os == 'windows'" src="@/assets/img/os_icons/windows.png" class="os-img" />
				<img v-if="agentsItem.os == 'ubuntu'" src="@/assets/img/os_icons/ubuntu.png" class="os-img" />
				<img v-if="agentsItem.os == 'debian'" src="@/assets/img/os_icons/debin.png" class="os-img" />
				<img v-if="agentsItem.os == 'suse'" src="@/assets/img/os_icons/suse.png" class="os-img" />
				<img v-if="agentsItem.os == 'centos'" src="@/assets/img/os_icons/cent_os.png" class="os-img" />
			</div>

		</el-col>
		<!-- 信息部分 -->
		<el-col :span="20" class="info-part">
			<!-- 信息展示 -->
			<el-row class="info-shows">
				<el-col :span="1">
					<i class="icon-desktop"></i>
				</el-col>
				<el-col :span="8" class="name-style">
					<span>{{agentsItem.name}}</span>
				</el-col>
				<el-col :span="4">
					<!-- <span class="status-tab">{{agentsItem.status}}</span> -->
					<span v-bind:class="[agentsItem.status=='idle'? idleColor : buildingColor, statusTab]">{{agentsItem.status}}</span>
					 
				</el-col>
				<el-col :span="4">
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
				<el-col :span="20">
					<span class="plus-wrap"><i class="icon-plus" @click="emitAddBtn($event)"></i></span>
					<span class="resource-wrap" v-for="(item,index) in agentsItem.resources" :key="index" >
						<span>{{item}}</span>
						<i class="icon-trash mgl-4" @click="sureToDelete(agentsItem,item)"></i>
					</span>
				</el-col>
				<el-col :span="4" v-if="agentsItem.status=='building'">
					<span class="deny-wrap">
						<i class="icon-deny"></i>
						<span>Deny</span>
					</span>
				</el-col>
				
			</el-row>
		</el-col>

		

	
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
      	// class 的值
        statusTab:"status-tab",
        idleColor:"idle-back-color",
        buildingColor:"building-back-color",
        // 添加的
        addSources:"",
        activeNames: ['1']


      }
    },
    methods:{
    	/*******https******/
		// 删除一个resource
		deleteOneResource(agentInfo,resource){
			var agentId = agentInfo.id;
			var reqData = JSON.parse(JSON.stringify(agentInfo));
			var mySet = new Set(agentInfo.resources);
			mySet.delete(resource);
			reqData.resources = Array.from(mySet)
			var that = this;
	        this.$http.put('http://localhost:3001/agents/'+agentId,reqData).then( ({data,ok,statusText}) => {
	            if(ok){
	              if(data)
	              {
	                that.emitUpdateData()


	              }
	            }else { 
	               that.$message.error('fail');
	            }
	        })

	    },

	    // 通知父组件更新数据
	    emitUpdateData(){
	    	this.$emit('updateData')
	    },
	    // 通知父组件点击了添加按钮
	    emitAddBtn(event){
	    	this.$emit('addResources',event)

	    },

	    /*******interactive******/ 
	    // 删除resource的交互提示
	    sureToDelete(agentInfo,resource) {
	        this.$confirm('确认删除这个资源吗?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.deleteOneResource(agentInfo,resource);
	          this.$message({
	            type: 'success',
	            message: '删除成功!',
	            duration:1000
	          });
	        }).catch(() => {
	                  
	        });
	    }

    }
}
</script>


<style lang="less">
.db-info{
	width:100%;
	height:150px;
	background-color:white;
	margin:10px 0;
	.img-part{
		height:100%;
		.img-wrap{
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

	}
	
	
	.info-part{
		height:150px;
		i{
			font-size:16px;
			cursor:pointer;
		}
		.info-shows{
			height:50%;
			line-height: 75px;
			font-size:14px;
			.name-style{
				color:#00B4CF;
				font-weight:bold;
			}
			.status-tab{
				height: 50px;
				padding:2px;
			    color: #fff;

			}
			.idle-back-color{
				background: #7FBC39;

			}
			.building-back-color{
				background: #FF9A2A;

			}
			
			

		}
		.info-operate{
			height:50%;
		    line-height: 30px;
		    .plus-wrap{
		    	height: 50px;
		    	padding:5px;
		    	background-color:#00B4Cf;
		    	color:white;

		    }
			.resource-wrap{
				height: 50px;
				padding:5px;
				background-color:#E1E4E6;
				margin-left:10px;
			}
			.mgl-4{
				margin-left:4px;
			}
			.deny-wrap{
				height: 50px;
				padding:5px 10px;
				background-color:#00B4Cf;
				color:#fff;

			}

		}

	}


	


	

}

</style>