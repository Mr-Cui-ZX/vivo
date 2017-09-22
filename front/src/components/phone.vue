<template>
	<div id="phone">
		<bar v-model="isShow"></bar>
		<right v-model="isShow"></right>
		<main>
			<div class="category">
				<a href="javascript:void(0)" :key="data.id" @click="handleClick(index)" v-for="(data,index) in datalist" class="style" :class="id==index?'blue':'' ">
				<span>{{data.text}}</span>
				</a>
			</div>
			<div class="mod">
				<div class="features">
					<a href="javascript:;">综合排序</a>
					<a href="javascript:;">价格<i class="up"></i></a>
					<a href="javascript:;">上架时间<i class="up"></i></a>
					<a href="javascript:;"><i class="down"></i>只看有货</a>	
				</div>
			</div>
			<contain v-model="childlist"></contain>
		</main>
		<div class="bot">已经到底了</div>
		<footer>
			<div class="list">
				<a href="javascript:;">特色服务</a>
				<a href="javascript:;">客服QQ</a>
				<router-link to="/login">登录/注册</router-link>
				<router-link to="/phone">选购手机</router-link>
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
import router from '../router';
import bar from "./bar";
import right from "./right";
import contain from "./contain";
import gocart from './gocart';
import gotop from './gotop';
export default {

  name: 'phone',

  data () {
    return {
    	isShow:false,
    	id:0,
    	childlist:[],
    	datalist:[
    		{
    			id:"1",
    			text:"全部"
    		},
    		{
    			id:"2",
    			text:"Xplay系列"
    		},
    		{
    			id:"3",
    			text:"X系列",
    		},
    		{
    			id:"4",
    			text:"Y系列"
    		}
    	]
    };
  },
  components:{
  	bar,
  	right,
  	contain,
  	gocart,
  	gotop
  },

  methods:{
  	handleClick(index){
  		this.id=index;
  		axios.get("/api/contain").then(res=>{
  		this.childlist=res.data[0].data[this.id].one;
  		})
  	}
  },

   mounted(){
  	axios.get("/api/contain").then(res=>{
  		console.log(res.data);
  		this.childlist=res.data[0].data[this.id].one;
  	})
  },
  //  updated(){
  // 		axios.get("/api/contain").then(res=>{
  // 		this.childlist=res.data[0].data[this.id].one;
  // 		})
  // }
};
</script>

<style lang="scss" scoped>
	#phone{
		width:100%;
		main{
			width:100%;
			height:100%;
			min-height:5rem;
			padding-top:0.55rem;
			.category{
				width:100%;
				height:0.5rem;
				position:fixed;
				top:0.55rem;
				left:0;
				z-index:199;
				background:#fff;
				.style{
					display:inline-block;
					width:25%;
					height:0.5rem;
					line-height:0.5rem;
					color:#333;
					text-align: center;
					font-size:0.16rem;
					float:left;
					span{
						display:inline-block;
						height:0.5rem;
						height:0.5rem;
						border-bottom:0.03rem solid #fff;
						box-sizing: border-box;
					}
				}
				.blue{
					color:#00acff;
					span{
						border-bottom:0.03rem solid #00acff;
					}
				}
			}
			.mod{
				width:100%;
				height:0.4rem;
				margin-top:0.5rem;
				float:left;
				box-sizing: border-box;
				background:#f8f8f8;
				.features{
					width:100%;
					height:0.4rem;
					padding:0 0.15rem;
					box-sizing: border-box;
					a{
						display:inline-block;
						position:relative;
						width:25%;
						height:0.4rem;
						line-height:0.4rem;
						text-align: center;
						color:#888;
						float:left;
						flex:1;
						font-size:0.14rem;
						.up{
							display:block;
							position:absolute;
							right:0.08rem;
							top:0.18rem;
							width:0.05rem;
							height:0.08rem;
							background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/order-type_3784c9e.png") no-repeat left top;
							background-size:100%;
						}
						.down{
							display: block;
							position:absolute;
							top:0.16rem;
							left:0.05rem;
							float:left;
    						width: .1rem;
    						height: .1rem;
    						background: url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/	common/filter-checkbox_e2b7705.png") left top no-repeat;
    						background-size: 100%;
							}
					}
					a:nth-of-type(1){
						color:#000;
					}
					a:nth-of-type(2){
						.up{
							right:0.2rem;
						}
					}
				}
			}
		}
		.bot{
				float:left;
				border-top:0.01rem solid #dfdfdf;
				width:100%;
				height:0.5rem;
				line-height:0.5rem;
				background:#f8f8f8;
				color:#a9a9a9;
				font-size:0.12rem;
				text-align:center;
			}
		footer{
			width:100%;
			height:1rem;
			background:#000;
			float:left;
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