<template>
  <div class="detail">
    详情
    <div v-html="$route.query.obj"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      html:''
    }
  },
  created(){
    console.log(this.$route.query.obj);
  }
}
</script>

<style>
.detail,img{
  height: 100%;
  width: 100%;
}
.detail>div{
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
</style>