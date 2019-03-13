<template>
	<el-row class="db-info">
		<!-- 图片部分 -->
		<el-col :span="3" >
			<div class="img-part">
				<img src="@/assets/img/os_icons/windows.png" class="os-img" />
			</div>

		</el-col>
		<!-- 信息部分 -->
		<el-col :span="21" class="info-part">
			<!-- 信息展示 -->
			<el-row class="info-shows">
				<el-col :span="9">
					
				</el-col>
				<el-col :span="2"></el-col>
				<el-col :span="6"></el-col>
				<el-col :span="7"></el-col>
			</el-row>
			<!-- 操作 -->
			<el-row class="info-operate">
				
			</el-row>
		</el-col>

	
	</el-row>
</template>

<script>
export default {
	name: 'db-info',
	props:{
       
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