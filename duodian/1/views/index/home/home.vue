<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in bannerArr"
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
import BScroll from "better-scroll";
import Item from "@/components/item";
import { banner, homeshop } from "@/api/api";
export default {
  data() {
    return {
      bannerArr: [],
      list: [],
      pageid: 0,
      limit: 10,
      show: false
    };
  },
  components: {
    Item
  },
  async created() {
    let res = await banner();
    console.log("create");
    this.bannerArr = res.data.data;
    this.$nextTick(() => {
      new Swiper(".swiper-container");
      this.init();
      this.getList({ pageid: this.pageid, limit: this.limit }, "pulldown");
    });
  },
  mounted() {
    // this.$nextTick(() => {
    //   new BScroll(".scroll");
    // });
  },
  methods: {
    init() {
      this.myBscroll = new BScroll(".scroll", {
        probeType: 2,
        click:true,
        pullDownRefresh: {
          threshold: 50
        },
        pullUpLoad: {
          threshold: -50
        }
      });
      this.myBscroll.on("pullingUp", res => {
        console.log("上拉加载", res);
        this.pageid++;
        if (!this.show) {
          this.getList({ pageid: this.pageid, limit: this.limit }, "pullup");
        }
      });
      this.myBscroll.on("pullingDown", () => {
        this.pageid = 0;
        this.show = false;
        this.list = [];
        this.getList({ pageid: this.pageid, limit: this.limit }, "pulldown");
      });
    },
    async getList(obj, type) {
      let list = await homeshop(obj);
      console.log(list.data.data.length, type, "list@@@@@@2");
      if (list.data.data.length < this.limit) {
        this.show = true;
      }
      this.list = this.list.concat(list.data.data);
      this.myBscroll.refresh();
      this.myBscroll.finishPullUp();
      this.myBscroll.finishPullDown();
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.scroll {
  flex: 1;
  overflow: hidden;
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
.pullUp {
  height: 50px;
  width: 100%;
  background: #ccc;
  line-height: 50px;
  text-align: center;
}
</style>