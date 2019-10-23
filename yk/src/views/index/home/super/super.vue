<template>
  <div>
      <Item v-for="(item,index) in list" :key="index" :item="item"/>
  </div>
</template>

<script>
import "@/mock/index";
import Item from '@/components/item'
export default {
  data() {
    return {
      list: []
    };
  },
  components:{
    Item
  },
  async created() {
    let res =await this.$http.get("/api/list");
    console.log(res);
    this.list = res.data.list;
  }
};
</script>

<style>
</style>