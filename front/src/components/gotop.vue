<template>
	<div class="gotop" v-show="isHide" @click="handleClick">
	</div>
</template>

<script>
export default {

  name: 'gotop',

  data () {
    return {
    	isHide:false
    };
  },

  mounted(){
  	window.onscroll=()=>{
  		document.documentElement.scrollTop>=700?
  			this.isHide=true
  			:
  			this.isHide=false
  	}
  },

  methods:{
  	handleClick(){
  		document.documentElement.scrollTop=0;
  	}
  }

};
</script>

<style lang="scss" scoped>
	.gotop{
		width:0.35rem;
		height:0.35rem;
		position:fixed;
		z-index:19;
		right:0.1rem;
		bottom:0.05rem;
		background:url("https://wwwstatic.vivo.com.cn/vivoportal/web/dist/img/common/backTopGray_mob_5aaaa46.png") no-repeat;
		background-size:100% 100%;
	}
</style>