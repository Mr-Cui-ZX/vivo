<template>
	<div id="detail">
		<navhead v-model="isShow" :show="isHide" :hide="isshow" @event="handleClick(isHide,isshow)"></navhead>
		<right v-model="isShow"></right>
		<lists v-show="isHide" :data1="list1" :data2="list2" :data4="list4"></lists>
		<goods v-show="isshow" :data3="list3"></goods>
    <div class="bottom">
        <div class="left">
          <a href="javascript:;" class="collection"></a>
          <a href="javascript:;" class="kf"></a>
          <router-link to="/cart" class="cart"></router-link>
          <i class="number" v-show="isNum"></i>
        </div>
        <div class="right">
          <a href="javascript:;" class="add" @click="addClick">加入购物车</a>
          <router-link to="/cart" class="buynow">立即购买</router-link>
        </div>
    </div>
	</div>
</template>

<script>
import navhead from "./nav";
import right from "./right";
import lists from "./lists";
import goods from "./goods";
import router from "../router";
export default {

  name: 'detail',

  data () {
    return {
    isShow:false,
    isHide:true,
    isshow:false,
    isNum:false,
      list1:[],
      list2:[],
      list3:[],
      list4:[],
      numberlist:[]
    };
  },
  components:{
  	navhead,
  	right,
  	lists,
  	goods
  },

  methods:{
  	handleClick(one,two){
     this.isHide=!one;
     this.isshow=!two;
  	},
    addClick(){
      axios.post("/api/cart",{
          id:this.list4.id,
          name:this.list4.name,
          currentprice:this.list4.currentprice,
          price:this.list4.price,
          number:1,
          url:this.list4.url,
          tel:localStorage.getItem("name")
      }).then(res=>{
        if(res.data){
          alert("成功加入购物车");
        }
        else{
          alert("您还没有登录，请先登录");
          router.push('/login');
        }
      })
      var numbers=document.querySelector(".number");
      var now=numbers.innerHTML;
      now++;
      if(now>0){
        this.isNum=true;
      }
      numbers.innerHTML=now;
    }
  },
// data:[
        //     {
        //       swipelist:[
        //           {
        //             id:'401',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_530x530.png"
        //           },
        //           {
        //             id:'402',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499926835203hd_530x530.png"
        //           },
        //           {
        //             id:'403',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499926835926hd_530x530.png"
        //           },
        //           {
        //             id:'404',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928443653hd_530x530.png"
        //           },
        //           {
        //             id:'405',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png"
        //           },
        //           {
        //             id:'406',
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499926833895hd_530x530.png"
        //           },
        //       ]
        //     },
        //     {
        //       wordlist:[
        //           {
        //             id:"301",
        //             time:"2017-08-20",
        //             name:"只***1",
        //             text:"非常感谢vivo公司发的顺丰快递，vivox9s这款手机，就我个人觉得，非常大众化，不仅价格实惠，实现了低价高配，“2000万柔光双摄，照亮你的美”广告词打的很合适，一点也不夸张 vivo的品牌智能手机还是比其他的要给力点，不仅更耐用，而且更实惠，功能其全，新增了应用分身，分屏多任务，儿童模式等贴心功能，vivoX9S值得你 送了很多东西  碎屏保也一年保护20块钱不到 期待用下去会更好。期待中.",
        //             url:[
        //                 {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //                 }
        //                 ]
        //           },
        //           {
        //             id:"302",
        //             time:"2017-08-19",
        //             name:"丁***1",
        //             text:"非常感谢vivo公司发的顺丰快递，vivox9s这款手机，就我个人觉得，非常大众化，不仅价格实惠，实现了低价高配，“2000万柔光双摄，照亮你的美”广告词打的很合适，一点也不夸张 vivo的品牌智能手机还是比其他的要给力点，不仅更耐用，而且更实惠，功能其全，新增了应用分身，分屏多任务，儿童模式等贴心功能，vivoX9S值得你 送了很多东西  碎屏保也一年保护20块钱不到 期待用下去会更好。期待中.",
        //             url:[
        //                 {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //                 },
        //                 {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //                 },
        //                 {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //                 }
        //                 ]
        //           },
        //           {
        //             id:"303",
        //             time:"2017-08-18",
        //             name:"丁***2",
        //             text:"非常感谢vivo公司发的顺丰快递，vivox9s这款手机，就我个人觉得，非常大众化，不仅价格实惠，实现了低价高配，“2000万柔光双摄，照亮你的美”广告词打的很合适，一点也不夸张 vivo的品牌智能手机还是比其他的要给力点，不仅更耐用，而且更实惠，功能其全，新增了应用分身，分屏多任务，儿童模式等贴心功能，vivoX9S值得你 送了很多东西  碎屏保也一年保护20块钱不到 期待用下去会更好。期待中.",
        //             url:[
        //             {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //             },
        //             {path:"https://swsdl.vivo.com.cn/vivoshop/remark/20170820/20/17/47/1708207306771789_7675929_100x100.jpg"
        //             }
        //             ]
        //           }
        //       ]
        //     },
        //     {
        //       imglist:[
        //           {
        //             id:"501",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170908/20170908152449856376_original.jpg"
        //           },
        //           {
        //             id:"502",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142326838206_original.jpg"
        //           },
        //           {
        //             id:"503",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142328979216_original.jpg"
        //           },
        //           {
        //             id:"504",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142330845115_original.jpg"
        //           },
        //           {
        //             id:"505",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170810/20170810100746200599_original.jpg"
        //           },
        //           {
        //             id:"506",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142336316225_original.jpg"
        //           },
        //           {
        //             id:"507",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170810/20170810120228317855_original.jpg"
        //           },
        //           {
        //             id:"508",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142341737276_original.jpg"
        //           },
        //           {
        //             id:"509",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142345253653_original.jpg"
        //           },
        //           {
        //             id:"510",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142349522245_original.jpg"
        //           },
        //           {
        //             id:"511",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142353219320_original.jpg"
        //           },
        //           {
        //             id:"512",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170809/20170809155624598529_original.jpg"
        //           },
        //           {
        //             id:"513",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142359618675_original.jpg"
        //           },
        //           {
        //             id:"514",
        //             path:"https://swsdl.vivo.com.cn/vivoshop/commodity/20170706/20170706142402916135_original.jpg"
        //           }
        //       ]
        //     },
        //     {
        
        //       detaillist:[
        //         {
        //           id:"1",
        //           name:"【直降200】X9s 全网通",
        //           des:"【9月12日0点起直降200】全新升级，2000W柔光自拍照亮你的美！",
        //           currentprice:"2498",
        //           price:"2698",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4366_1499928404613hd_250x250.png"
        //         },
        //         {
        //           id:"2",
        //           name:"X9s Plus全网通",
        //           des:"【花呗免息12期分期】5.85英寸大屏+双引擎闪充+4015mAh大电池！",
        //           currentprice:"2798",
        //           price:"2998",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/58/4358_1499309360512hd_250x250.png"
        //         },
        //         {
        //           id:"3",
        //           name:"X9全网通 64G版",
        //           des:"【花呗免息12期免息】2000W*柔光双摄，照亮你的美！4GB+64GB，指纹解锁，5.5英寸大屏大电池闪充手机！",
        //           currentprice:"2398",
        //           price:"2598",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/49/4349_1497943198507hd_250x250.png"
        //         },
        //         {
        //           id:"4",
        //           name:"Y66 全网通",
        //           des:"【性价比推荐】3G运存+32G内存，5.5英寸高清大屏。",
        //           currentprice:"1298",
        //           price:"1498",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/01/4301_1496901758028hd_250x250.png"
        //         },
        //         {
        //           id:"5",
        //           name:"Y67 全网通 64G高配版",
        //           des:"4G运存+64G内存，1600W柔光自拍，照亮你的美！",
        //           currentprice:"1998",
        //           price:"2198",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/50/4350_1498034509043hd_250x250.png"
        //         },
        //         {
        //           id:"6",
        //           name:"Xplay6 全网通64G版",
        //           des:"全曲面设计，后置双摄，高通骁龙820处理器，6GB运存+64GB存储，4080mAh大电池",
        //           currentprice:"3998",
        //           price:"4198",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/78/4178_1496689626985hd_250x250.png"
        //         },
        //         {
        //           id:"7",
        //           name:"Y67A 全网通 32G版",
        //           des:"4G运存+32G内存，1600W柔光自拍，正面指纹解锁，3000mAh大电池",
        //           currentprice:"4498",
        //           price:"4698",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/23/4323_1496689864047hd_250x250.png"
        //         },
        //         {
        //           id:"8",
        //           name:"Xplay6 全网通 128G版",
        //           des:"全曲面设计，后置双摄，专业虚化，4080mAh大电池+双引擎闪充。",
        //           currentprice:"4498",
        //           price:"4698",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/66/4266_1496689781362hd_250x250.png"
        //         },
        //         {
        //           id:"9",
        //           name:"Y55 全网通",
        //           des:"高通八核处理器，大屏美颜自拍。",
        //           currentprice:"1098",
        //           price:"1298",
        //           url:"https://swsdl.vivo.com.cn/vivoshop/commodity/11/4111_1492998667334hd_250x250.png"
        //         }
        //       ]
        //     }
        // ]
  mounted(){
    axios.get("/api/detail").then(res=>{
      this.list1=res.data[0].data[0].swipelist;
      this.list2=res.data[0].data[1].wordlist;
      this.list3=res.data[0].data[2].imglist;
      this.list4=res.data[0].data[3].detaillist[`${this.$route.params.testid}`-1];
    })

    var numbers=document.querySelector(".number");
    axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
                this.numberlist=res.data;
                var num=0;
                var sum=0;
                for(var i=0;i<this.numberlist.length;i++){
                    num=this.numberlist[i].number;
                    sum+=num;
                }
                if(sum>0){
                    this.isNum=true;
                }
                numbers.innerHTML=sum;
            })
  }
};
</script>

<style lang="scss" scoped>
    #detail{
        width:100%;
        height:100%;
        .bottom{
            width:100%;
            height:0.5rem;
            position:fixed;
            bottom:0;
            left:0;
            background:#fff;
            z-index:299;
            .left{
              width:50%;
              height:0.5rem;
              float:left;
              position:relative;
              a{
                display:block;
                float:left;
                width:30%;
                height:0.5rem;
                line-height: 0.5rem;
              }
              .collection{
                background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-collection_3867d9a.png") no-repeat center center;
                background-size:0.25rem;
              }
              .kf{
                height:0.2rem;
                margin-top:0.15rem;
                box-sizing: border-box;
                background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-concat_5a9b3bd.png") no-repeat center center;
                background-size:contain;
                border-left:0.01rem solid #e0e0e0;
                border-right:0.01rem solid #e0e0e0;
              }
              .cart{
                background:url("https://swsdl.vivo.com.cn/vivoshop/wap/dist/images/common/icon-shoppingcart_675842c.png") no-repeat center center;
                background-size:0.22rem;
              }
              .number{
                    font-style:normal;
                    position: absolute;
                    right: .3rem;
                    top: .08rem;
                    height: .14rem;
                    min-width: .14rem;
                    background-color: #f81200;
                    color: #fff;
                    font-size: .14rem;
                    border-radius: .14rem;
                    line-height: .14rem;
                    text-align: center;
              }
            }
            .right{
              width:50%;
              float:left;
              height:0.5rem;
              a{
                display:block;
                float:left;
                width:40%;
                height:0.3rem;
                line-height: 0.3rem;
                border-radius:0.3rem;
                text-align:center;
                color:#fff;
                background:#ff9536;
                font-size:0.12rem;
                margin:0.1rem 5%;
              }
              .buynow{
                background:#f81200;
              }
            }
        }
    }
</style>