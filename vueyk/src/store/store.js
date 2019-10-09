import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex) //注册插件 install

export default new Vuex.Store({
  state: {  //放的是共享的数据
    list:[{age:18,name:'小花'},{age:21,name:'小黑'},{age:23,name:'小兰'}],
    bookList:[]
  },
  getters:{ // 从state里面派生出来新的数据的时候
    getPeople(state,getters){ //所有小于20
        return state.list.filter(item => item.age < 20)
    },
    getLength(state,getters){
      return getters.getPeople.length
    },
    getbookList(state,getters){
      return state.bookList
    }
  },
  mutations: { // 修改state状态，并且修改状态的唯一途径就是提交mutations
    addBook(state,obj){  //添加书架
      state.bookList.push(obj);
    }
  },
  actions: { // 异步的
    aa({commit}){
        // console.log(ctx,'*********');
        Axios.get('/api/login').then((res)=>{
            // commit('addBook');
        });
    }
  }
})
