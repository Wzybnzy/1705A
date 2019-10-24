<template>
  <div class="addlist">
    <ul v-if="addList.length > 0">
      <li v-for="(item, index) in addList" :key="index">
        <span  @click="changeCheck(index)" :class="{'cur':index == ind}"></span>
        <div>
          <div>
            <span>姓名:{{ item.name }}</span>
            <span @click="goToEdit({ type: 'edit',item,index })">编辑</span>
          </div>
          <p>电话:{{ item.phone }}</p>
          <p>地址:{{ item.address }}</p>
        </div>
      </li>
    </ul>
    <div v-else>暂无地址</div>
    <button @click="goToEdit({ type: 'add' })">添加地址</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name:'Address',
  data() {
    return {
      list: [],
      ind:null
    };
  },
  computed: {
    ...mapState(["addList"])
  },
  methods: {
    goToEdit(obj) {
      console.log(obj);
      let { type } = obj;
      if (type == "add") { //新增
        this.$router.push({
          path: "/editadd",
          query:{
            type
          }
        });
      } else { //编辑过来的
        this.$router.push({
          path: "/editadd",
          query:{
            ...obj.item,
            type,
            ind:obj.index
          }
        });
      }
    },
    changeCheck(ind){
        this.ind = ind;
        console.log(this.addList[ind].address);
        window.localStorage.address = this.addList[ind].address;
        this.$router.push({
          name:'home'
        });
    } 
  }
};
</script>

<style lang="scss">
.addlist {
  li {
    display: flex;
    > span {
      height: 30px;
      width: 30px;
      border: 1px solid #ccc;
      border-radius: 100%;
    }
    > div {
      flex: 1;
      > div {
        display: flex;
        justify-content: space-between;
      }
      p {
        width: 100%;
        text-align: left;
      }
    }
  }
}
.cur {
  background: red;
}
</style>