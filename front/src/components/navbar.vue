<template>
		<nav>
			<div class="leftmenu" @click="handleClick">
				<span class="menu-top" :class="{rotateTop:value}"></span>
				<span class="menu-middle" v-show="value===false?true : false"></span>
				<span class="menu-bottom" :class="{rotateBottom:value}"></span>
			</div>
			<div class="logo">
			<router-link to="/home">
				<img src="../assets/imgs/logo.png"/>
			</router-link>
			</div>
			<div class="tools">
				<a class="user" href="javascript:;">
					<i class="iconfont icon-user2"  @click="rightClick"></i>
				</a>
				<router-link to="/shop" class="bag">
					<i class="iconfont icon-bag"></i>
				</router-link>
			</div>
		</nav>
</template>

<script>
import "../assets/iconfont/iconfont.css"
export default {

  name: 'navbar',

  data () {
    return {

    };
  },

  props:["value"],

  methods:{
  	handleClick(){
  		this.isShow=!this.isShow;
  		this.isClass=!this.isClass;
  		this.$emit("input",!this.value);
        this.$emit("event");
  	},

  	rightClick(){
        this.$emit("event2");
    }
  	}
};
</script>

<style lang="scss" scoped>
	nav{
		width:100%;
		height:0.55rem;
		background:#0d0d0d;
		font-size: 0.14rem;
    	position: fixed;
    	border-bottom:1px solid #262626;
    	top:0;
    	left:0;
    	z-index: 199;
    	.leftmenu{
    		position:absolute;
    		left:0;
    		top:0;
    		vertical-align: middle;
    		width:0.55rem;
    		height:100%;
    		text-align:center;
    		span{
    			position: absolute;
    			width: 0.19rem;
    			height: 0.01rem;
    			left: 50%;
    			margin-left: -0.1rem;
    			background-color: #fff;
    			transition: transform .4s ease-out,opacity .2s,-webkit-transform .4s ease-out;
    		}
    		.menu-top{
    			top:0.2rem;
    		}
    		.rotateTop{
    			transform: translate3d(0,8px,0) rotate(45deg);
    		}
    		.menu-middle{
    			top:0.27rem;
    		}
    		.menu-bottom{
    			top:0.35rem;
    		}
    		.rotateBottom{
    			transform: translate3d(0,-8px,0) rotate(-45deg);
    		}
    	}
    	.logo{
    		position:absolute;
    		top: 0.12rem;
    		left:1.5rem;
    		width: 0.74rem;
    		height: 0.3rem;
    		a{
    			display:block;
    			width:0.74rem;
    			height:0.3rem;
    			img{
    				width:0.74rem;
    				height:0.3rem;
    			}
    		}
    	}
    	.tools{
    		position:absolute;
    		top:50%;
    		right:0.16rem;
    		margin-top:-0.12rem;
    		z-index:2;
    		width:17%;
    		a{
    			float:right;
    			color:white;
    			width:0.2rem;
    			height:0.2rem;
    			i{
    				font-size:0.26rem;
    				font-weight:400;
    			}
    		}
    		.user{
    			margin-left:0.2rem;
    		}
    	}
	}
</style>