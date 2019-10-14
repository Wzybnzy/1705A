- store.js


new Vuex.Store({
    state:{
        count:0 //需要共享的数据
    },
    gettters:{
        方法名1(state,getters){
            return state.list;
        }
    },
    mutations:{ //修改状态的唯一的途径就是通过提交commit
        方法名1(state,obj){ //obj是传递过来的值，state是自带

        },
        方法名2(){

        }
    },
    actions:{
        方法名1({commit},obj){ //第一个参数是一个上下文，里面有state,getters,mutations,actions  //第二个参数就是传递过来的值
            //异步操作

            axios.get().then(()=>{
                commit('方法名1',参数); //方法名指的是mutations里面的方法
            })
        },
        方法名2(){

        }
    }
})




- 在.vue文件里面

> 获取state里面的数据
1. this.$store.state.count   
2. ...mapState(['属性名'])

> 修改状态：同步

1. this.$store.commit('方法名','参数');
2. ...mapMutations(['方法名'])


> 异步请求

1. this.$store.dispatch('方法名','参数');
2. ...mapActions(['方法名'])   

> 获取getters

1. this.$store.getters.方法名
2. ...mapGetters(['属性名'])



// state,getters  放在 computed
// Mutations\actions  放在methods

