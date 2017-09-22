<template>
  <div id="app">
    <navbar v-model="isTrue"  @event="handleClick1" @event2="handleClick2"></navbar>
    <leftside v-model="isTrue"></leftside>
    <rightside :show="isFalse" @event2="handleClick2"></rightside>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar';
import leftside from './components/leftside';
import rightside from './components/rightside';
export default {
  name: 'app',

  data(){
    return{
      isTrue:false,
      isFalse:false
    }
  },

  methods:{
    handleClick1(){
      this.isFalse=false;
    },

    handleClick2(){
      this.isFalse=!this.isFalse;
      this.isTrue=false;
    }

  },

  components:{
    navbar,
    leftside,
    rightside
  }
}
</script>
<style lang="scss">
  *{
    padding:0;
    margin:0;
  }
  html,body{
    width:100%;
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
