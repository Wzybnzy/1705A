<template>
  <div>
      <div>这是递增页面的数据:{{count}}</div>
      <button @click="addCount('123')">递增</button>
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
        ...mapMutations(['addCount'])
        // add(){
        //     // this.$store.state.count++;
        //     this.$store.commit('addCount','123');
        // }
    }
}
</script>

<style>

</style>