<template>
  <dl @click="goToDetail(item.detail)">
    <dt>
      <img :src="item.cover"/>
    </dt>
    <dd>
      <h3>{{item.name}}</h3>
      <span>累计{{(item.volume/10000).toFixed(1)}}万份</span>
      <div class="price">
        <span>价格:{{item.price}}</span>
        <slot></slot>
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    item:{
      type:Object
    }
  },
  created(){
    // console.log(this.item);
  },
  methods:{
    goToDetail(obj){
      console.log(obj);
      this.$router.push({path:'/detail',query:{obj}});
    }
  }
};
</script>

<style scoped>
dl{
  display: flex;

}
dl dt{
  height: 120px;
  width: 120px;
}
dl dt img{
  height: 100%;
  width: 100%;
}
dl dd {
  flex: 1;
}
dl dd h3{
  line-height: 36px;
}
.price{
  display: flex;
  justify-content: space-between;
}
</style>