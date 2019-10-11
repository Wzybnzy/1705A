<template>
  <div>分类</div>
</template>

<script>
import {shopType} from '@/api/api'
export default {
  data() {
    return {};
  },
  async created(){
    let res = await shopType();
    console.log(res);
  }
};
</script>

<style>
</style>>