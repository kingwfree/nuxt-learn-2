<template>
  <div>
    我是search
    <ul>
      <!-- <li v-for="(item,index) in list" :key="index" >{{item}}</li> -->
      <li v-for="(item,index) in $store.state.list" :key="index" >{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in $store.state.navbar.app" :key="index" >{{item}}</li>
    </ul>
    <button @click="btn1"> add456 </button>
    <button @click="btn2"> add789 </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout:'search',
  data(){
    return {
      list:[]
    }
  },
  methods:{
    btn1(){
      this.$store.commit("navbar/add",456)
    },
    btn2(){
      this.$store.commit("add",789)
    }
  },
  /**
   *
   * 源码中不会更新，但是数据会渲染到页面上
   *
   * */
  // async mounted(){
  //   let self = this;
  //   let {status,data:{list}} = await axios.get('/city/list')
  //   if(status === 200){
  //     self.list = list;
  //   }
  //   //console.log(await axios.get('/city/list'))
  // },

  /**
   *
   * 源码中会更新，数据也会渲染到页面上
   *
   * 服务器端把编译好的内容下发
   * 把异步获取到的数据也同时发给浏览器端
   * */
  async asyncData(){
    let {status,data:{list}} = await axios.get('http://localhost:3000/city/list')
    if(status === 200){
      return {
        list
      }
    }
    //console.log(await axios.get('/city/list'))
  }
}
</script>

