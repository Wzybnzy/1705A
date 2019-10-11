<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in bannerList"
          :key="index"
        >
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
    <div class="scroll">
      <div>
        <Item v-for="(item, index) in list" :key="index" :item="item" />
        <div class="pullUp" v-if="show">---我是有底线的---</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { banner, shop } from "@/api/api";
import Item from "@/components/item.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bannerList: [],
      list: [],
      pageid: 0, //页码
      limit: 10,
      show: false //是否有数据
    };
  },
  components: {
    Item
  },
  async created() {
    let res = await banner(); //获取banner

    this.bannerList = res.data.data;
    this.getList();
    console.log(this.list);
    this.$nextTick(() => {
      new Swiper(".swiper-container");
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      this.myScroll = new BScroll(".scroll", {
        pullDownRefresh: {
          //下拉刷新
          threshold: 50
        },
        pullUpLoad: {
          //上拉加载
          threshold: -50
        }
      });

      this.myScroll.on("pullingUp", () => {
        console.log("上拉加载");
        this.pageid++;
        //发起请求
        if (!this.show) {
          this.getList();
        }
      });
      this.myScroll.on("pullingDown", () => {
        console.log("下拉刷新");
        this.pageid = 0; //初始化页码
        this.show = false; //初始化是否加载数据
        this.list = [];
        this.getList();
      });
    },
    async getList() {
      let shoplist = await shop({ pageid: this.pageid, limit: this.limit }); //返回值
      this.list = this.list.concat(shoplist.data.data);

      //判断
      if (shoplist.data.data.length < 10) {
        console.log("么有数据");
        this.show = true;
      }

      this.myScroll.refresh();
      this.myScroll.finishPullUp(); //上拉加载完成之后要调用一下此方法
      this.myScroll.finishPullDown(); //下拉刷新完成之后要调用一下此方法
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
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
.scroll {
  flex: 1;
  overflow: hidden;
}
.pullUp {
  height: 44px;
  width: 100%;
  background: #ccc;
  line-height: 44px;
  text-align: center;
}
</style>