<template>
	<div class="login">
		<div class="wrapper">
			<div class="logo">
				<router-link to="/home"></router-link>
			</div>
			<div class="outer-box">
				<div class="inner-box">
					<form id="login-form" method="post">
						<input type="text" class="user" placeholder="手机/邮箱/用户名" maxlength="11"  v-model="name"/>
						<input type="password" class="password" placeholder="密码" maxlength="20" v-model="password"/>
						<div class="auto">
							<div class="auto-login">
								<input type="checkbox" class="check"/>两周内自动登录
							</div>
							<div class="link">
								<a href="javascript:;">忘记密码？</a>
							</div>
						</div>
						<div class="btn" @click="handleClick">
							<a href="javascript:;" class="submit-btn">登录</a>
						</div>
					</form>
					<div class="link-btn">
						<router-link to="/register">注册vivo账号</router-link>
					</div>
					<div class="third-btn">
						<div class="text">其它方式登录</div>
						<div class="link-box">
							<div class="box">
								<a href="javascript:;" v-for="data in linklist">
								<img :src="data.url"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<div class="copyright">
				COPYRIGHT © 1996-2017  ALL
			RIGHTS RESERVED.粤ICP备05100288号
			</div>
		</footer>
	</div>
</template>

<script>
import router from '../router'
export default {

  name: 'login',

  data () {
    return {
    	linklist:[
    		{
    			url:'https://passport.vivo.com.cn/web/images/qq.png?v=201700901810final'
    		},
    		{
    			url:'https://passport.vivo.com.cn/web/images/qq.png?v=201700901810final'
    		},
    		{
    			url:'https://passport.vivo.com.cn/web/images/qq.png?v=201700901810final'
    		},
    		{
    			url:'https://passport.vivo.com.cn/web/images/qq.png?v=201700901810final'
    		}
    	],
    	name:'',
    	password:''
    }
  },

  methods:{
  	handleClick(){
  		axios.post('/api/login',{
  			user:this.name,
  			password:this.password
  		}).then(res=>{
  			if(res.data){
  				localStorage.setItem("name",this.name);
  				alert("登录成功")
  				router.push('/home')
  			}else{
  				alert("用户名/密码不正确")
  			}
  		})
  	}
  }
};
</script>

<style lang="scss" scoped>
	.login{
		position:absolute;
		top:0;
		z-index:299;
		background:#fff;
		width:100%;
		.wrapper{
			width:100%;
			height:4.8rem;
			.logo{
				width:100%;
				height:0.27rem;
				margin-top:0.2rem;
				padding-bottom:0.3rem;
				a{
					background:url("https://passport.vivo.com.cn/web/images/vivo-logo.jpg") no-repeat center;
					background-size:contain;
					display:block;
					width:1rem;
					height:0.27rem;
					margin:0 auto;
				}
			}
			.outer-box{
				width:100%;
				height:3.56rem;
				padding-top:0.3rem;
				.inner-box{
					width:100%;
					height:3.56rem;
					padding:0 0.27rem;
					box-sizing: border-box;
					form{
						width:100%;
						height:2.12rem;
						input{
							width:100%;
							height:0.43rem;
							line-height:0.43rem;
							font-size:0.14rem;
							text-indent:0.1rem;
							margin-bottom:0.15rem;
							outline:none;
							border:1px solid #e1e1e1;
							float:left;
						}
						.auto{
							width:100%;
							height:0.13rem;
							line-height:0.13rem;
							padding-top:0.15rem;
							.auto-login{
								width:1.08rem;
								height:0.13rem;
								float:left;
								font-size:0.12rem;
								color:#666;
								.check{
									width:0.13rem;
									height:0.13rem;
									margin-right:0.1rem;
									margin-bottom:0;
								}
							}
							.link{
								width:0.6rem;
								height:0.13rem;
								line-height:0.13rem;
								float:right;
								a{
									float:right;
									color:#666;
									font-size:0.12rem;
								}
							}
						}
						.btn{
						width:100%;
						height:0.43rem;
						margin-top:0.25rem;
						background:#2899f7;
						float:left;
							.submit-btn{
								display:block;
								width:100%;
								line-height:0.43rem;
								font-size:0.16rem;
								color:#fff;
								background:#2899f7;
								text-align:center;
								border:0.01rem solid #ccc;
							}
						}
					}
					.link-btn{
						width:100%;
						height:0.45rem;
						margin-top:0.16rem;
						text-align:center;
						line-height:0.45rem;
						font-size:0.16rem;
						border:0.01rem solid #ccc;
						a{
							display:block;
							width:100%;
							height:0.45rem;
							color:#666;
						}
					}
					.third-btn{
						width:100%;
						height:0.53rem;
						margin-top:0.3rem;
						.text{
							width:100%;
							height:0.12rem;
							font-size:0.12rem;
							line-height:0.12rem;
							margin-bottom:0.15rem;
							text-align:center;
							color:#999;
						}
						.link-box{
							width:3.11rem;
							height:0.26rem;
							margin-left:0.1rem;
							box-sizing:border-box;
							.box{
								width:1.9rem;
								height:0.26rem;
								margin:0 auto;
							a{
								display: inline-block;
								float:left;
    							margin:0  0.1rem;
    							width: 0.26rem;
    							height: 0.26rem;
    							img{
    								display:inline-block;
    								float:left;
    								width:0.26rem;
    								height:0.26rem;
    							}
							}
							}
						}
					}
				}
			}
		}
		footer{
			width:100%;
			height:0.32rem;
			padding:0.4rem 0;
			.copyright{
				width:100%;
				height:0.32rem;
				text-align:center;
				font-size:0.08rem;
				color:#9d9d9d;
			}
		}
	}
</style>