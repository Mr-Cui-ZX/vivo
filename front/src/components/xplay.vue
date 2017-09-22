<template>
	<div class="xplay">
		<div class="banner">
			<div class="title">
				<img src="https://wwwstatic.vivo.com.cn/vivoportal/web/dist/constFile/productSeries/Xplay/xplay_banner_text.png"/>
				<div class="txt">
					<a href=":javascript:;" title="">进一步了解</a>
					<a href=":javascript:;" title="">立即购买</a>
					<a href=":javascript:;" title="">门店选购</a>	
				</div>
			</div>
		</div>
		<div class="swipe">
			<div class="list" v-for="data in datalist" href="javascript:;" :key="data.id">
				<img :src="data.imgPath"/>
				<span>{{data.title}}</span>
			</div>
		</div>
		<div class="product"  v-for="data in productlist" :key="data.id">
			<div class="single">
				<div class="img">
					<img :src="data.imgPath"/>
				</div>
				<div class="word">
					<div class="title">{{data.title}}</div>
					<div class="text">{{data.text}}</div>
					<div class="des">{{data.des}}</div>
				</div>
			</div>
		</div>
		<bottom></bottom>
		<gotop></gotop>
	</div>
</template>

<script>
import axios from "axios";
import bottom from './bottom';
import gotop from './gotop';
export default {

  name: 'xplay',

  data () {
    return {
    	datalist:[],
    	productlist:[]
    };
  },

  mounted(){
  	axios.get("/api/xplay").then(res=>{
  		this.datalist=res.data[0].list;
  		this.productlist=res.data[0].product;
  	})
  },
  components:{
  	bottom,
  	gotop
  }
};
</script>

<style lang="scss" scoped>
	.xplay{
		width:100%;
		.banner{
			width:100%;
			height:4.3rem;
			background:url("https://wwwstatic.vivo.com.cn/vivoportal/files/image/series/20170705/20170705173345936101_original.jpg") no-repeat;
			background-size:100% 100%;
			.title{
				width:100%;
				height:1.4rem;
				position:absolute;
				top:0.8rem;
				img{
					width:1.75rem;
					height:0.9rem;
					margin-left:1rem;
				}
				.txt{
					width:100%;
					height:0.22rem;
					padding-left:0.8rem;
					box-sizing: border-box;
					line-height:0.22rem;
					a{
						float:left;
						margin:0 0.1rem;
						font-size:0.12rem;
						text-align:center;
						color: #008cdc;
				}
				}
			}
		}
		.swipe{
				float:left;
				width:100%;
				height:1.4rem;
				padding:0.05rem 0;
				overflow-x:scroll;
				overflow-y:hidden;
				white-space: nowrap;
				.list{
					width:0.98rem;
					height:1.4rem;
					display:inline-block;
					img{
						display:inline-block;
						float:left;
						width:0.75rem;
						height:0.75rem;
						margin:0.27rem 0.1rem 0;
					}
					span{
						width:100%;
						height:0.24rem;
						line-height:0.24rem;
						font-size:0.12rem;
						color: #1a1a1a;
						float:left;
						text-align:center;
					}
				}
		}
		.product{
			width:100%;
			float:left;
			.single{
				width:100%;
				height:5rem;
				position:relative;
				margin-top:0.06rem;
				.img{
					width:100%;
					height:5rem;
					img{
						width:100%;
					}
				}
				.word{
					width:100%;
					height:0.94rem;
					position:absolute;
					left:0;
					top:0.4rem;
					text-align:center;
					.title{
						width:100%;
						height:0.18rem;
						line-height: 0.18rem;
						color:#333;
						font-size:0.16rem;
					}
					.text{
						width:100%;
						height:0.33rem;
						line-height:0.33rem;
						margin-top:0.1rem;
						color:#333;
						font-size:0.26rem;
					}
					.des{
						width:100%;
						height:0.33rem;
						line-height:0.33rem;
						color:#333;
						font-size:0.26rem;
					}
				}
			}
		}
	}
</style>