<template>
  <div>
      书架
      {{getbookList}}
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{

    }
  },
  computed:{
    // ...mapState(['bookList'])
    ...mapGetters(['getbookList'])
  },
  created(){
    console.log(this);
    this.aa()
  },
  methods:{
    ...mapActions(['aa'])
  }

}
</script>

<style>

</style>>