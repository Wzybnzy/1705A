<template>
  <dl @click="goToDetail(item.detail)">
    <dt>
      <img v-lazy="item.cover" alt="" />
    </dt>
    <dd>
      <h3>{{ item.name }}</h3>
      <p>累计{{ (item.volume / 10000).toFixed(1) }}万份</p>
      <div class="price">
        <span>价格：{{ item.price }}</span>
        <span @click="goToShop(item.id)">购物车</span>
      </div>
    </dd>
  </dl>
</template>

<script>
import { addCar, getUserInfo } from "@/api/api";
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object
    }
  },
  created() {
    // console.log(this);
  },
  methods: {
    goToDetail(obj) {
      console.log("detail");
      // this.$router.push({ path: "/detail", query: { obj } });
    },
    async goToShop(id) {
      let user = await getUserInfo();
      let user_id = user.data.data.uid;
      console.log(user);

      let res = await addCar({shop_id:id,user_id:user_id});
      console.log(res,'res@@@@@@@@@@@@@@@@@@2');
    }
  }
};
</script>

<style scoped>
dl {
  display: flex;
}
dl dt {
  height: 120px;
  width: 120px;
}
dl dt img {
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
dl dd h3 {
  line-height: 30px;
}
.price {
  display: flex;
  justify-content: space-between;
}
</style>