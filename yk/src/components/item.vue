<template>
  <dl>
      <dt>
          <img :src="item.img" alt="">
      </dt>
      <dd>
          <h3>{{item.title}}</h3>
          <p>{{item.price}}</p>
          <p @click="addList(item)">+</p>
      </dd>
  </dl>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{}
    },
    props:{
        item:{
            type:Object
        }
    },
    methods:{
        ...mapMutations(['addList'])
        // addItem(){
        //     console.log(this.item);
        //     this.addList(),
    //  aa = 1
        // }
    }
}
</script>

<style>

</style>