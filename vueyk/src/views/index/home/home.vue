<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list" :key="index">
          <img :src="require('@/assets/' + item.img)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
// import axios from "axios";
import "@/mock/index";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    // console.log(Swiper);
    this.$http.get("/api/banner").then(res => {
      console.log(res);
      this.list = res.data;
      this.$nextTick(()=>{
        new Swiper(".swiper-container");
      })
    });
  }
};
</script>

<style>
.swiper-container {
  height: 200px;
  width: 100%;
}
.swiper-wrapper,
.swiper-slide,
img {
  height: 100%;
  width: 100%;
}
</style>