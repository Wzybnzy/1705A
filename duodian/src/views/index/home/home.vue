<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
    <div class="scroll">
       <div>
          <Item v-for="(item,index) in list" :key="index" :item="item"/>
       </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { banner,shop } from "@/api/api";
import Item from '@/components/item.vue'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      bannerList: [],
      list:[],
      pageid:0,
      limit:10
    };
  },
  components:{
    Item
  },
  async created() {
    let res = await banner(); //获取banner
    let shoplist = await shop({pageid:this.pageid,limit:this.limit});
    this.bannerList = res.data.data;
    this.list = shoplist.data.data;
    console.log(this.list);
    this.$nextTick(()=>{
      new Swiper('.swiper-container');
      new BScroll('.scroll');
    })
  }
};
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
}
.swiper-container{
  height: 200px;
  width: 100%;
}
.swiper-wrapper,.swiper-slide,img{
  height: 100%;
  width: 100%;
}
.scroll{
  flex: 1;
  overflow: hidden;
}
</style>