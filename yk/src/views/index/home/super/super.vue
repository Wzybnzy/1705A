<template>
  <div class="scroll">
    <div>
      <Item v-for="(item, index) in list" :key="index" :item="item" />
      <div v-if="show">---我是有底线的---</div>
    </div>
  </div>
</template>

<script>
import "@/mock/index";
import Item from "@/components/item";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [],
      page: 1,
      limit: 10,
      show: false
    };
  },
  components: {
    Item
  },
  created() {
    this.getList();
    this.$nextTick(() => {
      this.myScroll = new BScroll(".scroll", {
        click:true,
        pullUpLoad: {
          //开启上拉加载
          threshold: -100 //往上拉多少哥距离，才能触发上拉加载的事件
        },
        pullDownRefresh: { //开启下拉
          threshold: 50
        }
      });
      this.myScroll.on("pullingUp", () => {
        //添加上拉事件
        console.log("pullup上拉");
        this.page++;
        if (!this.show) {
          //没有数据就不用再请求
          this.getList();
        }
      });
      this.myScroll.on('pullingDown',()=>{ //所有数据初始化
        this.page = 1;
        this.list = [];
        this.show = false;
        this.getList();
      });
    });
  },
  methods: {
    async getList() {
      let res = await this.$http.post("/api/list", {
        page: this.page,
        limit: this.limit
      });
      console.log(res);
      this.list = this.list.concat(res.data.list);

      if (res.data.list.length < 10) {
        this.show = true;
      }

      this.myScroll.refresh();
      this.myScroll.finishPullUp(); //上拉加载完成之后调用的方法
      this.myScroll.finishPullDown(); //上拉加载完成之后调用的方法
    }
  }
};
</script>

<style>
</style>