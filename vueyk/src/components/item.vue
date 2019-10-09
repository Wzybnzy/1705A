<template>
  <dl @click="goToDetail(item)">
    <dt>
      <img :src="item.coverUrl" />
    </dt>
    <dd>
      <h3>{{ item.bookName }}</h3>
      <p>作者:{{ item.authorName }}</p>
      <p>更新:{{ item.updteChapterName }}</p>
      <slot name="des"></slot>
      <slot name="button" :flag="falg"></slot>
    </dd>
  </dl>
</template>

<script>
export default {
  data(){
      return{
          falg:false
      }
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
        //默认值，数组和对象必须通过函数来retrun
        return {};
      }
    }
  },
  methods:{
    goToDetail(obj){
      console.log('详情');
      console.log(this.$router,this.$route); //包含所有的路由   当前的路由信息
      this.$router.push({
        name:'detail',
        params:{id:obj.bookId},
        query:{obj}
      });
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
</style>