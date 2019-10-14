import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count:0,
      list:[]
  },
  getters:{
    getListGetters(state,getters){
      return state.list;
    },
    getLength(state,getters){
      return getters.getListGetters.length;
    },
    getfilterList:(state,getters) => (id)=> state.list.filter(item => item.id == id) 
  },
  mutations: {
    addCount(state,obj){
      state.count++;
    },
    delCount(state,obj){
      state.count--;
    },
    getListMutations(state,list){
      state.list = list;
    }
  },
  actions: { //异步请求
   async getList({commit},obj){
      let res = await axios.get('http://jsonplaceholder.typicode.com/todos');
      console.log(res);
      commit('getListMutations',res.data);
    }
  }
})
