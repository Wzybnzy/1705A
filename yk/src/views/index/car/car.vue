<template>
  <div class="car">
   <div>
     <span :class="['allflag',allflag ? 'active' :'']" @click="changeAll(!allflag)"></span> 全选
   </div>
   <dl v-for="(item,index) in getList" :key="index">
      <dt>
        <span :class="['allflag', item.checked ? 'active' :'']" @click="changeCheck({id:item.id,checked:!item.checked})"></span>
      </dt>
      <dd>
        <div>
          <h3>标题:{{item.title}}</h3>
          <p>价格:{{item.price}}</p>
        </div>
        <div>
          <span @click="changeCount({id:item.id,count:item.count-1})">-</span>
          <span>{{item.count}}</span>
          <span @click="changeCount({id:item.id,count:item.count+1})">+</span>
        </div>
      </dd>
   </dl>
   <div>总价：{{getSumPrice}}</div>

  </div>
</template>

<script>
import {mapGetters,mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['getList','getSumPrice']),
    ...mapState(['allflag'])
  },
  methods:{
    ...mapMutations(['changeCheck','changeAll','changeCount'])
  }
};
</script>

<style lang="scss">
.car{
  .allflag{
    height: 30px;
    width: 30px;
    border: 1px solid #ccc;
    border-radius: 100%;
    display: inline-block;
  }
  dl{
    display: flex;
    dd{
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
  }
}
.active{
  background: red;
}

</style>