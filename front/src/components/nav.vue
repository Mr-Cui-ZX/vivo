<template>
	<div id="bar">
		<div class="normal">
				<a href="javascript:history.go(-1)" class="goback">
					<i></i>
				</a>
				<div class="category">
					<a href="javascript:;" v-for="(data,index) in datalist" v-model="childlist" :key="data.id" :class="id==index?'white':'' " @click="idClick(index)"><span>{{data.text}}</span></a>
				</div>
				<a href="javascript:;" class="link" @click="handleClick">
					<i></i>
				</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'nav',

  props:['value'],

  data () {
    return {
    	id:0,
    	childlist:[],
    	datalist:[
    		{
    			id:"1",
    			text:"商品"
    		},
    		{
    			id:"2",
    			text:"详情"
    		}
    	]
    };
  },
  methods:{
  	handleClick(){
  		this.$emit('input',!this.value);
  	},
  	idClick(index){
  		this.id=index;
  		this.$emit('event');
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
			.category{
				width:80%;
				height:0.55rem;
				line-height:0.55rem;
				float:left;
				a{
					display:inline-block;
					width:50%;
					height:0.55rem;
					color:#999;
					float:left;
					text-align:right;
					line-height:0.55rem;
					font-size:0.16rem;
					padding:0 0.4rem;
					box-sizing: border-box;
					span{
						display:inline-block;
						color:#999;
						height:0.55rem;
				}
				}
				a:last-of-type{
					text-align: left;
				}
				.white{
					span{
						color:white;
						font-weight:bold;
						box-sizing: border-box;
						border-bottom:0.02rem solid #fff;
					}
					
				}
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