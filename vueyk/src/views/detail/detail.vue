<template>
  <div>
      <Item :item="$route.query.obj">
        <template v-slot:des>
          <div @click.stop="goToBook">
            书架
          </div>
        </template>
      </Item>
  </div>
</template>

<script>
import Item from '@/components/item'
export default {
  data(){
    return {

    }
  },
  created(){
    //详情接口
    // axios.post('/detail',{id:this.$route.params.id});
    console.log(this.$route);
  },
  components:{
    Item
  },
  methods:{
    goToBook(){ //添加书架
      this.$router.push({
        path:'/index/book'
      });
    }
  }
}
</script>

<style>

</style>