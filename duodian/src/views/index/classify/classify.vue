<template>
  <div class="classify">
    <div class="left">
      <ul class="leftlist">
        <li
          v-for="(item, index) in leftList"
          :class="{ active: index == ind }"
          @click="goToRight(index)"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="right">
      <ol v-if="leftList[ind] && leftList[ind].children.length > 0">
        <li
          v-for="(item, index) in leftList[ind].children"
          :class="{ cur: index == cur }"
          @click="changeSelect(index)"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ol>
      <Item v-for="(item, index) in rightList" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import { shopType, selectType } from "@/api/api";
import Item from "@/components/item";
export default {
  data() {
    return {
      leftList: [],
      rightList: [],
      ind: 0,
      cur: 0
    };
  },
  components: {
    Item
  },
  async created() {
    let res = await shopType();
    // console.log(this.ind);
    this.leftList = res.data.data;
    this.getRightList();
    console.log(res, right);
  },
  methods: {
    goToRight(ind) {
      //点击左侧切换
      this.ind = ind;
      this.getRightList();
    },
    changeSelect(ind) {
      //点击二级切换
      this.cur = ind;
    },
    async getRightList() { //获取右侧数据
      let right = await selectType({ type_id: this.leftList[this.ind].id });
      this.rightList = right.data.data;
    }
  }
};
</script>

<style scoped>
.classify {
  display: flex;
}
.left {
  width: 120px;
  height: 100%;
  border-right: 1px solid #ccc;
}
.left li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.left li.active {
  color: red;
}
.leftlist {
  height: 100%;
  width: 100%;
}
.right {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.right ol {
  display: flex;
}
.right ol li {
  flex: 1;
}
.right ol li.cur {
  color: red;
}
</style>