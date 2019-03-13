<template>
	 <div class="db-info">
		 <div class="left">{{leftWords}}</div>
		 <div class="mid"><i :class="iconName"></i></div>
		 <div class="right">{{rightWrods}}</div>
	 </div>
</template>

<script>
export default {
	name: 'db-info',
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
.db-info{

}

</style>