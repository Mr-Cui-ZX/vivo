<template>
	<div id="home">
		<swipe class="my-swipe">
  			<swipe-item class="slide1" v-for="data in swipelist" :key="data.id">
  				<img :src='data.path'/>
  			</swipe-item>
		</swipe>
		<div class="main">
			<ul>
				<li v-for="data in mainlist" :key="data.id">
					<div class="title">
						<h2>{{data.h2}}</h2>
						<p>{{data.p}}</p>
					</div>
					<i><img :src="data.path"/></i>
				</li>
			</ul>
		</div>
		<bottom></bottom>
		<gotop></gotop>
	</div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import bottom from './bottom';
import gotop from './gotop';
export default {

  name: 'home',

  data () {
    return {
    	swipelist:[],
    	mainlist:[]
    };
  },

  mounted(){
  	axios.get("/api/home").then(res=>{
  		this.swipelist=res.data[0].swipe;
  		this.mainlist=res.data[0].main
  	})
  },
  components:{
  	'swipe': Swipe,
    'swipe-item': SwipeItem,
    bottom,
    gotop
  }
};
</script>

<style lang="scss" scoped>
	img{
		width:100%;
		height:100%;
	}
	#home{
		padding-top:0.55rem;
		.my-swipe {
  		color: #fff;
  		height:5rem;
  		font-size: 0.3rem;
  		text-align: center;
		}
		.main{
			width:100%;
			height:10rem;
			ul{
				width:100%;
				height:100%;
				li{
					position:relative;
					width:100%;
					height:2.4rem;
					margin-top:0.1rem;
					.title{
						position:absolute;
						top:0.2rem;
						left:0;
						width:100%;
						height:0.53rem;
						z-index:2;
						text-align:center;
						h2{
							font-size:0.16rem;
							font-weight:500;
							color:#333;
						}
						p{
							font-size:0.14rem;
							padding-top:0.1rem;
							color:#333;
						}
					}
					i{
						position: absolute;
						top:0;
    					display: block;
    					width: 100%;
    					height: 100%;
    					left: 0;
    					text-align: center;
    					z-index: 1;
					}
				}
			}
		}
	}
</style>