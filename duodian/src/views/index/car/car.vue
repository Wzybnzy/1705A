<template>
  <div>
    <div class="car" v-for="(item, index) in list" :key="index">
      <span @click="changeCheck(item.id)" :class="{ active: item.flag }"></span>
      <Item :item="item.shopdata">
        <template>
          <span @click="delCount(item, item.shopid, item.userid)">-</span>
          <span>{{ item.count }}</span>
          <span @click="addCount(item, item.shopid, item.userid)">+</span>
        </template>
      </Item>
    </div>
    <div class="car">
      <span :class="{ active: allflag }" @click="allClick"></span>全选
      <p>总价：{{ sumPrice }}</p>
    </div>
  </div>
</template>

<script>
import { getCar, getUserInfo, addCar, removeCar } from "@/api/api";
import Item from "@/components/item";
export default {
  data() {
    return {
      list: [],
      sumPrice: 0,
      allflag: false
    };
  },
  
  components: { Item },
  async created() {
    // console.log(user);
    this.getList(true);
    // this.list.forEach(item => {
    //   this.$set(item, "flag", false); //给哪个对象新增   新增对象的属性名   新增对象的属性值
    // });
    console.log(this.list);
  },
  methods: {
    changeCheck(id) {
      console.log("点击单选", id);
      let ind = this.list.findIndex(item => item.id == id);
      this.list[ind].flag = !this.list[ind].flag;
      // console.log(this.list,'this.list');
      this.allflag = this.list.every(item => item.flag);
      this.sumPrice = this.getSumPrice();
      // console.log(flag,'falg@@@@@@@@@@@@2'); some()
    },
    allClick() {
      //点击全选
      this.allflag = !this.allflag;
      this.list.forEach(item => (item.flag = this.allflag));
      this.sumPrice = this.getSumPrice();
    },
    async getList(flag) {
      let user = await getUserInfo();
      let res = await getCar({ user_id: user.data.data.uid });
      // console.log(res, "res");
      this.list = res.data.data; //购物车列表所有的数据
      this.list.forEach(item => {
        this.$set(item, "flag", false); //给哪个对象新增   新增对象的属性名   新增对象的属性值
      });
    },
    async addCount(obj, shop_id, user_id) {
      //添加数据
      let res = await addCar({ shop_id, user_id });
      console.log(res, "addCount");
      obj.count++;
      // this.getList();

      this.sumPrice = this.getSumPrice();
    },
    async delCount(obj, shop_id, user_id) {
      let res = await removeCar({ shop_id, user_id });
      obj.count--;
      this.sumPrice = this.getSumPrice();
      // this.getList();
    },
    getSumPrice() {
      // let sum = 0;
      // this.list.forEach(item => {
      //   if (item.flag) {
      //     sum += item.count * item.shopdata.price;
      //   }
      // });

      return this.list.reduce((prev, cur) => {
        //prev 上一次的计算结果   cur是当前项
        return prev + (cur.flag ? cur.count * cur.shopdata.price : 0);
      }, 0);
      // console.log(sum);
    }
  }
};
</script>

<style scoped>
.car {
  display: flex;
}
.car > span {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  border: 1px solid #ccc;
}
.car > span.active {
  background: red;
}
.car > dl {
  flex: 1;
}
</style>