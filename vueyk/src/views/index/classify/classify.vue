<template>
  <div>
    <ul class="titleClass">
      <li
        v-for="(item, index) in titleArr"
        :class="{ current: ind === index }"
        @click="changeInd(index)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <div>
      <!-- <dl v-for="(item,index) in newlist" :key="index">
          <dt>
            <img :src="item.coverUrl"/>
          </dt>
          <dd>
              <h3>{{item.bookName}}</h3>
              <p>作者:{{item.authorName}}</p>
              <p>更新:{{item.updteChapterName}}</p>
          </dd>
        </dl> -->
      <Item v-for="(item, index) in newlist" :key="index" :item="item">
        <template v-slot:des>
          <p>简介：{{ item.description }}</p>
        </template>
        <template v-slot:button="{flag}">
          {{flag}}
          <button>按钮</button>
        </template>
      </Item>
    </div>
  </div>
</template>
<script>
import "@/mock/index";
import Item from "@/components/item.vue";
export default {
  name:'classify', 
  data() {
    return {
      titleArr: ["热门", "新书", "免费", "完本"],
      ind: 0,
      list: {},
      newlist: []
    };
  },
  components: {
    //局部注册组件
    Item
  },
  created() {
    console.log(1312321);
    this.$http.get("/api/list").then(res => {
      console.log(res);
      this.list = res.data;
      this.newlist = res.data["ranklist" + this.ind];
    });
  },
  methods: {
    changeInd(ind) {
      //点击类型
      this.ind = ind;
      this.newlist = this.list["ranklist" + ind];
    }
  }
};
</script>

<style scoped>
.titleClass {
  height: 44px;
  width: 100%;
  display: flex;
}
.titleClass li {
  flex: 1;
  margin: 0 3px;
  background: #f2f2f2;
  color: #4c4c4c;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.titleClass li.current {
  background: #ff4544;
  color: #fff;
}
</style>