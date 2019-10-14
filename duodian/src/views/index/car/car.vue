<template>
  <div>
    <div class="car" v-for="(item,index) in list" :key="index">
      <span @click="changeCheck(item.id)" :class="{'active':item.flag}"></span>
      <Item :item="item.shopdata">
        <template>
           <span>-</span>
           <span>{{item.count}}</span>
           <span>+</span>
        </template>
      </Item>
    </div>
    <div class="car">
      <span></span>全选
      <p>总价：0</p>
    </div>
  </div>
</template>

<script>
import { getCar, getUserInfo } from "@/api/api";
import Item from "@/components/item";
export default {
  data() {
    return {
      list: []
    };
  },
  components: { Item },
  async created() {
    let user = await getUserInfo();
    // console.log(user);
    let res = await getCar({ user_id: user.data.data.uid });
    // console.log(res, "res");
    this.list = res.data.data;  //购物车列表所有的数据

    this.list.forEach(item => {
      this.$set(item,'flag',false); //给哪个对象新增   新增对象的属性名   新增对象的属性值
    });

    console.log(this.list);

  },
  methods:{
    changeCheck(id){
      console.log('点击单选',id);
      let ind = this.list.findIndex(item => item.id == id);
      this.list[ind].flag = !this.list[ind].flag;
      console.log(this.list,'this.list');
    }
  }
};
</script>

<style scoped>
.car{
  display: flex;
}
.car>span{
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius:100%;
  border:1px solid #ccc;
}
.car>span.active{
  background: red;
}
.car>dl{
  flex: 1;
}
</style>