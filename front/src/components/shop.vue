<template>
	<div id="shop">
		<section class="bar"></section>
		<swipe class="my-swipe">
  			<swipe-item class="slide1" v-for="data in swipelist" :key="data.id">
  				<img :src="data.imgUrl"/>
  			</swipe-item>
		</swipe>
		<nav>
			<ul>
				<li v-for="data in navlist">
					<router-link to="/phone">
						<img :src="data.imgUrl"/>
					</router-link>
				</li>
			</ul>
		</nav>
		<section class="floor" v-for="data in floorlist" :key="data.id">
			<h2>{{data.item}}</h2>
			<div class="container">
				<ul>
					<li v-for="list in data.goods">
						<a href="javascript:;">
							<img :src="list.path"/>
							<h3>{{list.title}}</h3>
							<p class="des">{{list.des}}</p>
							<p class="price">
								￥<span>{{list.price}}</span>.00
							</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<a href="javascript:;">
					{{data.text}}
				</a>
			</div>
		</section>
		<section class="floor">
			<h2>热点推荐</h2>
			<div class="box">
				<ul>
					<li><a href="javascript:;">X9s</a></li>
					<li><a href="javascript:;">X9s Plus</a></li>
					<li><a href="javascript:;">Xplay6</a></li>
					<li><a href="javascript:;">Y66-性价比推荐</a></li>
					<li><a href="javascript:;">USB数据线</a></li>
					<li><a href="javascript:;">闪充充电器</a></li>
					<li><a href="javascript:;">HiFi耳机</a></li>
					<li><a href="javascript:;">碎屏宝</a></li>
				</ul>
			</div>
		</section>
		<footer>
			<div class="list">
				<a href="javascript:;">特色服务</a>
				<a href="javascript:;">客服QQ</a>
				<router-link to="/login">登录/注册</router-link>
				<a href="javascript:;">选购手机</a>
			</div>
			<div class="copyright">
				<p>©2017shop.vivo.com.cn</p>
				<a href="javascript:;">
					<img src="https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/gssw-icon_db0a7f6.png"/>
				</a>
			</div>
		</footer>
		<gocart></gocart>
		<gotop></gotop>
	</div>
</template>

<script>
import gocart from './gocart';
import gotop from "./gotop";
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {

  name: 'shop',

  data () {
    return {
   		swipelist:[],
   		navlist:[],
   		floorlist:[]
  }
  },
  mounted(){
  	axios.get("/api/shop").then(res=>{
  		console.log(res.data);
  		this.swipelist=res.data[0].swipe;
  		this.navlist=res.data[0].nav;
  		this.floorlist=res.data[0].floor;
  	})
  },
  components:{
  	'swipe': Swipe,
    'swipe-item': SwipeItem,
    gotop,
    gocart
  }
};
</script>

<style lang="scss" scoped>
	#shop{
		width:100%;
		padding-top:0.55rem;
		.bar{
			width:100%;
			height:0.3rem;
			background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/home/bg-guarantees_1b2dc72.png") no-repeat center;
			background-size:contain;
		}
		.my-swipe{
			width:100%;
			height:2.57rem;
			img{
				width:100%;
			}
		}
		nav{
			width:100%;
			height:0.65rem;
			padding:0.2rem 0;
			ul{
				display:flex;
				width:100%;
				height:0.65rem;
				li{
					flex:1;
					width:25%;
					height:0.65rem;
					list-style:none;
					a{
						display:block;
						width:100%;
						height:100%;
						padding:0 0.12rem;
						box-sizing: border-box;
						img{
							width:0.7rem;
							height:100%;
							float:left;
						}
					}
				}
			}
		}
		.floor{
			width:100%;
			h2{
				float:left;
				width:100%;
				height:0.57rem;
				line-height:0.57rem;
				font-size:0.2rem;
				text-align:center;
				padding:0 0.15rem;
				color:#333;
				background:#eee;
				box-sizing: border-box;
				font-weight:normal;
			}
			h2::before{
				position: relative;
    			margin: 0 .05rem;
    			display: inline-block;
    			content: ' ';
    			height: 1px;
    			width: .18rem;
    			background-color: #9c9c9c;
    			vertical-align: middle;
			}
			h2::after{
				position: relative;
    			margin: 0 .05rem;
    			display: inline-block;
    			content: ' ';
    			height: 1px;
    			width: .18rem;
    			background-color: #9c9c9c;
    			vertical-align: middle;
			}
			.container{
				width:100%;
				ul{
					width:100%;
					li{
						width:50%;
						height:2.7rem;
						float:left;
						list-style:none;
						a{
							display:block;
							width:100%;
							height:2.7rem;
							float:left;
							img{
								display:block;
								width:1.05rem;
								height:1.05rem;
								margin:0.28rem 0.4rem 0;
								box-sizing: border-box;
							}
							h3{
								width:100%;
								height:0.18rem;
								padding:0 0.26rem;
								margin:0.16rem 0 0.07rem;
								text-align:center;
								font-size:0.16rem;
								color:#333;
								font-weight:700;
								white-space: nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
								float:left;
								box-sizing: border-box;
							}
							.des{
								width:100%;
								height:0.16rem;
								font-size:0.12rem;
								padding:0 0.2rem;
								color:#000;
								white-space: nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
								box-sizing:border-box;
								text-align: center;
							}
							.price{
								width:100%;
								height:0.2rem;
								font-size:0.14rem;
								color: #f81200;
								margin-top:0.3rem;
								box-sizing: border-box;
								text-align:center;
							}
						}
					}
					li:nth-of-type(1){
						width:100%;
						height:1.5rem;
						a{
							img{
								display:block;
								width:100%;
								margin:0;
								height:1.5rem;
								float:left;
							}
							h3{
								display:none;
							}
							.des{
								display:none;
							}
							.price{
								display:none;
							}

						}
					}
				}
			}
			.bottom{
				float:left;
				width:100%;
				height:0.5rem;
				a{
					display:block;
					width:100%;
					text-align: center;
					font-size:0.12rem;
					color:#333;
					line-height:0.5rem;
					float:left;
				}
				a::after{
					content: " ";
    				display: inline-block;
    				margin-left: .08rem;
    				position: relative;
    				top: -.02rem;
    				width: .09rem;
    				height: .16rem;
    				vertical-align: middle;
    				background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/home/icon-angle-right_798e586.png") no-repeat;
    				background-size:contain;
				}
			}
			.box{
				float:left;
				width:100%;
				height:1.3rem;
				line-height: 1.3rem;
				padding:0.15rem 0.15rem 0.3rem;
				box-sizing: border-box;
				ul{
					width:100%;
					height:0.85rem;
					li{
						list-style:none;
						float:left;
						width:25%;
						height:0.28rem;
						margin-top:0.15rem;
						box-sizing: border-box;
						a{
							display:block;
							width:0.69rem;
							height:0.27rem;
							line-height:0.27rem;
							border:1px solid #d9d9d9;
							margin:0 auto;
							color:#333;
							font-size:0.12rem;
							text-align:center;
							border-radius:0.5rem;
							overflow:hidden;
						}
					}
				}
			}
		}
		footer{
			width:100%;
			height:1rem;
			float:left;
			background:#000;
			.list{
				float:left;
				width:100%;
				height:0.18rem;
				white-space: nowrap;
				margin:0.16rem 0;
				a{
					float:left;
					position:relative;
					display:inline-block;
					box-sizing: border-box;
					width:25%;
					height:0.18rem;
					line-height: 0.18rem;
					font-size: .12rem;
    				color: #b2b2b2;
    				text-align: center;
				}
				a::after{
					content: '';
    				position: absolute;
    				right: 0;
    				top: 50%;
    				width: 0.02rem;
    				height: 0.1rem;
    				margin-top: -0.05rem;
    				background: #5a5a5a;
				}
				a:nth-of-type(4)::after{
					display:none;
				}
			}
			.copyright{
				float:left;
				width:100%;
				height:0.18rem;
				line-height:0.18rem;
				font-size:0.12rem;
				color:#b2b2b2;
				text-align: center;
				p{
					display:inline-block;
				}
				a{
					display:inline-block;
					width:0.18rem;
					height:0.18rem;
					margin-left:0.02rem;
					vertical-align: top;
					img{
						display:block;
						width:100%;
						height:100%;
					}
				}
			}
		}
	}
</style>