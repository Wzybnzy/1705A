<template>
  <div>
    <ul class="title">
      <router-link to="/index/home" tag="li">首页</router-link>
      <router-link to="/index/classify" tag="li">分类</router-link>
      <router-link to="/index/ranking" tag="li">排行</router-link>
      <router-link to="/index/book" tag="li">书架</router-link>
    </ul>
    <keep-alive exclude="classify">
        <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  height: 44px;
  width: 100%;
  background: #333;
  display: flex;
}
.title li {
  flex: 1;
  line-height: 44px;
  text-align: center;
  color: #a1a1a1;
}
.title li.router-link-active {
  background-color: #454545;
  color: #f2f2f2;
}
</style>