<template>
  <div>
      <div>这是我的页面的数据:{{$store.state.count}}</div>
      <div>这是我的页面map的数据:{{count}}</div>
      <br />
      <Del />
      <br />
      <Add />

      {{$store.getters.getLength}}
      {{getLength}}
      {{getfilterList(3)}}
  </div>
</template>

<script>
import Add from '@/components/add'
import Del from '@/components/del'
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['getLength','getfilterList'])
  },
  components:{
    Add,
    Del
  },
  created(){
    // this.$store.dispatch('getList','123');
    this.getList('123');
  },
  methods:{
    ...mapActions(['getList'])
  }
}
</script>

<style>

</style>