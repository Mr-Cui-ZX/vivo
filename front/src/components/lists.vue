<template>
	<div id="list">
		<swipe class="my-swipe">
  			<swipe-item class="slide1" v-for="data in data1" :key="data.id">
  				<img :src="data.path"/>
  			</swipe-item>
  			<img src="https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_100x100.png" class="icon"/>
		</swipe>
		<div class="title">
			<div class="wrapper">
				<h2>{{data4.name}}</h2>
				<div class="des">{{data4.des}}</div>
			</div>
		</div>
		<div class="content"></div>
		<div class="summary">
			<div class="wrapper">
				<div class="left">
					<div class="currentprice">
						<span>￥</span>{{data4.currentprice}}
					</div>
					<div class="originprice">
						<span>￥</span>{{data4.price}}
					</div>
				</div>
				<div class="right">
					<ul>
						<li>
							<span class="label">定制</span>
							免费的镭射雕刻服务
							<i class="icon"></i>
						</li>
						<li>
							<span class="label">V币</span>
							购买即赠送2498V币
						</li>
						<li>
							<span class="label">赠品</span>
							价值247元
							<i class="icon"></i>
						</li>
					</ul>
				</div>
			</div>
			<div class="product">
				
			</div>	
		</div>
		<div class="content"></div>
		<div class="selection">
			<div class="wrapper">
				<div class="sum">
					已选：
					<span class="item">全网通</span>
					<span class="item">64G版本</span>
					<span class="item">磨砂黑</span>
					<span class="item">官方标配</span>
					<span class="item">1件</span>
					<i class="icon"></i>
				</div>
				<div class="service">
					<div class="huabei">
						支持花呗分期
					</div>
					<div class="recycle">
						支持以旧换新
					</div>
				</div>
			</div>
		</div>
		<div class="content"></div>
		<div class="prod">
			<h2 class="title">
				<div class="wrapper">
					<a href="javascript:;">
						更多评价
						<i class="icon"></i>
					</a>
					商品评价
					<span>(3479)</span>
				</div>
			</h2>
			<ul class="list">
				<li class="item" v-for="data in data2" :key="data.id">
					<div class="wrapper">
						<div class="info">
							<div class="time">{{data.time}}</div>
							<div class="name">{{data.name}}</div>
							<span class="star">
								<i></i>
							</span>
							<span class="text">精华评论</span>
						</div>
						<div class="con">
							<div class="text">
								{{data.text}}
							</div>
							<div class="pic">
								<a href="javascript:;" v-for="img in data.url">
									<img :src="img.path"/>
								</a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottom">查看更多评价</div>
		<div class="end">已经到底了</div>
	</div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {

  name: 'lists',

  props:['data1','data2','data4'],

  data () {
    return {
  		 	
    };
  },

  components:{
  	'swipe': Swipe,
    'swipe-item': SwipeItem
  },

  mounted(){
  	document.documentElement.scrollTop=0;
  }
};
</script>

<style lang="scss" scoped>
	#list{
		width:100%;
		padding-top:0.55rem;
		.content{
			width:100%;
			height:0.12rem;
			background:#e8e8e8;
		}
		.my-swipe{
			width:100%;
			padding-top:0.1rem;
			box-sizing: border-box;
			height:3rem;
			position:relative;
			img{
				display:block;
				width:2.45rem;
				height:2.45rem;
				margin:0 auto;
			}
			.icon{
				display:block;
				width:0.5rem;
				height:0.5rem;
				position:absolute;
				top:0;
				right:0.75rem;
			}
		}
		.title{
			width:100%;
			height:1.1rem;
			.wrapper{
				width:100%;
				height:0.65rem;
				padding:0 0.16rem;
				box-sizing: border-box;
				h2{
					width:100%;
					height:0.28rem;
					line-height:0.28rem;
					font-size:0.18rem;
					font-weight: 400;
					color:#000;
					margin:0.1rem 0 0.03rem;
				}
				.des{
					width:100%;
					height:0.36rem;
					line-height:0.36rem;
					font-size:0.13rem;
					margin-bottom:0.3rem;
				}
			}
		}
		.summary{
			width:100%;
			height:1.64rem;
			padding:0.32rem 0;
			margin-top:0.12rem;
			box-sizing: border-box;
			.wrapper{
				width:100%;
				padding:0 0.16rem;
				height:0.6rem;
				box-sizing: border-box;
				.left{
					display:table-cell;
					padding-right:0.22rem;
					width:0.8rem;
					height:0.6rem;
					vertical-align: top;
					text-align: right;
					.currentprice{
						width:0.8rem;
						height:0.3rem;
						line-height: 0.3rem;
						margin-bottom:0.1rem;
						color:#f51200;
						font-size:0.28rem;
						span{
							font-size:0.18rem;
						}
					}
					.originprice{
						width:0.8rem;
						height:0.1rem;
						line-height: 0.1rem;
						font-size:0.1rem;
						color:#999;
						text-decoration: line-through;
					}
				}
				.right{
					display:table-cell;
					width:100%;
					height:0.5rem;
					padding:0.03rem 0 0.03rem 0.22rem;
					box-sizing: border-box;
					border-left:0.01rem solid #bcbcbc;
					ul{
						width:100%;
						height:100%;
						li{
							list-style:none;
							width:100%;
							height:0.14rem;
							line-height:0.14rem;
							font-size:0.12rem;
							margin-bottom:0.05rem;
							position:relative;
							.label{
								display: inline-block;
    							margin-right: .07rem;
    							width: .25rem;
    							height: .13rem;
    							text-align: center;
    							margin-right:0.18rem;
    							border-radius:0.02rem;
    							font-size: .12rem;
    							color: #fff;
    							vertical-align: baseline;
    							background-color: #f50e0e;
							}
							.icon{
								position: absolute;
    							top: 20%;
    							right: 0;
    							width: .05rem;
    							height: .09rem;
    							background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-more_98ae515.png) no-repeat; 
    							background-size:contain;
							}
						}
					}
				}
			}
			.product{
				height:0.4rem;
    			width: 100%;
    			margin-top: .32rem;
    			background:url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/prod/bg-guarantees_1b2dc72.png) center center no-repeat;
    			background-size:100% 0.3rem;
			}
		}
		.selection{
			width:100%;
			height:1.2rem;
			margin:0.12rem 0;
			.wrapper{
				width:100%;
				height:1.2rem;
				padding:0 0.16rem;
				box-sizing: border-box;
				.sum{
					width:100%;
					height:0.6rem;
					line-height: 0.6rem;
					padding-right:0.1rem;
					box-sizing: border-box;
					color:#000;
					font-size:0.14rem;
					white-space: nowrap;
					text-overflow:ellipsis;
					overflow:hidden;
					position:relative;
					.item{
						margin-right:0.1rem;
					}
					.icon{
						position: absolute;
    					top: 44%;
    					right: 0;
    					width: .05rem;
    					height: .09rem;
    					background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-more_98ae515.png) no-repeat; 
    					background-size:contain;
    				}
				}
				.service{
					width:100%;
					padding:0.2rem 0;
					height:0.2rem;
					line-height:0.2rem;
					font-size:0.12rem;
					color:#777;
					border-top:0.01rem solid #eee;
					position:relative;
					div{
						float:left;
						width:0.9rem;
						height:0.15rem;
						line-height:0.15rem;
						padding-left:0.15rem;
						margin-right:0.15rem;
						box-sizing: border-box;
						background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MTIxRjFFMzQ1RDIxMUU3OUVFM0I3MzFDRTU4NjJFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MTIxRjFFNDQ1RDIxMUU3OUVFM0I3MzFDRTU4NjJFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMjFGMUUxNDVEMjExRTc5RUUzQjczMUNFNTg2MkUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYxMjFGMUUyNDVEMjExRTc5RUUzQjczMUNFNTg2MkUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AdbEzQAAAtVJREFUeNqclktoE1EUhv/E+o5YtBQVbWtKES1U6gN81TYViyg0C20T9y5cKHalqCtXPsB93blQfFBBCoIVNX1YKYiKfeFCrC2i1VZNmiaaNMn1P5kxaSaZ1M6FP/O4937/zZ0z54xNKQWzZnsAJw/NVD21hSrWu75TQ5SPuq+O4qMpI5cBwaU8XKWa7DbYq1YC2wtJX6zTI8BrP9AfABIKCTGhztFoLAsmBrOFNuWmphwPlTo/oNRoSJk26ZMxMlbmUI1ZPAO8hYrXdin1KQ/Y2GRsTWfSJE6dyWnADi+VaO5TKhpX824RzpG5wqA8GQa8UUIFZRURC/DZJvo/CQpT2Hb9UVxxFMBxayewyA7LTeYKYzlZvLws9+yMmDIePafKgZJl1uHRhHYUxuny5KlHotGePKHRSad1+PsgsKkD6P2hXQuLzAU89YpBvcR5qcXVj4SAgz1AKJ5+T4QlTDaXGFRWF1qDf/4NNLwAgjGgYx9Q4Uj36czKAv4UrVkyf/gE3+ZDhH+hydOaFDDVdGZRVsy8+gU4HwPvAubwwIwG/zANtO8Bdq82HysGk+N/0jcKFwIzjAhXN9D3M3tCmHt9pBcYnGIC2gUcKM4N1pmTYjD81p/ukH3sqQNW0aiBD69zIjMU3S8145s7gMa15ivXmUNi8GyAqxkNpzvLGAXdNFm/FDjM1T4aB2J84Zv6OJiJurUaOL7BHC6sfm2LfWJwT1LuDUNGX8eH1F0LbF6hrbqCz6X9K3C9CjixMX8AtJLF9XAzcfdfLrojKXcsnJ1f/FGl9vqS+UVdGp47H0kK19P3bWOym95vkuxCMaWefLOW7LLStcdiuo5mpmtv3oLj6spfyXJtS11XquC0mFa0WSUzKPt4cXDuknlhMLXnsi1uIy9f0b9GHZOiv5WJa5uh6L/xa2+7XvTbqLMs+qP/9VVh+GzxmHy2DFPPJRQJHjFj/BVgAIJ0gxY0y/lGAAAAAElFTkSuQmCC) left center no-repeat;
						background-size:0.12rem;
					}
					div::before{
						content: '';
    					position: absolute;
    					float:left;
    					right: 0;
    					top: 0;
    					width: .05rem;
    					height: 100%;
    					background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-more_98ae515.png) center center no-repeat;
    					background-size:contain;
					}
				}
			}
		}
		.prod{
			width:100%;
			margin-top:0.12rem;
			.title{
				width:100%;
				height:0.57rem;
				line-height:0.57rem;
				color:#000;
				font-size:0.14rem;
				font-weight:400;
				border-bottom:0.01rem solid #eee;
				.wrapper{
					width:100%;
					padding:0 0.16rem;
					box-sizing: border-box;
					a{
						display:block;
						float:right;
						width:0.6rem;
						height:0.57rem;
						color:#666;
						font-size:0.12rem;
						padding-right:0.08rem;
						box-sizing: border-box;
						position:relative;
						.icon{
							position: absolute;
    						top: 44%;
    						right: 0;
    						width: .05rem;
    						height: .09rem;
    						background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-more_98ae515.png) no-repeat;
    						background-size:contain;
						}
					}
				}
			}
			.list{
				width:100%;
				overflow:hidden;
				.item{
					width:100%;
					height:3.4rem;
					position:relative;
					.wrapper{
						width:100%;
						box-sizing: border-box;
						position:absolute;
						top:0;
						padding: .3rem .15rem;
    					overflow: hidden;
    					border-bottom: 0.01rem solid #dcdcdc;
    					height:100%;
    					.info{
    						width:100%;
    						height:0.43rem;
    						.time{
    							width:20%;
    							height:0.16rem;
    							float:right;
    							color:#999;
    							font-size:0.12rem;	
    						}
    						.name{
    							width:80%;
    							float:left;
    							height:0.16rem;
    							color:#999;
    							font-size:0.12rem;
    						}
    						.star{
    							display:inline-block;
    							width:1rem;
    							height:0.16rem;
    							float:left;
    							margin-top:0.08rem;
    							background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/prod/icon-stars_0ceeb19.png") no-repeat;
    							background-size:1rem 0.16rem;
    							vertical-align: text-bottom;
    							position:relative;
    							i{
    								width:100%;
    								height:0.16rem;
    								position: absolute;
    								left: 0;
    								top: 0;
    								display: inline-block;
    								height: 100%;
    								background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/prod/icon-stars-light_806b6c5.png) no-repeat;
    								background-size:1rem 0.16rem;
    							}
    						}
    						.text{
    							    margin-left: .15rem;
    								margin-top: .06rem;
    								padding: 0 .05rem;
    								height: .18rem;
    								float: left;
    								text-align: center;
    								line-height: .18rem;
    								color: #f04042;
    								font-size: .12rem;
    								border: 0.01rem solid #f04042;
    								border-radius: .02rem;
    						}
    					}
    					.con{
    						width: 100%;
   							overflow: hidden;
   							margin-top: .1rem;
   							.text{
   								color: #333;
    							word-break: break-all;
    							font-size: .13rem;
    							line-height:0.2rem;
    							text-align: justify;
    							width: 100%;
   							}
   							.pic{
   								width:100%;
   								margin-top:0.05rem;
   								height:0.6rem;
   								a{
   									float:left;
   									display:block;
   									width:0.6rem;
   									height:0.6rem;
   									margin-right:0.03rem;
   									img{
   										display:block;
   										width:100%;
   										height:100%;
   									}
   								}
   							}
    					}
					}
				}
			}
		}
		.bottom{
			width:100%;
			height: .5rem;
    		font-size: .14rem;
    		line-height: .5rem;
    		color: #333;
    		text-align: center;
    		border-top: 0.01rem solid #dcdcdc;
		}
		.end{
			width:100%;
			height: .5rem;
    		line-height: .5rem;
    		color: #a9a9a9;
    		font-size: .12rem;
    		text-align: center;
    		background:#e8e8e8;
    		margin-bottom:0.5rem;
		}
	}
</style>