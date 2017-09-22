<template>
	<transition name="animate">
	<aside v-show="value">
		<ul @click="handleClick">
			<router-link tag="li" to="/xplay" activeClass="active">Xplay系列</router-link>	
			<router-link tag="li" to="/shop" activeClass="active">商城</router-link>
			<router-link tag="li" to="/search" activeClass="active"><i class="iconfont icon-search"></i>搜索</router-link>
		</ul>
	</aside>
	</transition>
</template>

<script>
export default {

  name: 'leftside',

  data () {
    return {
    	
    };
  },

  props:["value"],

  methods:{
  	handleClick(){
  		this.$emit("input",false);
  	}
  }
};
</script>

<style lang="scss" scoped>
	aside{
		position:fixed;
		top:0.55rem;
		left:0;
		right:0;
		bottom:0;
		background:#0d0d0d;
		z-index:99;
		ul{
			width:100%;
			height:100%;
			li{
				height:0.55rem;
				line-height:0.55rem;
				margin:0 10%;
				border-bottom:1px solid #262626;
				color:white;
				font-size:0.14rem;
				text-align:center;
				list-style:none;
				i{
					font-size:0.18rem;
					margin-right:0.05rem;
				}
			}
		}
	}
	.active{
		color:#008ddc;
	}
	.animate-enter-active{
		animation: trans .5s 1;
	}

	.animate-leave-active{
		animation: trans .5s 1 reverse;
	}

	@keyframes trans{
		from{
			transform:translateY(-100%);
		}
		to{
			transform:translateY(0px);
		}
	}
</style>