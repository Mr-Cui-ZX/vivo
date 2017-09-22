<template>
	<div id="bar">
		<div class="normal">
				<a href="javascript:history.go(-1)" class="goback">
					<i></i>
				</a>
				<h1>选购手机</h1>
				<a href="javascript:;" class="link" @click="handleClick">
					<i></i>
				</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'bar',

  props:['value'],

  data () {
    return {

    };
  },
  methods:{
  	handleClick(){
  		this.$emit('input',!this.value)
  	}
  }
};
</script>

<style lang="scss" scoped>
	#bar{
		width:100%;
		height:0.55rem;
		background:#000;
		color:#fff;
		position:fixed;
		top:0;
		left:0;
		z-index:299;
		.normal{
			width:100%;
			height:0.55rem;
			line-height:0.55rem;
			.goback{
				float:left;
				display:block;
				width:10%;
				padding-left:0.2rem;
				box-sizing: border-box;
				height:100%;
				i{
					float:left;
					display:block;
					width:0.21rem;
					height:100%;
					background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icons-header_fb22efa.png") no-repeat left center;
					background-size:0.5rem 0.18rem;
				}
			}
			h1{
				font-size:0.18rem;
				float:left;
				height:0.55rem;
				line-height:0.55rem;
				text-align:center;
				width:80%;
				font-weight:normal;
			}
			.link{
				display:block;
				float:right;
				width:10%;
				padding-right:0.2rem;
				box-sizing: border-box;
				height:100%;
				i{
					float:left;
					display:block;
					width:0.21rem;
					height:100%;
					background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icons-header_fb22efa.png") no-repeat right center;
					background-size:0.5rem 0.18rem;
				}
			}
		}
	}
</style>