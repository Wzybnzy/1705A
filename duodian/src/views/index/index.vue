<template>
  <div class="index">
    <router-view />
    <footer>
      <dl 
      v-for="(item,index) in foot" :key="index"
      :class="{'active':index == ind}"
      @click="changeTab(index)"
      >
        <dt>
          <img :src="index == ind ? require('@/img/'+item.active):require('@/img/'+item.img)" alt="" />
        </dt>
        <dd>{{item.txt}}</dd>
      </dl>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind:0,
      foot: [
        {
          txt: "首页",
          url: "/index/home",
          img: "首页.png",
          active: "首页1.png"
        },
        {
          txt: "分类",
          url: "/index/classify",
          img: "分类.png",
          active: "分类1.png"
        },

        {
          txt: "购物车",
          url: "/index/car",
          img: "购物车.png",
          active: "购物车1.png"
        },
        {
          txt: "我的",
          url: "/index/my",
          img: "我的.png",
          active: "我的1.png"
        }
      ]
    };
  },
  methods:{
    changeTab(ind){
      this.ind = ind;
      this.$router.push({path:this.foot[ind].url});
    }
  }
};
</script>

<style scoped>
.index > div {
  flex: 1;
  overflow: hidden;
}
footer {
  height: 50px;
  width: 100%;
  display: flex;
  border-top: 1px solid #ccc;
}
footer dl {
  flex: 1;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer dl.active{
  color: red;
}
footer>dl>dt>img{
  height: 30px;
  width: 30px;
  display: inline-block;
}

</style>