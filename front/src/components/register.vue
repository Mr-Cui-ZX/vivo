<template>
	<div class="register">
		<div class="layout">
			<div class="frame">
				<div class="title">
					<h4>vivo账号注册</h4>
				</div>
				<div class="outer-box">
					<div class="inner-box">
						<div class="phone">
							<input type="text" placeholder="请输入手机号" class="user" v-model="name" maxlength="11" />
							<input type="password" placeholder="请输入密码" class="password" v-model="code" maxlength="20" />
							<input type="password" placeholder="请再次输入密码" class="confirm-password" v-model="repassword" maxlength="20" />
							<label class="input">
								<input type="text" placeholder="验证码" class="code"/>
								<span>1234</span>
							</label>
							<label class="check">
								<input type="checkbox" class="choose"/>
								<p>我已阅读并接受 
								<a href="javascript:;" class="protocal">《vivo服务协议》</a>
								</p>
							</label>
							<div class="link-btn" @click="handleClick">
								<a href="javascript:;">立即注册</a>
							</div>
							<div class="method-link">
								<a href="javascript:;">邮箱注册</a>
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
import router from '../router';
export default {

  name: 'reigster',

  data () {
    return {
    	name:'',
    	code:'',
    	repassword:''
    };
  },

  methods:{
  	handleClick(){
    	if(checkUser(this.name)===true && checkPw(this.code,this.repassword)===true){
    		axios.post('/api/register',{
    			user:this.name,
    			password:this.code,
    		}).then(res=>{
  			if(res.data){
  				alert("注册成功");
  				router.push("/login");
  			}
  			else{
  				alert("该用户名已被注册");
  			}
  			})
    	}	

    	function checkUser(name){
    	if (name === '') {
       	alert("用户名不能为空");
       	return false;
    	}
   	 	else if (!(/^1(3|4|5|7|8)\d{9}$/.test(name))) {
       	alert("用户名为11位手机号");
       	return false;
    	}
    	else {
    	   	return true;
    	}
		}
    	function checkPw(code,repassword){
    	if(code===''){
    	    alert("密码不能为空");
    	    return false;
    	}
    	else if(!(/^(?!\d+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(code))){
    	    alert("密码为6到12位，英文+数字");
    	    return false;
    	}
    	else if(!(code===repassword)){
    	    alert("密码前后不一致");
    	    return false;
    	}
    	else{
    	    return true;
    	}
    	}
		}
  		
  	}
  }
</script>

<style lang="scss" scoped>
	.register{
		width:100%;
		height:5rem;
		position:absolute;
		top:0;
		z-index:299;
		background:#fff;
		.layout{
			width:100%;
			height:100%;
			box-sizing: border-box;
			padding-top:0.7rem;
			margin-bottom: 0.1px;
			.frame{
				width:100%;
				height:100%;
				padding-bottom:0.3rem;
				box-sizing:border-box;
				.title{
					width:100%;
					height:0.18rem;
					padding-top:0.26rem;
					line-height:0.18rem;
					text-align:center;
					h4{
						font-size:0.18rem;
						color:#333;
						font-weight: normal;
					}
				}
				.outer-box{
					width:100%;
					height:2.95rem;
					padding-top:0.55rem;
					box-sizing: border-box;
					.inner-box{
						width:100%;
						height:2.4rem;
						padding:0 7%;
						box-sizing: border-box;
						.phone{
							width:100%;
							height:100%;
							input{
								width:100%;
								outline:none;
								border:0.01rem solid #e1e1e1;
								box-sizing: border-box;
								height:0.35rem;
								line-height:0.35rem;
								margin-bottom:0.1rem;
								font-size:0.14rem;
								text-indent:0.14rem;
								float:left;
							}
							.input{
								width:100%;
								height:0.35rem;
								line-height:0.35rem;
								.code{
									width:72%;
								}
								span{
									float:right;
									width:26%;
									text-align:center;
									border:1px solid #e1e1e1;
									box-sizing: border-box;
									height:0.35rem;
									line-height:0.35rem;
									font-size:0.14rem;
									color:#333;
									}
							}
							.check{
								width:100%;
								height:0.16rem;
								margin-top:0.1rem;
								float:left;
								input{
									width:0.14rem;
									height:0.14rem;
									margin-bottom:0;
									margin-right:0.1rem;
								}
								p{
									font-size:0.12rem;
									color:#666;
									a{
										color:#666;
									}
								}
							}
							.link-btn{
								width:100%;
								height:0.45rem;
								line-height:0.45rem;
								margin-top:0.1rem;
								float:left;
								box-sizing: border-box;
								a{
									display:block;
									width:100%;
									height:0.45rem;
									line-height:0.45rem;
									background:#2899f7;
									color:#fff;
									text-align:center;
									font-size:0.16rem;
								}
							}
							.method-link{
								width:100%;
								height:0.2rem;
								line-height:0.2rem;
								margin-top: 0.1rem;
								box-sizing: border-box;
								float:left;
								a{
									width:0.6rem;
									height:0.2rem;
									line-height: 0.2rem;
									color:#666;
									font-size:0.15rem;
									float:right;
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