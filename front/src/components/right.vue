<template>
	<transition name="animate">
	<aside v-show="value" @click="handleClick">
		<ul >
			<router-link to="/shop" activeClass="active" tag="li"><i class="iconfont icon-gouwuche rotate"></i>商城首页</router-link>
			<router-link to="/phone" activeClass="active" tag="li"><i class="iconfont icon-bag"></i>选购手机</router-link>
			<router-link to="/login" activeClass="active" tag="li"><i class="iconfont icon-user2"></i>登录/注册</router-link>
		</ul>
	</aside>
	</transition>
</template>

<script>
export default {

  name: 'right',

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
		background:rgba(0,0,0,0.2);
		z-index:299;
		ul{
			position:absolute;
			top:0;
			right:0.2rem;
			width:1.8rem;
			height:auto;
			background:#fff;
			padding:0.25rem 0;
			li{
				width:100%;
				height:0.5rem;
				line-height:0.5rem;
				padding:0 0.38rem;
				font-size:0.14rem;
				list-style:none;
				text-align:left;
				box-sizing:border-box;
				i{
					font-size:0.22rem;
					margin-right:0.12rem;
				}
			}
		}
	}
	.active{
		color:#008ddc;
	}
	.animate-enter-active{
		animation: enter .5s 1;
	}

	.animate-leave-active{
		animation: trans .5s 1;
	}
	@keyframes enter{
		from{
			opacity:0;
		}
		to{
			opacity:1;
		}
	}

	@keyframes trans{
		from{
			opacity:1;
		}
		to{
			opacity:0;
		}
	}
</style>