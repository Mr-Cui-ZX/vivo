<template>
	<div id="gocart">
		<router-link to="/cart"></router-link>
		<i class="badge" v-show="isShow"></i>
	</div>
</template>

<script>
export default {

  name: 'gocart',

  data () {
    return {
    	isShow:false,
    	numberlist:[]
    };
  },

  mounted(){
  	 var numbers=document.querySelector(".badge");
    axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
                this.numberlist=res.data;
                var num=0;
                var sum=0;
                for(var i=0;i<this.numberlist.length;i++){
                    num=this.numberlist[i].number;
                    sum+=num;
                }
                if(sum>0){
                    this.isShow=true;
                }
                numbers.innerHTML=sum;
            })
  }
};
</script>

<style lang="scss" scoped>
	#gocart{
		width:0.35rem;
		height:0.35rem;
		position:fixed;
		bottom:0.55rem;
		right:0.1rem;
		z-index:19;
		background:rgba(255,255,255,.8);
		border:1px solid #ebebeb;
		border-radius:0.35rem;
		a{
			display:block;
			width:100%;
			height:100%;
			background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/home/bg-sidebar_7abaa02.png") no-repeat 0.07rem 0.1rem;
			background-size:0.2rem 0.5rem;
		}
		.badge{
			position: absolute;
    		right: .03rem;
    		top: 0.02rem;
    		display: block;
    		width: .16rem;
    		height: .16rem;
    		border-radius: 50%;
    		background-color: #ff1f34;
    		font-size: .14rem;
    		line-height: .16rem;
    		text-align: center;
    		color: #fff;
    		font-style:normal;
		}
	}
</style>