<template>
	<div class="bottom">
		<div class="list">
			<ul>
				<li>热门链接 <b></b></li>
				<li>在线购买 <b></b></li>
				<li>服务支持 <b></b></li>
				<li>vivo社区 <b></b></li>
				<li>关于vivo <b></b></li>
			</ul>
			<p class="phone">24小时全国服务热线: <span>400-678-9688</span></p>
		</div>
		<div class="copyright">
			<ul>
				<li>国际官网</li>
				<li>关注vivo</li>
			</ul>
			<p>Copyright ©2011-2017 广东步步高电子工业有限公司 版权所有 保留一切权利粤B2-20080267 | 粤ICP备05100288号<img src="https://wwwstatic.vivo.com.cn/vivoportal/web/dist/common_umix/images/gssw-icon-x2_db0a7f6.png"/></p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'bottom',

  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
	.bottom{
		width:100%;
		height:4.12rem;
		padding:0 0.14rem;
		box-sizing:border-box;
		font-size:0.14rem;
		color:#333;
		float:left;
		.list{
			width:100%;
			height:2.56rem;
			font-size:0.14rem;
			padding-top:0.25rem;
			border-top:0.01rem solid #f2f2f2;
			ul{
				width:100%;
				height:1.6rem;
				text-align: left;
				li{
					list-style:none;
					width:100%;
					height:0.32rem;
					line-height:0.32rem;
					position:relative;
					b::before{
						position: absolute;
    					content: '';
    					display: block;
    					width: 0.01rem;
    					height: 0.07rem;
    					background-color: #666;
    					top: 0.13rem;
    					right: 0.03rem;
					}
					b::after{
						position: absolute;
    					content: '';
    					display: block;
    					width: 0.07rem;
    					height: 0.01rem;
    					background-color: #666;
    					top: 0.16rem;
    					right: 0;
					}
				}
			}
			.phone{
				width:100%;
				height:0.7rem;
				line-height:0.7rem;
				margin-top:0.25rem;
				text-align:left;
				span{
					color:#0087cd;
				}
			}
		}
		.copyright{
			width:100%;
			height:0.77rem;
			padding:0.26rem 0;
			font-size:0.12rem;
			ul{
				height:0.4rem;
				line-height:0.4rem;
				li{
					width:0.9rem;
					height:0.4rem;
					float:right;
					text-align:right;
					list-style:none;
				}
			}
			p{
				color:#999;
				font-size:0.12rem;
				position:relative;
				height:0.4rem;
				line-height:0.18rem;
				img{
					width:0.2rem;
					height:0.2rem;
					position:absolute;
					bottom:0;
				}
			}
		}
	}
</style>