<template>
  <div class="home">
    <ul class="hometitle">
      <router-link to="/index/home/super" tag="li">多点超市</router-link>
      <router-link to="/index/home/selection" tag="li">全球精选</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  >div{
    flex: 1;
    overflow-y: auto;
  }
}
.hometitle {
  display: flex;
  height: 44px;
  li {
    flex: 1;
    line-height: 44px;
    text-align: center;
  }
}
</style>