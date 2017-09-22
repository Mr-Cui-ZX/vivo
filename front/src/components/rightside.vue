<template>
	<transition name="animate">
	<aside v-show="show" @click="handleClick">
		<ul>
			<router-link to="/cart" activeClass="active" tag="li"><i class="iconfont icon-gouwuche rotate"></i>购物车</router-link>
			<router-link to="/shop" activeClass="active" tag="li"><i class="iconfont icon-bag"></i>我的商城</router-link>
			<router-link to="/login" activeClass="active" tag="li"><i class="iconfont icon-user2"></i>登录/注册</router-link>
		</ul>
	</aside>
	</transition>
</template>

<script>
export default {

  name: 'rightside',

  data () {
    return {

    };
  },

  props:["show"],

  methods:{
  	handleClick(){
  		console.log(this.show);
  		this.$emit("event2");
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
		z-index:99;
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