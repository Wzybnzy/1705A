<template>
  <div>
      <div>这是递增页面的数据:{{count}}</div>
      <button @click="add('123')">递增</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['addCount'])  // {addCount:function(){},addCount1:func(){}}
        // add(){
        //     // this.$store.state.count++;
        //     this.$store.commit('addCount','123');
        // }
        // add(){
        //     console.log(41234213);
        //     this.addCount();
        // }
      
    }
}
</script>

<style>

</style>