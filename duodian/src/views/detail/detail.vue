<template>
  <div>
      <div v-html="html" class="detail"></div>
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
    this.html = this.$route.query.obj;
    console.log(this.html);
  }
}
</script>

<style>
.detail{
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.detail p{
  height: 100%;
  width: 100%;
}
.detail img{
  width: 100%;
  display: inline-block;
}
</style>