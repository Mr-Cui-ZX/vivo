<template>
	<div id="goods">
		<div class="containers">
			<img :src="data.path" v-for="data in data3"/> 
		</div>
	</div>
</template>

<script>
export default {

  name: 'goods',

  props:['data3'],

  data () {
    return {
    	
    };
  }
};
</script>

<style lang="scss" scoped>
	#goods{
		width:100%;
		padding-top:0.55rem;
		.containers{
			width:100%;
			img{
				width:100%;
			}
		}
	}
</style>