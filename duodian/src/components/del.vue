<template>
  <div>
    <div>这是递减页面的数据:{{ $store.state.count }}</div>
    <button @click="del">递减</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    del() {
      this.$store.commit("delCount", "123");
    }
  }
};
</script>

<style>
</style>