<template>
	 <div class="view-card" :style="backColor">
		 <div class="left">{{leftWords}}</div>
		 <div class="mid"><i :class="iconName"></i></div>
		 <div class="right">{{rightWrods}}</div>
	 </div>
</template>

<script>
export default {
	name: 'view-card',
	props:{
        leftWords:{
			type:String,
			default: "1"
		},
		rightWrods:{
			type:String,
			default: ""
		},
		iconName:{
			type: String,
			default: ""
		},
		backColor:{
			type: String,
			default: "background:#7FBC39"
		}
    }
}
</script>


<style lang="less">
.view-card{
	position: relative;

	width: 260px;
	height: 144px;
	color: white;
	.mid{
		width: 130px;
		margin: 0 auto;
		i{
			text-align: center;
			font-size: 144px;
			opacity: 0.2;

		}
	}
	.left{
		    position: absolute;
		    left: 15px;
		    top: 10px;
		    font-size: 18px;
		    font-weight: bold;
	}
	.right{
		position: absolute;
	    right: 15px;
	    bottom: 15px;
	    font-size: 48px;
	}
}

</style>