<template>
		<div id="contain">
            <div class="squar">
                <a href="javascript:;" v-for="(data,index) in value" :key="data.id" :class="index%2==1?'none':''" @click="idClick(data.id)">
                <img :src="data.url"/>
                <h2>{{data.h2}}</h2>
                <p class="des">{{data.p}}</p>
                <p class="price">￥<b>{{data.price}}</b>.00</p>
                <i class="icon">
                    <img :src="data.bg"/>
                </i>
                </a>
            </div>
		</div>
</template>

<script>
import router from '../router';
export default {

  name: 'contain',

  props:['value'],

  data () {
    return {
 		
    };
  },

  methods:{
    idClick(id){
      router.push(`/detail/${id}`);
    },
    
  	// handleClick(){
  	// 	axios.post("/api/contain",{
  	// 	data:[	
  	// 		{
  	// 		one:[
   //  		{
   //  			id:"1",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"【直降200】X9s 全网通",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"2498",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"2",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"X9s Plus全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"2798",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"3",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"X9全网通 64G版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"2398",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"4",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Y66 全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"1298",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"5",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"Y67 全网通 64G高配版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"1998",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"6",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Xplay6 全网通64G版",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"3998",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"7",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"Y67A 全网通 32G版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"1798",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"8",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Xplay6 全网通 128G版",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"4498",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"9",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Y55 全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"1098",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		}
   //  		]
   //  		},
   //  		{
   //  		one:[
   //  			{
   //  				id:"6",
   //  				url:"https://swsdl.vivo.com.cn/vivoshop/commodity/23/4323_1496689864047hd_250x250.png",
   //  				h2:"Xplay6 全网通64G版",
   //  				p:"全曲面设计，后置双摄，高通骁龙820处理器，6GB运存+64GB存储，4080mAh大电池",
   //  				price:"3998",
   //  				bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  			},
   //  			{
   //  				id:"8",
   //  				url:"https://swsdl.vivo.com.cn/vivoshop/commodity/23/4323_1496689864047hd_250x250.png",
   //  				h2:"Xplay6 全网通128G版",
   //  				p:"全曲面设计，后置双摄，高通骁龙820处理器，6GB运存+64GB存储，4080mAh大电池",
   //  				price:"4498",
   //  				bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  			}
   //  		]
   //  		},
   //  		{
   //  		one:[
   //  		{
   //  			id:"1",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"【直降200】X9s 全网通",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"2498",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"2",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"X9s Plus全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"2798",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"3",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"X9全网通 64G版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"2398",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		}
   //  		]
   //  		},
   //  		{
   //  		one:[
   //  			{
   //  			id:"4",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Y66 全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"1298",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		},
   //  		{
   //  			id:"5",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"Y67 全网通 64G高配版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"1998",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"7",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png",
   //  			h2:"Y67A 全网通 32G版",
   //  			p:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
   //  			price:"1798",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083293735357_250x250.png"
   //  		},
   //  		{
   //  			id:"9",
   //  			url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png",
   //  			h2:"Y55 全网通",
   //  			p:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
   //  			price:"1098",
   //  			bg:"https://swsdl.vivo.com.cn/vivoshop/corner/20170708/1707083302813675_250x250.png"
   //  		}
   //  		]},
   //  	]
  	// 	}).then(res=>{
  	// 		if(res.data){
  	// 			console.log(true)
  	// 		}else{
  	// 			console.log(false)
  	// 		}
  	// 	})
  	// }
  },
};
</script>

<style lang="scss" scoped>
	#contain{
		width:3.75rem;
        float:left;
        padding-top:0.4rem;
		a{
			display:block;
			float:left;
			padding-top:0.28rem;
			box-sizing: border-box;
			width:50%;
			height:2.5rem;
			border-bottom:0.01rem solid #dfdfdf;
			border-right:0.01rem solid #dfdfdf;
			position:relative;
			img{
				display:block;
				width:1.05rem;
				height:1.05rem;
				margin:0 auto;
			}
			h2{
				width:1.65rem;
				height:0.2rem;
				margin:0.16rem 0.1rem 0.07rem;
				font-size:0.14rem;
				text-align: center;
				line-height:0.2rem;
				color:#333;
				white-space: nowrap;
				text-overflow:ellipsis;
				font-weight:700;
				overflow:hidden;
			}
			.des{
				width:1.45rem;
				height:0.3rem;
				margin:0 auto;
				font-size:0.12rem;
				text-align: center;
				color:#000;
				word-break: break-all;
				overflow:hidden;
			}
			.price{
				width:100%;
				height:0.2rem;
				position:absolute;
				left:0;
				bottom:0.1rem;
				font-size: .14rem;
    			color: #f81300;
    			text-align: center;
    			b{
    				font-weight:normal;
    			}
			}
			.icon{
				display:block;
				width:0.32rem;
				height:0.32rem;
				position:absolute;
				top:0.2rem;
				right:0.4rem;
				img{
					display:block;
					width:0.32rem;
					height:0.32rem;
				}
			}
		},
		.none{
			border-right:0;
		}
	}
</style>