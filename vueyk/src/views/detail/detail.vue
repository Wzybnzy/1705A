<template>
  <div>
      <Item :item="$route.query.obj">
        <template v-slot:des>
          <div @click.stop="goToBook">
            书架
          </div>
        </template>
      </Item>
      {{list}}
      {{$store.state.list}}
      {{getLength}}
  </div>
</template>

<script>
import Item from '@/components/item'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
        
    }
  },
  computed:{ //计算属性
    ...mapState(['list']), //{list,booklist}
    ...mapGetters(['getLength'])
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
    ...mapMutations(['addBook']),
    // ...mapActions([''])
    goToBook(){ //添加书架
      console.log(this);
      this.addBook(this.$route.query.obj);
      // this.$store.commit('addBook',this.$route.query.obj);
      this.$router.push({
        path:'/index/book'
      });
    }
  }
}
</script>

<style>

</style>