<template>
	<div>	
		<input type="text" name="" v-model="">
		显示：{{text | myfilter}}
	</div>
</template>
<script>
	export default{
		filter:{
			myFilter:function(value){
				retuen 1;
			}
		},
		data(){
			return {
				text:''
			}
		}
	}
</script>
<style>
</style>