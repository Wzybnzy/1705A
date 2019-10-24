<template>
  <div class="index">
      <router-view></router-view>
      <footer>
        <router-link to="/index/home">首页</router-link>
        <router-link to="/index/classify">分类</router-link>
        <router-link to="/index/car">购物车{{getSumCount}}</router-link>
        <router-link to="/index/my">我的</router-link>
      </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(['getSumCount'])
  }
}
</script>

<style lang="scss">
.index{
  display: flex;
  flex-direction: column;
  >div{
    flex: 1;
    // overflow-y: auto;
    overflow: hidden;
  }
  footer{
    height: 50px;
    width: 100%;
    display: flex;
    border-top: 1px solid #ccc;
    a{
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>