<template>
	<div id="cart">
		<bar v-model="isShow"></bar>
		<right v-model="isShow"></right>
		<main>
			<ul class="list">
				<li v-for="(data,index) in cartlist" class="list-item" :key="data.id">
					<div class="wrapper">
						<div class="select-box">
							<input class="icon" type="checkbox"  v-model="checkgroup" @click="handleClick" :value="data"/>
						</div>
						<div class="img-box">
							<a href="javascript:;" class="img">
								<img :src="data.url"/>
							</a>
						</div>
						<div class="info-box">
							<h2>{{data.name}}</h2>
							<p>颜色:玫瑰金</p>
							<p class="price">
								<span class="red">
									<i>￥</i>
									<span>{{data.currentprice}}</span>.00
								</span>
								<b>
									&nbsp;
									<i>￥</i>
									<span>{{data.price}}</span>
								</b>
							</p>
							<div class="delete" @click="deleteClick(index)">
								<a href="javascript:;">
									<img src="https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-delete_b18b164.png"/>
								</a>
							</div>
							<div class="number">
								<button class="mini" @click="mini(index,data.number)">-</button>
								<input type="text" v-model="data.number"/>
								<button class="add" @click="add(index,data.number)">+</button>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</main>
		<section class="total">
			<div class="check">
				<input class="icon" type="checkbox" @click="allClick"/>
				<label>全选</label>
			</div>
			<div class="sum">
				<p class="price">
					合计
					<span class="red">
						<b>￥</b>
						<span class="totalprice">{{computedsum}}</span>.00
					</span>
				</p>
			</div>
			<div class="end">
			去结算
			</div>
		</section>
	</div>
</template>

<script>
import bar from './bar';
import right from './right';
export default {

  name: 'cart',

  data () {
    return {
    	once:"",
    	checkgroup:[],
    	num:"",
    	binggo:"",
    	isShow:false,
    	cartlist:[]
    };
  },
  computed:{
  	computedsum:function(){
  		var total=0;
  		for(var i in this.checkgroup){
  			total+=this.checkgroup[i].number*this.checkgroup[i].currentprice
  		}
  		return total;
  	},

  	// computednum:function(){

  	// }
  },
  methods:{
  	handleClick(){
  		
  	},
  	allClick(){

  	},
  	mini(index,number){
  		number--;
  		if(number<=1){
  			number=1
  		}
  		axios.post("/api/number",{
  			tel:localStorage.getItem("name"),
  			id:this.cartlist[index].id,
  			number:number
  		}).then(res=>{})

  		setTimeout(()=>{
  			axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  			this.cartlist=res.data;
  			})
  		},300)
  	},
  	add(index,number){
  		number++;
  		axios.post("/api/number",{
  			tel:localStorage.getItem("name"),
  			id:this.cartlist[index].id,
  			number:number
  		}).then(res=>{})

  		setTimeout(()=>{
  			axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  			this.cartlist=res.data;
  			})
  		},300)
  	},
  	deleteClick(index){
  		axios.post("/api/delete",{
  			id:this.cartlist[index].id,
  			tel:localStorage.getItem("name")
  		}).then(res=>{
  			if(res.data){
  				alert("删除成功");
  			}else{
  				alert("删除失败");
  			}
  		})

  		setTimeout(()=>{
  			axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  			this.cartlist=res.data;
  			})
  		},300)
  	}
  },

  mounted(){
  			axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  			this.cartlist=res.data;
  			})
  },
  components:{
  	bar,
  	right,
  }
};
</script>

<style lang="scss" scoped>
	#cart{
		width:100%;
		min-height:6rem;
		background:#f8f8f8;
		padding-top:0.55rem;
		main{
			width:100%;
			.list{
				width:100%;
				.list-item{
					width:100%;
					height:1.2rem;
					background:#fff;
					border-bottom:0.01rem solid #e8e8e8;
					padding:0.2rem 0;
					.wrapper{
						float:left;
						width:100%;
						height:100%;
						padding:0 0.15rem;
						box-sizing: border-box;
						.select-box{
							float:left;
							width:0.2rem;
							height:0.2rem;
							margin-top:0.25rem;
							input{
								width:0.2rem;
								height:0.2rem;
								display: inline-block;
    							vertical-align: middle;
    							background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/new-checkbox_62f3ce4.png) 0 bottom no-repeat;
    							background-size:100%;
    							float:left;
							}
						}
						.img-box{
							width:1rem;
							height:0.75rem;
							float:left;
							.img{
								display:block;
								width:0.75rem;
								height:100%;
								margin:0 auto;
								img{
									float:left;
									width:100%;
								}
							}
						}
						.info-box{
							width:2rem;
							height:2rem;
							float:left;
							font-size:0.14rem;
							position:relative;
							h2{
								width:80%;
								height:0.15rem;
								padding-bottom:0.08rem;
								line-height:0.15rem;
								font-size:0.14rem;
								margin-top:0.07rem;
								color:#333;
								white-space: nowrap;
								font-weight: 400;
								text-overflow:ellipsis;
								overflow:hidden;
							}
							p{
								width:100%;
								height:0.15rem;
								line-height: 0.15rem;
								font-size: .12rem;
    							color: #888;
    							margin: 0;
    							padding-bottom: .15rem;
							}
							.price{
								width:100%;
								height:0.15rem;
								line-height: 0.15rem;
								font-size:0.14rem;
								color:#888;
								padding-bottom:0.15rem;
								i{
									font-style: normal;
									font-size:0.12rem;
								}
								.red{
									color:#f81200;
									font-size:0.14rem;
								}
								b{
										margin-left: .14rem;
    									font-size: .12rem;
    									color: #bcbcbc;
    									font-weight:normal;
    									text-decoration: line-through;
								 }
							}
							.delete{
								width:0.27rem;
								height:0.27rem;
								position:absolute;
								top:0.2rem;
								right:-0.2rem;
								a{
									display:inline-block;
									width:100%;
									height:100%;
									img{
										width:100%;
									}
								}
							}
							.number{
								width:100%;
								height:0.25rem;
								button{
									width:0.32rem;
									height:0.27rem;
									outline:none;
									border:0.01rem solid #e8e8e8;
									font-size:0.16rem;
									background:#fff;
									float:left;
								}
								input{
									float:left;
									display: inline-block;
    								box-sizing: border-box;
    								width: .3rem;
    								height: .27rem;
    								font-size: .12rem;
    								color: #333;
    								vertical-align: middle;
    								text-align: center;
    								line-height: .27rem;
    								outline:none;
    								border: 1px solid #dedede;
    								border-left:0;
    								border-right:0;
								}
							}
						}
					}
				}
			}
		}
		.total{
			width:100%;
			height:0.5rem;
			padding-left:0.15rem;
			background:#fff;
			box-sizing: border-box;
			position:fixed;
			bottom:0;
			left:0;
			z-index:299;
			.check{
				width:0.7rem;
				height:0.2rem;
				line-height: 0.2rem;
				padding:0.15rem 0;
				font-size:0.14rem;
				float:left;
				.icon{
					float:left;
					display: block;
   					vertical-align: middle;
   					width: 0.2rem;
   					height:0.2rem;
   					margin-right:0.1rem;
   					line-height:0.15rem;
   					background: url(https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/new-checkbox_62f3ce4.png) 0 bottom no-repeat;
   					background-size:100%;
				}
			}
			.sum{
				width:1.7rem;
				height:0.2rem;
				line-height:0.2rem;
				padding:0.15rem 0;
				font-size:0.14rem;
				float:left;
				.price{
					color:#888;
					.red{
						color:#f81200;
					}
				}
			}
			.end{
				width:1rem;
				margin:0.1rem 0.05rem;
				font-size:0.16rem;
				color:#fff;
				height:0.3rem;
				line-height:0.3rem;
				float:right;
				background:#f81200;
				border-radius:0.3rem;
				text-align:center;
			}
		}
	}
</style>