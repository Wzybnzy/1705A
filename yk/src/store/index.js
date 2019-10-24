import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buyList: [],
    allflag: false,
    addList:[]
  },
  getters: {
    getList(state, getters) {
      return state.buyList;
    },
    getSumPrice(state,getters){ //计算总价
      return state.buyList.reduce((prev,cur)=> {
        return prev + (cur.checked ? cur.count * cur.price : 0)
      },0)
    },
    getSumCount(state,getters){
      return state.buyList.reduce((prev,cur)=>{
        return prev + cur.count;
      },0)
    }
  },
  mutations: {
    addList(state, obj) { //添加购物车
      console.log(obj, 's@@@@@@@@@@@@');
      //判断当前要添加的这条商品是否在仓库里面存在
      let ind = state.buyList.findIndex(item => item.id == obj.id);
      if (ind == -1) {
        obj.count = 1;
        obj.checked = false; //控制单选按钮是否被选中
        state.buyList.push(obj);
      } else {
        obj.count++;
      }
      state.buyList = state.buyList.concat([])
    },
    changeCheck(state, obj) { //点击单选按钮  obj:{id:,checked:}
      //点击的是第几个
      let ind = state.buyList.findIndex(item => item.id == obj.id)
      //更改第几个上边的checked状态
      state.buyList[ind].checked = obj.checked;
      state.buyList = state.buyList.concat([]);
      state.allflag = state.buyList.every(item => item.checked);
      // console.log(state.buyList[ind]);
    },
    changeAll(state, flag) { //点击全选
      state.allflag = flag;
      state.buyList.forEach(item => item.checked = flag);
    },
    changeCount(state, obj) { //点击加减  obj:{id:,count:}
      console.log('chufale');
      let ind = state.buyList.findIndex(item => item.id == obj.id);
      if(obj.count > 0){
        state.buyList[ind].count = obj.count;
      } else {
        state.buyList.splice(ind,1)
      }
      state.buyList = state.buyList.concat([]);
    },
    addresslist(state,obj){ //添加地址
      state.addList.push(obj);
    },
    editlist(state,obj){ //编辑
        state.addList[obj.ind] = obj.item;
    }

  },
  actions: {
  },
  modules: {
  }
})
